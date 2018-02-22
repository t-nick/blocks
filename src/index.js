import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  theme: 'light',
  background: {
    type: 'color',
    color: 'var(--ui-light-shade-color)',
  },
  title: {
    content: 'Want to get a consultation<br> to help your business grow?',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Send Roy a message and describe your issue',
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
      {
        type: 'textArea',
        id: 'contactForm_message ',
        title: 'Message',
        placeholder: 'Message',
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
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}

export default ExtendedWireframe
