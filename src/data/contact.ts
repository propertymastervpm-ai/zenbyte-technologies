export const enquiryServices = [
  "Custom Software",
  "Web Application",
  "SaaS Product",
  "Automation",
  "Enterprise Application",
  "API Integration",
  "Virtual Property Master",
  "Other",
] as const;

export type EnquiryService = (typeof enquiryServices)[number];

export type EnquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: EnquiryService;
  message: string;
};
