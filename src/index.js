import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  subtitle: {
    content:
      'When it comes to something as creative as tattoos or piercings, the price tag applies based on every specific size, difficulty, and colors of any given body artwork piece.',
    type: 'subtitle',
  },
  services: [
    {
      id: '900aa334-14f2-4c05-b078-78099a5725e5',
      title: '$100 – $150',
      description: 'Multipurpose assistance for online stores and offline retail businesses.',
      picture: {
        resourceRef: 'services1.jpg',
        alt: 'Service illustration photo',
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
      id: 'cfb2c56d-7708-4459-bdf2-6780f4ba62b9',
      title: '$150 – $500',
      description: 'Developing marketing and business strategy to help company grow fast.',
      picture: {
        resourceRef: 'services2.jpg',
        alt: 'Service illustration photo',
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
      id: 'eea21546-b56e-406b-8cba-18a5a5ec1820',
      title: '$500 – $1000',
      description: 'Building brand awareness for micro and small businesses. ',
      picture: {
        resourceRef: 'services3.jpg',
        alt: 'Service illustration photo',
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
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: '$1000+',
      description: 'Aftersales support in marketing, sales, and staff training.',
      picture: {
        resourceRef: 'services4.jpg',
        alt: 'Service illustration photo',
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
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Service title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Services description', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  body: {defaultValue: false, label: 'Service main text', type: 'checkbox'},
}


export default ExtendedWireframe
