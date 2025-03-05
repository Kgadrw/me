export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // allows for easier image cropping in the Sanity studio
      },
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
          validation: (Rule) => Rule.uri({ allowRelative: true }).optional(),
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          validation: (Rule) => Rule.uri({ allowRelative: true }).optional(),
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          validation: (Rule) => Rule.uri({ allowRelative: true }).optional(),
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
          validation: (Rule) => Rule.uri({ allowRelative: true }).optional(),
        },
      ],
    },
  ],
};
