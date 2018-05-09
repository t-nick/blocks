import $editor from 'weblium/editor'

import Component from 'wireframe-series-4-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-4-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

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
  title: {
    ...Component.defaultContent.title,
    content: 'Contact us',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, or send an email, choose what suits you most.',
  },
  'address-content': {
    content: '45 Rockefeller Plaza, New York, <br/> NY 10111, USA',
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
    networks: [
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
    ],
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
    fields: [
      {
        ...Component.defaultContent.contactForm.fields[0],
        placeholder: 'Enter your full name',
      },
      {
        ...Component.defaultContent.contactForm.fields[1],
        placeholder: 'Enter your phone number',
      },
      {
        ...Component.defaultContent.contactForm.fields[2],
        placeholder: 'Enter your email',
      },
      {
        ...Component.defaultContent.contactForm.fields[3],
      },
    ],
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
