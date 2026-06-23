import type { EventLecturer } from './EventLecturer';

export type ScheduleEventType = 'minicurso' | 'palestra';
export type ScheduleEvent = {
  id: string;
  lecturers: Array<EventLecturer>;
  eventName: string;
  emoji: string;
  startTime: Date;
  endTime: Date;
  dateKey: string;
  place: string;
  type: ScheduleEventType;
  shortDescription: string;
  fullDescription: string;
  groupName?: string;
};
export type ScheduleEventList = Array<ScheduleEvent>;
export type ScheduleEventCell = Array<ScheduleEvent>;
export type ScheduleDay = {
  key: string;
  weekday: string;
  dateLabel: string;
};
export type ScheduleEventRow = {
  startTime: string;
  type: ScheduleEventType;
  cells: Array<ScheduleEventCell>;
};
export type ScheduleEventGrid = Array<ScheduleEventRow>;
export interface ScheduleEventClickHandler {
  (event: ScheduleEvent): void;
}
