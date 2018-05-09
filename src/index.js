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
        color: '#ffffff',
      },
      text: {
        content: 'From $37',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-1.png',
        alt: 'Window Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
    {
      title: {
        content: 'Carpet Cleaning',
        type: 'heading',
        color: '#ffffff',
      },
      text: {
        content: 'From $27',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-2.png',
        alt: 'Carpet Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
    {
      title: {
        content: 'Upholstery Cleaning',
        type: 'heading',
        color: '#ffffff',
      },
      text: {
        content: 'From $6',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-3.png',
        alt: 'Upholstery Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
    {
      title: {
        content: 'Oven Cleaning',
        type: 'heading',
        color: '#ffffff',
      },
      text: {
        content: 'From $24',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-4.png',
        alt: 'Oven Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
    {
      title: {
        content: 'Hard Floor Cleaning',
        type: 'heading',
        color: '#ffffff',
      },
      text: {
        content: 'From $4/m2',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-5.png',
        alt: 'Hard Floor Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
    {
      title: {
        content: 'Pool Cleaning',
        type: 'heading',
        color: '#ffffff',
      },
      text: {
        content: 'From $37',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-6.png',
        alt: 'Pool Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
    {
      title: {
        content: 'BBQ Cleaning',
        type: 'heading',
        color: '#ffffff',
      },
      text: {
        content: 'From $44',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-7.png',
        alt: 'BBQ Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
    {
      title: {
        content: 'Gutter Cleaning',
        type: 'heading',
        color: '#ffffff',
      },
      text: {
        content: 'From $37',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-8.png',
        alt: 'Gutter Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
    {
      title: {
        content: 'Steam Cleaning',
        type: 'heading',
        color: '#ffffff',
      },
      text: {
        content: 'From $37',
        type: 'text',
        color: '#ffffff',
      },
      picture: {
        resourceRef: 'item-9.png',
        alt: 'Steam Cleaning illustration',
      },
      cta: {
        type: 'link',
        textValue: 'Learn More',
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
      },
    },
  ],
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
    textValue: 'All Services',
    type: 'secondary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
