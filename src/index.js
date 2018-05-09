import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {

  background: {
    type: 'color',
    color: 'var(--ui-light-shade-color)',
  },

  services: [
    {
      title: {
        content: 'We welcome</br>new clients!',
        type: 'heading',
      },
      text: {
        content: 'Receive $50 off your first residential</br>or commercial cleaning service</br>and get benefit from this great deal!',
        type: 'text',
      },
      picture: {
        resourceRef: 'bg.png',
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
  ],
  title: {
    content: 'Special offer',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Do you want to sell and promote your business? Here are best of Quantum services for you: ',
    type: 'subtitle',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  'top-caption': {
    content: 'metus et hendrerit aliquet',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Service description', type: 'checkbox'},
  'body-text': {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'service-button': {defaultValue: true, label: 'Service button', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe

