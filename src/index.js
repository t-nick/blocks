import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    resourceRef: 'bg.png',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Want to work with us?',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'Join 13000 clients who already worked with us. Request a quote to get best solutions.',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: '',
        placeholder: 'Name *',
        required: false,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: '',
        placeholder: 'Phone Number *',
        required: false,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: '',
        placeholder: 'Email',
        required: false,
      },
    ],
    submitButton: {
      title: 'Request a quote',
      type: 'primary',
      size: 'lg',
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
