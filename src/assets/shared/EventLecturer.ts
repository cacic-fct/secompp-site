export type EventLecturerUrl = { path: string; label?: string };
export type EventLecturer = {
  name: string;
  description?: string;
  link?: EventLecturerUrl;
  email?: string;
  avatarUrl?: string;
};

export function lecturerHasDetailInfo(lecturer: EventLecturer) {
  return !!lecturer.description || !!lecturer.email || !!lecturer.link;
}
