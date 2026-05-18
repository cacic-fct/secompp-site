import type { EventLecturer } from './EventLecturer';

export type ScheduleEventType = 'minicurso' | 'palestra';
export type ScheduleEvent = {
  lecturers: Array<EventLecturer>;
  eventName: string;
  startTime: Date;
  endTime: Date;
  place: string;
  type: ScheduleEventType;
  shortDescription: string;
  fullDescription: string;
};
export type ScheduleEventList = Array<ScheduleEvent>;
export type ScheduleEventRow = Array<ScheduleEvent | null>;
export type ScheduleEventGrid = Array<ScheduleEventRow>;
export interface ScheduleEventClickHandler {
  (event: ScheduleEvent): void;
}
