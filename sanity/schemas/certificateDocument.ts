import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'certificateDocument',
  title: 'Certificate / License / Membership',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "ISO 18788", "PSRA", "KASA 2023"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Certification', value: 'CERTIFICATION' },
          { title: 'Membership', value: 'MEMBERSHIP' },
          { title: 'License', value: 'LICENSE' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'Kenya', value: 'Kenya' },
          { title: 'Uganda', value: 'Uganda' },
          { title: 'Tanzania', value: 'Tanzania' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Document (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'date',
      description: 'Optional — helps track when a license/certification needs renewal.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      country: 'country',
    },
    prepare(selection) {
      const { title, category, country } = selection
      return {
        title,
        subtitle: `${country} • ${category}`,
      }
    },
  },
  orderings: [
    {
      title: 'Country',
      name: 'countryAsc',
      by: [{ field: 'country', direction: 'asc' }, { field: 'title', direction: 'asc' }],
    },
  ],
})
