import { readCacicTrackingCookies, type CacicUmamiGlobal } from '@cacic-fct/account-manager-privacy/umami-tracking';
import type { ScheduleEvent } from './ScheduleEvent';

declare global {
  interface Window {
    umami?: CacicUmamiGlobal;
  }
}

type TrackingValue = boolean | number | string | null | undefined;
type TrackingPayload = Record<string, TrackingValue>;

const SCHEDULE_EVENT_CLICK = 'calendar_event_click';
const FAQ_ITEM_OPEN = 'faq_item_open';
const OUTGOING_LINK_CLICK = 'outgoing_link_click';

let isRegistered = false;

export function registerSiteInteractionTracking(): void {
  if (typeof window === 'undefined' || isRegistered) {
    return;
  }

  isRegistered = true;
  document.addEventListener('change', trackFaqAccordionChange);
  document.addEventListener('click', trackLinkClick);
}

export function trackScheduleEventClick(event: ScheduleEvent): void {
  trackSiteInteraction(SCHEDULE_EVENT_CLICK, {
    event_date: event.dateKey,
    event_end: event.endTime.toISOString(),
    event_group: event.groupName,
    event_id: event.id,
    event_name: event.eventName,
    event_place: event.place,
    event_start: event.startTime.toISOString(),
    event_type: event.type,
  });
}

function trackFaqAccordionChange(event: Event): void {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }

  const input = event.target;

  if (input.name !== 'faq-accordion' || !input.checked) {
    return;
  }

  trackSiteInteraction(FAQ_ITEM_OPEN, {
    faq_id: input.id,
    faq_question: input.dataset.analyticsLabel ?? getFaqQuestion(input),
  });
}

function trackLinkClick(event: MouseEvent): void {
  if (!(event.target instanceof Element)) {
    return;
  }

  const link = event.target.closest<HTMLAnchorElement>('a[href]');

  if (!link) {
    return;
  }

  if (link.dataset.analyticsEvent) {
    trackSiteInteraction(link.dataset.analyticsEvent, getLinkPayload(link));
    return;
  }

  if (isOutgoingLink(link)) {
    trackSiteInteraction(OUTGOING_LINK_CLICK, getLinkPayload(link));
  }
}

function trackSiteInteraction(eventName: string, payload: TrackingPayload): void {
  if (typeof window === 'undefined' || readCacicTrackingCookies().consent?.analyticsAllowed === false) {
    return;
  }

  try {
    window.umami?.track?.(eventName, compactPayload(payload));
  } catch {
    // Tracking must not interrupt user interactions.
  }
}

function getLinkPayload(link: HTMLAnchorElement): TrackingPayload {
  const linkUrl = new URL(link.href);

  return {
    link_domain: linkUrl.hostname || undefined,
    link_label: link.dataset.analyticsLabel,
    link_location: link.dataset.analyticsLocation ?? getNearestSectionId(link),
    link_protocol: linkUrl.protocol.replace(':', ''),
    link_target: link.target || undefined,
    link_text: getLinkText(link),
    link_url: link.href,
  };
}

function isOutgoingLink(link: HTMLAnchorElement): boolean {
  const linkUrl = new URL(link.href);

  if (linkUrl.protocol === 'mailto:' || linkUrl.protocol === 'tel:') {
    return true;
  }

  return (linkUrl.protocol === 'http:' || linkUrl.protocol === 'https:') && linkUrl.origin !== window.location.origin;
}

function getLinkText(link: HTMLAnchorElement): string | undefined {
  const text = link.textContent?.replace(/\s+/g, ' ').trim();
  return text || link.getAttribute('aria-label') || link.dataset.analyticsLabel || undefined;
}

function getNearestSectionId(element: Element): string | undefined {
  return element.closest<HTMLElement>('[id]')?.id;
}

function getFaqQuestion(input: HTMLInputElement): string | undefined {
  return document
    .querySelector<HTMLLabelElement>(`label[for="${CSS.escape(input.id)}"]`)
    ?.textContent?.replace(/\s+/g, ' ')
    .trim();
}

function compactPayload(payload: TrackingPayload): Record<string, boolean | number | string | null> {
  return Object.fromEntries(
    Object.entries(payload).filter(
      (entry): entry is [string, boolean | number | string | null] => entry[1] !== undefined,
    ),
  );
}
