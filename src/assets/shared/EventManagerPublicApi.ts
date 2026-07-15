import type {
  GraphqlResponse,
  GraphqlVariables,
  PublicEvent,
  PublicLecturerProfile,
  PublicMajorEvent,
} from '@cacic-fct/event-manager-public-contracts';

export const EVENT_MANAGER_API_URL = 'https://eventos.cacic.com.br/api/graphql';
const EVENT_MANAGER_DEV_API_URL = '/event-manager-api/graphql';
export const SECOMPP_MAJOR_EVENT_ID = '018cc251-f400-77b8-ac7f-a0874360c3e4';

const EVENT_PAGE_SIZE = 100;

const SECOMPP_MAJOR_EVENT_FIELDS = `
  startDate
  endDate
  isPaymentRequired
  majorEventPrices {
    id
    type
    tiers {
      id
      name
      value
    }
  }
`;

const SECOMPP_EVENT_FIELDS = `
  id
  name
  emoji
  type
  startDate
  endDate
  shortDescription
  description
  locationDescription
  eventGroup {
    name
    emoji
  }
  lecturers {
    displayName
    biography
    publishGoogleUserPicture
    googleUserPicture
    email
    whatsapp
  }
`;

export type SecomppPublicMajorEvent = Pick<PublicMajorEvent, 'startDate' | 'endDate'>;
export type SecomppPublicMajorEventPriceTier = {
  id: string;
  name: string;
  value: number;
};
export type SecomppPublicMajorEventPrice = {
  id: string;
  type: 'SINGLE' | 'TIERED';
  tiers: SecomppPublicMajorEventPriceTier[];
};
export type SecomppPublicMajorEventInfo = SecomppPublicMajorEvent & {
  isPaymentRequired?: boolean | null;
  majorEventPrices?: SecomppPublicMajorEventPrice[];
};
export type SecomppPublicLecturer = Pick<
  PublicLecturerProfile,
  'displayName' | 'biography' | 'publishGoogleUserPicture' | 'googleUserPicture' | 'email' | 'whatsapp'
>;
export type SecomppPublicEvent = Pick<
  PublicEvent,
  | 'id'
  | 'name'
  | 'emoji'
  | 'type'
  | 'startDate'
  | 'endDate'
  | 'shortDescription'
  | 'description'
  | 'locationDescription'
> & {
  eventGroup?: Pick<NonNullable<PublicEvent['eventGroup']>, 'name' | 'emoji'> | null;
  lecturers?: SecomppPublicLecturer[];
};

const SECOMPP_SCHEDULE_QUERY = `
  query SecomppSchedule($majorEventId: String!, $skip: Int, $take: Int) {
    publicMajorEvent(id: $majorEventId) {
      ${SECOMPP_MAJOR_EVENT_FIELDS}
    }
    publicEvents(majorEventId: $majorEventId, skip: $skip, take: $take) {
      ${SECOMPP_EVENT_FIELDS}
    }
  }
`;

const SECOMPP_EVENTS_QUERY = `
  query SecomppEvents($majorEventId: String!, $skip: Int, $take: Int) {
    publicEvents(majorEventId: $majorEventId, skip: $skip, take: $take) {
      ${SECOMPP_EVENT_FIELDS}
    }
  }
`;

const SECOMPP_MAJOR_EVENT_QUERY = `
  query SecomppMajorEvent($majorEventId: String!) {
    publicMajorEvent(id: $majorEventId) {
      ${SECOMPP_MAJOR_EVENT_FIELDS}
    }
  }
`;

export type SecomppScheduleData = {
  majorEvent: SecomppPublicMajorEventInfo;
  events: SecomppPublicEvent[];
};

type SecomppScheduleQuery = {
  publicMajorEvent: SecomppPublicMajorEventInfo;
  publicEvents: SecomppPublicEvent[];
};

type SecomppEventsQuery = {
  publicEvents: SecomppPublicEvent[];
};

type SecomppMajorEventQuery = {
  publicMajorEvent: SecomppPublicMajorEventInfo;
};

async function queryEventManager<TData>(query: string, variables: GraphqlVariables): Promise<TData> {
  const response = await fetch(getEventManagerApiUrl(), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Event Manager respondeu com HTTP ${response.status}.`);
  }

  const payload = (await response.json()) as GraphqlResponse<TData>;

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join('\n'));
  }

  if (!payload.data) {
    throw new Error('Event Manager respondeu sem dados.');
  }

  return payload.data;
}

function getEventManagerApiUrl() {
  return import.meta.env.DEV ? EVENT_MANAGER_DEV_API_URL : EVENT_MANAGER_API_URL;
}

export async function fetchSecomppSchedule(
  majorEventId: string = SECOMPP_MAJOR_EVENT_ID,
): Promise<SecomppScheduleData> {
  const firstPage = await queryEventManager<SecomppScheduleQuery>(SECOMPP_SCHEDULE_QUERY, {
    majorEventId,
    skip: 0,
    take: EVENT_PAGE_SIZE,
  });

  if (!firstPage.publicMajorEvent) {
    throw new Error('Event Manager não retornou o evento principal.');
  }

  if (!Array.isArray(firstPage.publicEvents)) {
    throw new Error('Event Manager não retornou a programação.');
  }

  const events = [...firstPage.publicEvents];
  let skip = EVENT_PAGE_SIZE;

  while (events.length === skip) {
    const page = await queryEventManager<SecomppEventsQuery>(SECOMPP_EVENTS_QUERY, {
      majorEventId,
      skip,
      take: EVENT_PAGE_SIZE,
    });

    if (!Array.isArray(page.publicEvents)) {
      throw new Error('Event Manager não retornou a programação.');
    }

    events.push(...page.publicEvents);

    if (page.publicEvents.length < EVENT_PAGE_SIZE) {
      break;
    }

    skip += EVENT_PAGE_SIZE;
  }

  return {
    majorEvent: firstPage.publicMajorEvent,
    events,
  };
}

export async function fetchSecomppMajorEvent(
  majorEventId: string = SECOMPP_MAJOR_EVENT_ID,
): Promise<SecomppPublicMajorEventInfo> {
  const data = await queryEventManager<SecomppMajorEventQuery>(SECOMPP_MAJOR_EVENT_QUERY, {
    majorEventId,
  });

  if (!data.publicMajorEvent) {
    throw new Error('Event Manager não retornou o evento principal.');
  }

  return data.publicMajorEvent;
}
