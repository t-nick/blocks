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
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  title: {
    content: 'Sign up for our newsletter',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'Receive our weekly business coaching useful tips and latest news right into your inbox.',
    type: 'subtitle',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: 'Name',
        placeholder: 'Name',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: 'Email',
        placeholder: 'Email',
        required: true,
      },
    ],
    submitButton: {
      title: 'Subscribe',
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
