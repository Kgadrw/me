// schemas/blockContent.js
export default {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block', // This defines standard rich text like paragraphs, headings, etc.
    },
    {
      type: 'image', // Optionally allow images in your block content
      options: {
        hotspot: true,
      },
    },
  ],
}
