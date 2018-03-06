import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Reasearch',
        type: 'heading',
      },
      text: {
        content: 'The Emerald Buddha is a figurine sitting Budha, that is the is the palladium of the Kingdom of Thailand.',
        type: 'text',
      },
      picture: {
        src: 'image1.jpg',
        alt: 'Quantum E-commerce illustration',
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
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Development',
        type: 'heading',
      },
      text: {
        content: 'The Emerald Buddha is a figurine sitting Budha, that is the is the palladium of the Kingdom of Thailand.',
        type: 'text',
      },
      picture: {
        src: 'image2.jpg',
        alt: 'Quantum Aftersales illustration',
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
        type: 'primary',
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
    textValue: 'More services',
    type: 'secondary',
  },

  background: {
    type: 'gradient',
    gradient: {
      angle: 90,
      firstColor: '#3f4953',
      secondColor: '#2e3336',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
