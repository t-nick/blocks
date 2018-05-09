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
    resourceRef: 'img-bg.jpg',
  },
  title: {
    content: "Let's Get Started!",
    type: 'blockTitle',
  },
  contactForm: {
    fields: [
      {
        ...Component.defaultContent.contactForm.fields[0],
        placeholder: 'Enter your Full name *',
      },
      {
        ...Component.defaultContent.contactForm.fields[1],
        placeholder: 'Enter your phone number *',
      },
      {
        ...Component.defaultContent.contactForm.fields[1],
        placeholder: 'Enter your email *',
      },
      {
        type: 'textArea',
        id: 'contactForm_message',
        title: '',
        placeholder: 'Type your message *',
        required: false,
      },
    ],
    submitButton: {
      ...Component.defaultContent.contactForm.submitButton,
      title: 'Request a quote',
      type: 'primary',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Title description', type: 'hidden'},
}

export default ExtendedWireframe
