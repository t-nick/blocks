import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Contact us',
    type: 'blockTitle',
  },
  'address-title': {
    content: 'Address',
    type: 'heading',
  },
  'phone-title': {
    content: 'Phone number',
    type: 'heading',
  },
  'email-title': {
    content: 'E-mail',
    type: 'heading',
  },
  'address-content': {
    content: '3103 Lawrence 1070, Suite 4 Middletown, SP4 6EB',
    type: 'text',
  },
  'phone-link': {
    content: '<a href="tel:+1( 401) 845 0393">+1( 401) 845 0393</a>',
    type: 'text',
  },
  'email-link': {
    content: '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
    type: 'text',
  },
  map: {
    preset: 'default',
    height: '100%',
    center: {
      lat: 40.710774,
      lng: -74.006570,
    },
    zoom: 11,
    activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
    disableDefaultUI: false,
    allowZoomOnScroll: false,
    markers: [
      {
        name: 'Address',
        description: 'This is marker description',
        address: 'Head office in London - 36 Regent St.',
        id: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
      },
    ],
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
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'tripadvisor',
        name: 'Tripadvisor',
        url: 'http://tripadvisor.com/',
      },
      {
        id: 'googlePlus',
        name: 'Google+',
        url: 'http://plus.google.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'null',
      innerFill: false,
      preset: 'preset001',
      offset: 15,
      color: '#323435',
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  address: {defaultValue: true, label: 'Address text block', type: 'checkbox'},
  email: {defaultValue: false, label: 'E-mail text block', type: 'checkbox'},
  logo: {defaultValue: false, label: 'Logo', type: 'checkbox'},
  map: {defaultValue: true, label: 'Map', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone text block', type: 'checkbox'},
  social: {defaultValue: true, label: 'Social Media Buttons', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
