import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Entertainment',
        type: 'heading',
      },
      text: {
        content: 'Cinemas, Theatres, Concerts',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_1.png',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Stadiums',
        type: 'heading',
      },
      text: {
        content: '',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_2.png',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Fitness Clubs',
        type: 'heading',
      },
      text: {
        content: '',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_3.png',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
  ],
  title: {
    content: 'What we clean',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false},
  'service-button': {defaultValue: false},
}

export default ExtendedWireframe
