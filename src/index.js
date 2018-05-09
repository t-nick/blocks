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
    resourceRef: 'bg.jpg',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
  },
  formBackground: {
    type: 'color',
    color: 'brand-color',
  },
  title: {
    content: 'Ready to book?',
    type: 'blockTitle',
    color: '#fff',
  },
  subtitle: {
    content:
      'Request a quote!',
    type: 'blockTitle',
    color: '#fff',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: 'Name',
        placeholder: 'Your Name',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: 'Email',
        placeholder: 'E-Mail',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: 'Phone number ',
        placeholder: 'Phone Number',
        required: true,
      },
      {
        type: 'text',
        id: 'contactForm_zip',
        title: 'Zip Code',
        placeholder: 'Zip Code',
        required: true,
      },
    ],
    submitButton: {
      title: 'Request a Quote',
      type: 'primary',
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {
    defaultValue: true,
    label: 'Title description',
    type: 'checkbox',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}

export default ExtendedWireframe
