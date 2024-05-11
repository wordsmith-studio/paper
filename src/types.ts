export type Site = {
  website: string;
  domain: string;
  desc: string;
  title: string;
  font: string;
  ogImage?: string;
  analyticsEnabled: boolean;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
  cf: any;
};
