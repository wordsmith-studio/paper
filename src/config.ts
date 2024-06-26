import type { Site } from "./types";

import websiteDetails from "./website.json";

export const SITE: Site = {
  website: `https://${websiteDetails.url}/`,
  domain: websiteDetails.url,
  font: websiteDetails.font || "Montserrat",
  analyticsEnabled: websiteDetails.analyticsEnabled,
  desc: websiteDetails.description,
  title: websiteDetails.name,
  cf: websiteDetails.cf,
  footer: websiteDetails.footer,
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
