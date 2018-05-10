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
        content: 'Bananas',
        type: 'heading',
      },
      description: {
        content: '$34.00',
        type: 'text',
      },
      picture: {
        resourceRef: 'image-1.png',
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
        content: 'Kiwis',
        type: 'heading',
      },
      description: {
        content: '$74.00',
        type: 'text',
      },
      picture: {
        resourceRef: 'image-2.png',
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
        content: 'Strawberries',
        type: 'heading',
      },
      description: {
        content: '$90.00',
        type: 'text',
      },
      picture: {
        resourceRef: 'image-3.png',
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
        content: 'Pineapples',
        type: 'heading',
      },
      description: {
        content: '$60.00',
        type: 'text',
      },
      picture: {
        resourceRef: 'image-4.png',
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
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
  'button-primary': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
}

export default ExtendedWireframe
