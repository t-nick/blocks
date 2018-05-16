import $editor from 'weblium/editor'

import Component from 'wireframe-series-4-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },
  formBackground: {
    type: 'gradient',
    gradient: {
      angle: 45,
      firstColor: '#fcb27b',
      secondColor: '#4b4bf0',
    },
  },
  'address-content': {
    ...Component.defaultContent['address-content'],
    type: 'subheading',
  },
  'hours-content': {
    ...Component.defaultContent['hours-content'],
    type: 'subheading',
  },
  'phone-link': {
    ...Component.defaultContent['phone-link'],
    type: 'subheading',
  },
  'email-link': {
    ...Component.defaultContent['email-link'],
    type: 'subheading',
  },
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    design: {
      ...Component.defaultContent.socialIcons.design,
      border: null,
      color: 'light-shade-color',
      offset: 35,
      size: 25,
    },
  },
  contactForm: {
    ...Component.defaultContent.contactForm,
    submitButton: {
      ...Component.defaultContent.contactForm.submitButton,
      size: 'lg',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
