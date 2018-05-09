import $editor from 'weblium/editor'

import Component from 'wireframe-series-4-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-4-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  formBackground: {
    type: 'color',
    color: '#f5f5f5',
  },
  title: {
    content: 'Contacts Us',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'If you are planning on visiting us it’s advisable to call ahead for and appointment. We got some beer in case you need to wait.',
    type: 'subtitle',
  },
  'address-title': {
    content: 'Address',
    type: 'heading',
  },
  'hours-title': {
    content: 'Phone',
    type: 'heading',
  },
  'contacts-title': {
    content: 'Email',
    type: 'heading',
  },
  'address-content': {
    content: 'Acrozz Logistics 600 West Chicago Ave., <br>Suite 725 Chicago, IL 60654',
    type: 'text',
  },
  'hours-content': {
    content: '+1 337-515-1307',
    type: 'text',
  },
  'phone-link': {
    content: '<a href="tel:(222) 111 11 11">(222) 111 11 11</a>',
    type: 'text',
  },
  'email-link': {
    content: 'info@a.weblium.com',
    type: 'text',
  },
  socialIcons: {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'softRect',
      innerFill: true,
      preset: 'preset001',
      offset: 24,
      color: '#676767',
      sizes: [10, 20, 30, 40],
      size: 40,
    },
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: '',
        placeholder: 'NAME',
        required: false,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: '',
        placeholder: 'Number',
        required: false,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: '',
        placeholder: 'Email',
        required: false,
      },
      {
        type: 'textArea',
        id: 'contactForm_textarea',
        title: '',
        placeholder: 'Message',
        required: false,
      },
    ],
    submitButton: {
      title: 'Request a quote',
      type: 'primary',
    },
    className: 'form',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Contacts description', type: 'checkbox'},
  'address-title': {defaultValue: true, label: 'Address title', type: 'checkbox'},
  address: {defaultValue: true, label: 'First address', type: 'checkbox'},
  'hours-title': {defaultValue: true, label: 'Hours title', type: 'checkbox'},
  hours: {defaultValue: true, label: 'Working hours', type: 'checkbox'},
  'contacts-title': {defaultValue: true, label: 'Contacts title', type: 'checkbox'},
  phone: {defaultValue: false, label: 'Phone', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail', type: 'checkbox'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'checkbox'},
  'contact-form': {defaultValue: true, label: 'Contact form', type: 'checkbox'},
}

export default ExtendedWireframe
