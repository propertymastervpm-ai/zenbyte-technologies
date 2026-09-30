export const site = {
  name: "Zenbyte Technologies",
  legalName: "ZENBYTE TECHNOLOGIES",
  url: "https://www.zenbytetechnologies.com",
  email: "uday@zenbytetechnologies.com",
  phoneDisplay: "+91 9008494100",
  phoneTel: "+919008494100",
  gstin: "29ASNPK2033J1ZJ",
  description:
    "Zenbyte Technologies designs, builds, and scales software products and digital solutions for modern businesses.",
  addressLines: [
    "ZENBYTE TECHNOLOGIES",
    "No. 601, Sixth Floor",
    "Hongasandra, 9th Main, 4th Cross",
    "Garvebhavi Palya",
    "Near Krishna Bakery",
    "Bengaluru, Karnataka, India",
  ],
  contactAddressLines: [
    "ZENBYTE TECHNOLOGIES",
    "No. 601, Sixth Floor",
    "Hongasandra",
    "9th Main, 4th Cross",
    "Garvebhavi Palya",
    "Near Krishna Bakery",
    "Bengaluru, Karnataka",
  ],
  streetAddress:
    "No. 601, Sixth Floor, Hongasandra, 9th Main, 4th Cross, Garvebhavi Palya, Near Krishna Bakery",
  locality: "Bengaluru",
  region: "Karnataka",
  postalCountry: "IN",
  countryName: "India",
  product: {
    name: "Virtual Property Master",
    url: "https://virtualpropertymaster.com",
    tagline: "Property Management, Reimagined.",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
