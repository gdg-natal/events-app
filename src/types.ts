export type CalendarDayType = {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: string;
  description?: string;
  location: string;
  updated: string;
  summary: string;
  creator: {
    email: string;
  };
  organizer: {
    email: string;
    displayName: string;
    self: boolean;
  };
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  iCalUID: string;
  sequence: number;
  eventType: string;
  order?: number;
};

export type HourType = {
  dateTime: string;
  items: CalendarDayType[];
};

export type SpeakerType = {
  name: string;
  bio: string;
  pictureUrl: string;
  slug: string;
  socialLinks?: {
    instagram?: string;
    linkedIn?: string;
    github?: string;
  };
  talk: {
    title: string;
    description: string;
    stage: string;
    time: string;
    type: string;
  };
};
