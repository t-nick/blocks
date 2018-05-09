import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#ffffff',
  },
  title: {
    content: 'Additional services',
    type: 'blockTitle',
  },
  services: [
    {
      title: {
        content: 'Window Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $37',
        type: 'text',
      },
      picture: {
        src: 'img-1.jpg',
        alt: 'Window Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Carpet Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $27',
        type: 'text',
      },
      picture: {
        src: 'img-2.jpg',
        alt: 'Carpet Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Upholstery Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $6',
        type: 'text',
      },
      picture: {
        src: 'img-3.jpg',
        alt: 'Upholstery Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Oven Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $24',
        type: 'text',
      },
      picture: {
        src: 'img-4.jpg',
        alt: 'Oven Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Hard Floor Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $4/m2',
        type: 'text',
      },
      picture: {
        src: 'img-5.jpg',
        alt: 'Hard Floor Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Pool Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $75',
        type: 'text',
      },
      picture: {
        src: 'img-6.jpg',
        alt: 'Pool Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'BBQ Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $44',
        type: 'text',
      },
      picture: {
        src: 'img-7.jpg',
        alt: 'BBQ Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Gutter Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $37',
        type: 'text',
      },
      picture: {
        src: 'img-8.jpg',
        alt: 'Gutter Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Steam Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $37',
        type: 'text',
      },
      picture: {
        src: 'img-9.jpg',
        alt: 'Steam Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Drain Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $109',
        type: 'text',
      },
      picture: {
        src: 'img-10.jpg',
        alt: 'Drain Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Pressure Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $80',
        type: 'text',
      },
      picture: {
        src: 'img-11.jpg',
        alt: 'Pressure Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Curtains & Blinds Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $80',
        type: 'text',
      },
      picture: {
        src: 'img-12.jpg',
        alt: 'Curtains & Blinds Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Fridge Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $30',
        type: 'text',
      },
      picture: {
        src: 'img-13.jpg',
        alt: 'Fridge Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Mattress Cleaning',
        type: 'heading',
      },
      text: {
        content: 'From $90',
        type: 'text',
      },
      picture: {
        src: 'img-14.jpg',
        alt: 'Mattress Cleaning',
      },
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
        textValue: 'Learn More',
        type: 'link',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'service-button': {defaultValue: true, label: 'Service button', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
