import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  projects: [
    {
      id: 'e9ec34d7-3cc6-49f3-a9ad-6ea69f59409c',
      title: 'How we work',
      subtitle: 'UX DESIGN',
      text:
        "From the day one, we’ve always been all about the visual aesthetics and providing the best quality for the money value we charge. Ultimately our team of professional and highly passionate tattoo & piercing artists is what makes us so special. Whether you'll show us some image that you want to replicate on your skin or ask us to draw one and confirm with you, we'll be glad to do either of those 2 for you!",
      picture: {
        src: 'img-1.jpg',
        alt: 'Project 1',
      },
      link: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: 'Licenses',
      subtitle: 'BRANDING',
      text:
        'Being fully licensesd and certified to the highest medical standards upheld, we’re sure that the security tops them all. First, each tattoo artist has to be licensed and certified by the San Francisco Health Department. He/she has to get all the most basic vaccinations, including those for Hepatitis A and B. They have to pass the blood-borne pathogen education and receive a certificate. They also should be tested for Hepatitis and HIV.',
      picture: {
        src: 'img-2.jpg',
        alt: 'Project 2',
      },
      link: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: 'Hygiene',
      subtitle: 'BRANDING',
      text:
        'Considering just how strict our medical & sanitary standards are, all of our artists make their best to comply with them, during weekly checks. By following this exposure control plan, we provide 0% of cross-contamination and assure each customer that their health is going to be 100% protected. We are compliant with all state & federal regulations concerning tattoo & piercing salons.',
      picture: {
        src: 'img-3.jpg',
        alt: 'Project 3',
      },
      link: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: 'Equipment',
      subtitle: 'BRANDING',
      text:
        'Without a set of perfect equipment, we’d never be able to be where we are today - namely in a position of the best tattoo & piercing salon in the local area. Rose & Rabbit in San Francisco is equipped with the latest manufactured sterilizing equipment. All tattoo needles we use have been secondarily sterilized in the US by Kingpin Tattoo Supplies and have certification. All our inks are 100% allergy-proof.',
      picture: {
        src: 'img-4.jpg',
        alt: 'Project 4',
      },
      link: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: 'Artistry',
      subtitle: 'BRANDING',
      text:
        'Whatever the graphic style for your tattoo idea is, be sure that we will nail it! We aim for a high artistic value of each piece just as much as we care for executing it exceptionally. Additionally, our artists use a variety of methods (traditional and digital) to create your future tattoo projects just the way you envision them. Custom artwork is in the base of every project we have and customizing your thoughts on paper is our specialty.',
      picture: {
        src: 'img-5.jpg',
        alt: 'Project 5',
      },
      link: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn more',
        type: 'link',
      },
    },
  ],
  title: 'Our Projects',
  subtitle:
    'Rose & Rabbit tattoo studio values passion and artistry above everything else! Focused on quality and professionalism, we strive to provide the most beautiful & affordable tattoo & piercing services!',
  cta: {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Learn more',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Block subtitle',
    defaultValue: true,
  },
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'project-category',
    type: 'checkbox',
    label: 'Project category',
    defaultValue: false,
  },
  {
    id: 'project-description',
    type: 'checkbox',
    label: 'Project description',
    defaultValue: true,
  },
  {
    id: 'block-button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: false,
  },
]

export default ExtendedWireframe
