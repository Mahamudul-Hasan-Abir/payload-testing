import { GlobalConfig } from 'payload'

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 5,
    },
    {
      name: 'copywirtes',
      label: 'Copywrites Notice',
      type: 'text',
      required: true,
    },
  ],
}

export default Footer
