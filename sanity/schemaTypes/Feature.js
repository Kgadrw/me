// schemas/feature.js

export default {
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Feature Title",
      type: "string",
    },
    {
      name: "description",
      title: "Feature Description",
      type: "text",
    },
    {
      name: "image",
      title: "Feature Image",
      type: "image",
      options: {
        hotspot: true, // Allows user to crop the image
      },
    },
  ],
};
