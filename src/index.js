import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'color',
    color: 'dark-accent-color',
  },
  title: 'Get useful advice <strong>on how to keep your house shiny and clean longer!</strong>',
  subtitle: 'We regularly share some helpful tips to make your cleaning routine faster and easier.',
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: '-',
        placeholder: 'Your Name',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: '',
        placeholder: '',
        required: false,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: '-',
        placeholder: 'E-Mail',
        required: true,
      },
    ],
    submitButton: {
      title: 'Subscribe Now',
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
