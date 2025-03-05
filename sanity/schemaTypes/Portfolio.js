// schemas/portfolio.js

export default {
  name: 'portfolio',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'owner',
      title: 'Project Owner',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
    },
  ],
};
