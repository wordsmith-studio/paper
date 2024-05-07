export type Site = {
  website: string;
  domain: string;
  desc: string;
  title: string;
  ogImage?: string;
  analyticsEnabled: boolean;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};
