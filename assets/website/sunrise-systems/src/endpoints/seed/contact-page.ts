import { RequiredDataFromCollectionSlug } from 'payload'

export const contact: () => RequiredDataFromCollectionSlug<'pages'> = () => {
  return {
    slug: 'contact',
    _status: 'published',
    hero: {
      type: 'none',
    },
    layout: [
      {
        blockType: 'calendlyBlock',
        calendlyUrl: 'https://calendly.com/jason-sunrisesystems/meet-and-greet',
        backgroundColor: 'white',
        minHeight: 700,
      },
    ],
    title: 'Contact',
  }
}
