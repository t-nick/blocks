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
    color: '#d8d8d8',
  },
  formBackground: {
    type: 'color',
    color: 'brand-color',
  },
  title: {
    content: 'Get your PDF instructions for a first jump!',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Ready to go skydiving? Receive helpful tips for your first tandem skydive.',
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
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: 'Phone number ',
        placeholder: '',
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
      title: 'Get instructions',
      type: 'primary',
    },
    className: 'form',
    buttonClassName: 'button button--size-lg button--primary form__button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}

export default ExtendedWireframe
