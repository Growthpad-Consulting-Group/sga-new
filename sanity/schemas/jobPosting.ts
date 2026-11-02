import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'Kenya', value: 'Kenya' },
          { title: 'Tanzania', value: 'Tanzania' },
          { title: 'Uganda', value: 'Uganda' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City / Branch',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-Time', value: 'Full-Time' },
          { title: 'Part-Time', value: 'Part-Time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Temporary', value: 'Temporary' },
          { title: 'Internship', value: 'Internship' },
          { title: 'Shift-Based', value: 'Shift-Based' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'list' },
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'list' },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'applicationDeadline',
      title: 'Application Deadline',
      type: 'date',
      description: 'Optional. The role remains visible until it is marked closed.',
    }),
    defineField({
      name: 'isActive',
      title: 'Open for Applications',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      city: 'city',
      country: 'country',
      isActive: 'isActive',
    },
    prepare({ title, city, country, isActive }) {
      return {
        title,
        subtitle: `${city}, ${country} • ${isActive ? 'Open' : 'Closed'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
