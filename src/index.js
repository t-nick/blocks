import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-cta/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  title: {
    content: 'Need an electrician?',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Fill in the form and we’ll contact you shortly!',
    type: 'subtitle',
  },
  formBackground: {
    type: 'color',
    color: 'transparent',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: '',
        placeholder: 'Your name',
        required: false,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: '',
        placeholder: 'Your phone number',
        required: false,
      },
    ],
    submitButton: {
      title: 'submit',
      type: 'primary',
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
