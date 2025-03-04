// schemas/aboutUs.js
export default {
  name: 'aboutUs',
  title: 'About Us Page',
  type: 'document',
  fields: [
    {
      name: 'section1Image',
      title: 'First Section Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the option to crop and focus on parts of the image
      },
    },
    {
      name: 'section1Heading',
      title: 'First Section Heading',
      type: 'string',
    },
    {
      name: 'section1Text',
      title: 'First Section Text',
      type: 'text',
    },
    {
      name: 'section2Image',
      title: 'Second Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'section2Heading',
      title: 'Second Section Heading',
      type: 'string',
    },
    {
      name: 'section2Text',
      title: 'Second Section Text',
      type: 'text',
    },
  ],
};
