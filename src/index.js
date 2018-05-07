import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-cta/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 28%',
    },
    resourceRef: 'Depositphotos_179525000_original.jpg',
    overlay: {
      type: 'color',
      color: 'dark-shade-color',
      opacity: 0.85,
    },
  },
  title: {
    content: 'Subscribe Now',
    type: 'heading',
  },
  subtitle: {
    content: 'Enter your email and get our latest news, special offers, and useful content about our products and services.',
    type: 'subheading',
    color: 'light-shade-color',
  },
  contactForm: {
    fields: [
      {
        type: 'email',
        id: 'contactForm_email',
        placeholder: 'Email',
        required: false,
      },
    ],
    submitButton: {
      title: 'subscribe',
      textValue: 'Subscribe',
      type: 'primary',
      size: 'md',
    },
    className: 'form',
    buttonClassName: 'button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
