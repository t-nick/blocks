import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'brand-color',
  },
  title: {
    content: 'Get useful advice <strong>on how to keep your house shiny and clean longer!</strong>',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We regularly share some helpful tips to make your cleaning routine faster and easier.',
    type: 'subtitle',
  },
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
