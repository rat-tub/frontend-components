export interface EventCard {
  image: string; //link to image
  imageAlt: string;
  title: string;
  organizer1: string;
  organizer2?: string;
  organizer3?: string;
  date: string;
  venue?: string;
  description: string;
  guests?: string;
  winners?: string;
  reportLink?: string;
}
