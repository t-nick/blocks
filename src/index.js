import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Executive',
        type: 'heading',
      },
      description: {
        content: 'Multipurpose assistance for online stores and offline retail businesses.',
        type: 'text',
      },
      picture: {
        src: 'img-1.jpg',
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
        content: 'Corporate',
        type: 'heading',
      },
      description: {
        content: 'Developing marketing and business strategy to help company grow fast.',
        type: 'text',
      },
      picture: {
        src: 'img-2.jpg',
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
        content: 'Small Business',
        type: 'heading',
      },
      description: {
        content: 'Building brand awareness for micro and small businesses. ',
        type: 'text',
      },
      picture: {
        src: 'img-3.jpg',
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
        content: 'Personal Performance',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training.',
        type: 'text',
      },
      picture: {
        src: 'img-4.jpg',
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
        content: 'Startups',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training.',
        type: 'text',
      },
      picture: {
        src: 'img-5.jpg',
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
        content: 'Sales and Marketing',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training.',
        type: 'text',
      },
      picture: {
        src: 'img-6.jpg',
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
        content: 'Franchise Coaching',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training.',
        type: 'text',
      },
      picture: {
        src: 'img-7.jpg',
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
        content: '1-on-1 Coaching',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training.',
        type: 'text',
      },
      picture: {
        src: 'img-8.jpg',
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
        content: 'Group Coaching',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training.',
        type: 'text',
      },
      picture: {
        src: 'img-9.jpg',
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
  body: {defaultValue: false, label: 'Service main text', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
