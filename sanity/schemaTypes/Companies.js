// schemas/trustedCompany.js

export default {
  name: "trustedCompany",
  title: "Trusted Company",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
