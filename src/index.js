import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Transportation Management',
        type: 'heading',
      },
      description: {
        content: 'Multipurpose assistance for online stores and offline retail businesses.',
        type: 'text',
      },
      picture: {
        resourceRef: '01.png',
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
      title: {
        content: 'Supply Chain Analysis and Design',
        type: 'heading',
      },
      description: {
        content: 'Developing marketing and business strategy to help company grow fast.',
        type: 'text',
      },
      picture: {
        resourceRef: '02.png',
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
      title: {
        content: 'White Glove Pick-Up & Delivery',
        type: 'heading',
      },
      description: {
        content: 'Building brand awareness for micro and small businesses to increase potential reach.',
        type: 'text',
      },
      picture: {
        resourceRef: '03.png',
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
      title: {
        content: 'Freight Audit & Payment',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'text',
      },
      picture: {
        resourceRef: '04.png',
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
      title: {
        content: 'Customs Brokerage',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'text',
      },
      picture: {
        resourceRef: '05.png',
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
      title: {
        content: 'Warehousing',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'text',
      },
      picture: {
        resourceRef: '06.png',
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
      title: {
        content: 'Container Drayage',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'text',
      },
      picture: {
        resourceRef: '07.png',
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
      title: {
        content: 'Last Mile Logistics',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'text',
      },
      picture: {
        resourceRef: '08.png',
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
  title: {
    content: 'Logistics Solutions',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  body: {defaultValue: false, label: 'Service main text', type: 'checkbox'},
}

export default ExtendedWireframe
