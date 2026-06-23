declare module '@cacic-fct/event-manager-public-contracts' {
  export type DateTimeString = string;
  export type EventType = 'MINICURSO' | 'PALESTRA' | 'OTHER';

  export type GraphqlVariable = string | number | boolean | null | undefined | readonly string[];
  export type GraphqlVariables = Record<string, GraphqlVariable>;

  export interface GraphqlError {
    message: string;
  }

  export interface GraphqlResponse<TData> {
    data?: TData;
    errors?: GraphqlError[];
  }

  export interface PublicMajorEvent {
    id: string;
    name: string;
    startDate: DateTimeString;
    endDate: DateTimeString;
    isPaymentRequired?: boolean | null;
    majorEventPrices?: PublicMajorEventPrice[];
  }

  export interface PublicMajorEventPriceTier {
    id: string;
    name: string;
    value: number;
  }

  export interface PublicMajorEventPrice {
    id: string;
    type: 'SINGLE' | 'TIERED';
    tiers: PublicMajorEventPriceTier[];
  }

  export interface PublicEventGroup {
    id: string;
    name: string;
  }

  export interface PublicLecturerProfile {
    id: string;
    displayName: string;
    biography?: string | null;
    publishGoogleUserPicture: boolean;
    googleUserPicture?: string | null;
    email?: string | null;
    whatsapp?: string | null;
  }

  export interface PublicEvent {
    id: string;
    name: string;
    startDate: DateTimeString;
    endDate: DateTimeString;
    type: EventType;
    description?: string | null;
    shortDescription?: string | null;
    locationDescription?: string | null;
    eventGroup?: PublicEventGroup | null;
    lecturers?: PublicLecturerProfile[];
  }
}
