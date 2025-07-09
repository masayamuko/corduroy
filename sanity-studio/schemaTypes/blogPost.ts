export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 20,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'はじめに', value: 'introduction'},
          {title: 'ストーリー', value: 'story'},
          {title: 'メリット', value: 'benefits'},
          {title: 'テクニック', value: 'technique'},
          {title: 'ケーススタディ', value: 'case-study'},
          {title: 'アドバンス', value: 'advanced'},
        ],
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
    },
    {
      name: 'obsidianPath',
      title: 'Obsidian File Path',
      type: 'string',
      description: 'Original Obsidian file path for reference',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
  },
} 