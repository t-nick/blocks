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
    color: '#fff',
  },
  formBackground: {
    type: 'color',
    color: 'light-shade-color',
  },
  title: {
    content: 'Reserve your skydive today!',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Complete the form below and receive a full analysis of your business within 2 days!',
    type: 'subtitle',
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
        type: 'email',
        id: 'contactForm_email',
        title: 'Email',
        placeholder: 'Email',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: 'Phone number ',
        placeholder: 'Phone number',
        required: true,
      },
      {
        type: 'text',
        id: 'contactForm_date',
        title: 'Skydiving date',
        placeholder: 'Skydiving date',
        required: true,
      },
      {
        type: 'text',
        id: 'contactForm_options',
        title: 'Choose skydive options',
        placeholder: 'Choose skydive options',
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
