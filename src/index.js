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
    color: 'light-shade-color',
  },
  title: {
    content: 'Book a charity skydive',
    type: 'blockTitle',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: 'Name',
        placeholder: 'Your name',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: 'Phone number ',
        placeholder: 'Email',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: 'Email',
        placeholder: 'Phone number',
        required: true,
      },
      {
        type: 'text',
        id: 'contactForm_date',
        title: 'Date',
        placeholder: 'Skydiving date',
        required: true,
      },
      {
        type: 'text',
        id: 'contactForm_charity',
        title: 'Date',
        placeholder: 'Charity you are interested in',
        required: true,
      },
    ],
    submitButton: {
      title: 'Book a skydive now',
      type: 'primary',
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
