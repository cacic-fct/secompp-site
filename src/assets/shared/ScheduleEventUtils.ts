import type { EventLecturer } from './EventLecturer';
import type { EventType } from '@cacic-fct/event-manager-public-contracts';
import { addDays, addMinutes, compareAsc, format, intlFormat, parse, parseISO } from 'date-fns';
import type {
  SecomppPublicEvent,
  SecomppPublicLecturer,
  SecomppPublicMajorEvent,
} from '@lib/shared/EventManagerPublicApi';
import type {
  ScheduleDay,
  ScheduleEvent,
  ScheduleEventGrid,
  ScheduleEventList,
  ScheduleEventRow,
} from './ScheduleEvent';

export const EVENT_TIME_ZONE = 'America/Sao_Paulo';
const UTC_TIME_ZONE = 'UTC';
const EVENT_DATE_FORMAT = 'yyyy-MM-dd HH:mm';
const REFERENCE_DATE = parseISO('2000-01-01T00:00:00');

export function createEvent(
  eventName: string,
  place: string,
  /**
   * 0 - minicurso
   * 1 - palestra
   */
  type: 0 | 1,
  startTime: Date,
  /**
   * duração em minutos
   */
  duration = 30,
  fullDescription = '',
  shortDescription = '',
  lecturers: EventLecturer[] = [],
): ScheduleEvent {
  const id = `${eventName}-${format(startTime, "yyyy-MM-dd'T'HH:mm:ssXXX")}`;

  return {
    id,
    place,
    eventName,
    lecturers,
    startTime,
    dateKey: getEventDateKey(startTime),
    fullDescription,
    shortDescription,
    type: type === 0 ? 'minicurso' : 'palestra',
    endTime: addMinutes(startTime, duration),
  };
}

export function createEventDate(dateTime: string) {
  return parse(dateTime.replace('T', ' '), EVENT_DATE_FORMAT, REFERENCE_DATE);
}

export function getEventDateKey(date: Date | string) {
  return formatInTimeZone(
    typeof date === 'string' ? parseISO(date) : date,
    EVENT_TIME_ZONE,
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
    'en-CA',
  );
}

export function getEventStart(event: ScheduleEvent | null | undefined) {
  return event ? formatInTimeZone(event.startTime, EVENT_TIME_ZONE, { hour: '2-digit', minute: '2-digit' }) : '00:00';
}

export function getEventEnd(event: ScheduleEvent | null | undefined) {
  return event ? formatInTimeZone(event.endTime, EVENT_TIME_ZONE, { hour: '2-digit', minute: '2-digit' }) : '00:00';
}

export function getEventDate(event: ScheduleEvent) {
  return formatDateKey(event.dateKey);
}

export function getEventType(row: ScheduleEventRow | undefined) {
  return row?.type ?? 'minicurso';
}

export function getShortLocationName(location: string) {
  return location.split(' - ')[0]?.trim() || location;
}

export function formatMajorEventDateRange(majorEvent: SecomppPublicMajorEvent) {
  const start = parseDateKey(getEventDateKey(majorEvent.startDate));
  const end = parseDateKey(getEventDateKey(majorEvent.endDate));
  const startDate = dateKeyToUtcDate(getEventDateKey(majorEvent.startDate));
  const endDate = dateKeyToUtcDate(getEventDateKey(majorEvent.endDate));
  const startMonth = formatInTimeZone(startDate, UTC_TIME_ZONE, { month: 'long' }, 'pt-BR');
  const endMonth = formatInTimeZone(endDate, UTC_TIME_ZONE, { month: 'long' }, 'pt-BR');

  if (start.year === end.year && start.month === end.month) {
    return `${formatDay(start.day)} a ${formatDay(end.day)} de ${startMonth} de ${start.year}`;
  }

  if (start.year === end.year) {
    return `${formatDay(start.day)} de ${startMonth} a ${formatDay(end.day)} de ${endMonth} de ${start.year}`;
  }

  return `${formatDay(start.day)} de ${startMonth} de ${start.year} a ${formatDay(end.day)} de ${endMonth} de ${
    end.year
  }`;
}

export function createScheduleDays(majorEvent: SecomppPublicMajorEvent | null, events: ScheduleEvent[]): ScheduleDay[] {
  const eventDateKeys = events.map((event) => event.dateKey).sort();
  const startKey = majorEvent ? getEventDateKey(majorEvent.startDate) : eventDateKeys[0];
  const endKey = majorEvent ? getEventDateKey(majorEvent.endDate) : eventDateKeys[eventDateKeys.length - 1];

  if (!startKey || !endKey) {
    return [];
  }

  return getDateKeyRange(startKey, endKey).map((key) => ({
    key,
    weekday: capitalize(formatInTimeZone(dateKeyToUtcDate(key), UTC_TIME_ZONE, { weekday: 'long' }, 'pt-BR')),
    dateLabel: formatScheduleDayLabel(key),
  }));
}

export function createScheduleGrid(schedule: ScheduleEventList, days?: ScheduleDay[]): ScheduleEventGrid {
  const tableDays = days?.length ? days : createScheduleDays(null, schedule);
  const rowsByStartTime = new Map<string, ScheduleEventRow[]>();

  for (const event of schedule) {
    const dayIndex = tableDays.findIndex((day) => day.key === event.dateKey);

    if (dayIndex === -1) {
      continue;
    }

    const startTime = getEventStart(event);
    const rows = rowsByStartTime.get(startTime) ?? [];
    let row = rows.find((currentRow) => currentRow.cells[dayIndex]?.length === 0);

    if (!row) {
      row = {
        startTime,
        type: event.type,
        cells: tableDays.map(() => []),
      };
      rows.push(row);
      rowsByStartTime.set(startTime, rows);
    }

    row.cells[dayIndex]?.push(event);
  }

  const rows = [...rowsByStartTime.values()].flat();

  for (const row of rows) {
    for (const cell of row.cells) {
      cell.sort(compareScheduleEvents);
    }
  }

  return rows.sort((left, right) => left.startTime.localeCompare(right.startTime));
}

export function publicEventToScheduleEvent(event: SecomppPublicEvent): ScheduleEvent | null {
  const type = toScheduleEventType(event.type);

  if (!type) {
    return null;
  }

  const startTime = parseISO(event.startDate);
  const endTime = parseISO(event.endDate);

  return {
    id: event.id,
    eventName: event.name,
    startTime,
    endTime,
    dateKey: getEventDateKey(startTime),
    place: event.locationDescription?.trim() || 'Local a definir',
    type,
    shortDescription: event.shortDescription?.trim() ?? '',
    fullDescription: event.description?.trim() ?? '',
    lecturers: (event.lecturers ?? []).map(publicLecturerToEventLecturer),
    ...(event.eventGroup?.name ? { groupName: event.eventGroup.name } : {}),
  };
}

function publicLecturerToEventLecturer(lecturer: SecomppPublicLecturer): EventLecturer {
  const whatsapp = lecturer.whatsapp?.replace(/\D/g, '');

  return {
    name: lecturer.displayName,
    ...(lecturer.biography?.trim() ? { description: lecturer.biography.trim() } : {}),
    ...(lecturer.email?.trim() ? { email: lecturer.email.trim() } : {}),
    ...(lecturer.publishGoogleUserPicture && lecturer.googleUserPicture
      ? { avatarUrl: lecturer.googleUserPicture }
      : {}),
    ...(whatsapp ? { link: { path: `https://wa.me/${whatsapp}`, label: 'WhatsApp' } } : {}),
  };
}

function toScheduleEventType(type: EventType) {
  if (type === 'MINICURSO') {
    return 'minicurso';
  }

  if (type === 'PALESTRA') {
    return 'palestra';
  }

  return null;
}

export function compareScheduleEvents(left: ScheduleEvent, right: ScheduleEvent) {
  const startTimeDiff = compareAsc(left.startTime, right.startTime);

  if (startTimeDiff !== 0) {
    return startTimeDiff;
  }

  return left.eventName.localeCompare(right.eventName, 'pt-BR');
}

function getDateKeyRange(startKey: string, endKey: string) {
  const dates: string[] = [];
  const endDate = dateKeyToUtcDate(endKey);

  for (let current = dateKeyToUtcDate(startKey); compareAsc(current, endDate) <= 0; current = addDays(current, 1)) {
    dates.push(dateToKey(current));
  }

  return dates;
}

function formatDateKey(key: string) {
  return formatInTimeZone(dateKeyToUtcDate(key), UTC_TIME_ZONE, { day: '2-digit', month: '2-digit' }, 'pt-BR');
}

function formatScheduleDayLabel(key: string) {
  return formatInTimeZone(
    dateKeyToUtcDate(key),
    UTC_TIME_ZONE,
    { day: '2-digit', month: '2-digit', year: '2-digit' },
    'pt-BR',
  );
}

function dateKeyToUtcDate(key: string) {
  return parseISO(`${key}T00:00:00.000Z`);
}

function parseDateKey(key: string) {
  const [year, month, day] = key.split('-').map(Number);

  if (!year || !month || !day) {
    throw new Error(`Data inválida: ${key}`);
  }

  return { year, month, day };
}

function dateToKey(date: Date) {
  return formatInTimeZone(date, UTC_TIME_ZONE, { year: 'numeric', month: '2-digit', day: '2-digit' }, 'en-CA');
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatDay(day: number) {
  return String(day).padStart(2, '0');
}

function formatInTimeZone(date: Date, timeZone: string, formatOptions: Intl.DateTimeFormatOptions, locale = 'pt-BR') {
  return intlFormat(date, { timeZone, ...formatOptions }, { locale });
}
