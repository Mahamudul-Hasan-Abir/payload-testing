// import { Block } from 'payload'

// export const Testimonials: Block = {
//   slug: 'testimonials',
//   labels: {
//     singular: 'Testimonial Section',
//     plural: 'Testimonial Sections',
//   },
//   fields: [
//     {
//       name: 'title',
//       label: 'Section Title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'testimonials',
//       label: 'Testimonials',
//       type: 'array',
//       minRows: 1,
//       maxRows: 5, // Limit testimonials per section
//       fields: [
//         {
//           name: 'quote',
//           label: 'Quote',
//           type: 'textarea',
//           required: true,
//         },
//         {
//           name: 'photo',
//           label: 'Photo',
//           type: 'upload',
//           relationTo: 'media', // Make sure media collection exists
//         },
//       ],
//     },
//   ],
// }

import { Block } from 'payload/types'

// Define a block structure for testimonials
export const Testimonials: Block = {
  slug: 'testimonials', // Unique identifier for this block
  labels: {
    singular: 'Testimonial Section',
    plural: 'Testimonial Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true, // Title is required
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      type: 'array', // This field contains multiple testimonials
      minRows: 1, // At least 1 testimonial is required
      maxRows: 5, // Maximum of 5 testimonials allowed
      fields: [
        {
          name: 'quote',
          label: 'Quote',
          type: 'textarea',
          required: true, // Ensures each testimonial has a quote
        },
        {
          name: 'author',
          label: 'Author Name',
          type: 'text',
          required: true, // Ensures an author name is provided
        },
        {
          name: 'photo',
          label: 'Photo',
          type: 'upload',
          relationTo: 'media', // Connects to media collection
        },
      ],
    },
  ],
}
