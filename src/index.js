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
      id: '900aa334-14f2-4c05-b078-78099a5725e5',
      title: 'Basics',
      description:
        '',
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
      id: 'cfb2c56d-7708-4459-bdf2-6780f4ba62b9',
      title: 'Ashtanga Led',
      description:
        'Developing marketing and business strategy to help company grow fast.',
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
      id: 'eea21546-b56e-406b-8cba-18a5a5ec1820',
      title: 'Hatha',
      description:
        'Building brand awareness for micro and small businesses. ',
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
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: 'Vinyasa',
      description:
        'Aftersales support in marketing, sales, and staff training.',
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
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: 'Yin',
      description:
        'Aftersales support in marketing, sales, and staff training.',
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
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: 'Prenatal Yoga',
      description:
        'Aftersales support in marketing, sales, and staff training.',
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
        textValue: 'Medium Button',
        type: 'link',
      },
    },
  ],
  'button-2': {
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
    textValue: 'Medium Button',
    type: 'secondary',
    size: 'md',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'checkbox'},
}

export default ExtendedWireframe
