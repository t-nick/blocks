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
        content: 'Referral offer',
        type: 'heading',
      },
      text: {
        content: 'Refer a friend and save 10% off your next deep cleaning service.',
        type: 'text',
      },
      picture: {
        resourceRef: 'referral-bg.png',
        alt: 'Quantum E-commerce illustration',
        overlay: {
          type: 'color',
          color: '#FFF',
          opacity: 0.6,
        },
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
        type: 'secondary',
      },
    },
  ],
  title: {
    content: 'Special offer',
    type: 'blockTitle',
  },
  background: {
    type: 'color',
    color: '#fff',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
