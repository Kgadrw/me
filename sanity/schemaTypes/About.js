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
    
  ],
};
