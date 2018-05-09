import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: 'Contacts',
  'address-title': 'New York',
  'phone-title': ' ',
  'email-title': ' ',
  'address-content': '8108 Vada Estates | Brooklyn, NY 11211 <br> <br> Monday - Sunday: 6 a.m. - 11 p.m.',
  'phone-link': '<a href="tel:(000) 111 22 33">(000) 111 22 33</a>',
  'email-link': '<a href="mailto:atta@a.weblium.com">atta@a.weblium.com</a>',
  map: {
    preset: 'silver',
    height: '100%',
    center: {
      lat: 40.730610,
      lng: -73.635242,
    },
    zoom: 9,
    activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
    disableDefaultUI: false,
    allowZoomOnScroll: false,
    markers: [],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  address: {defaultValue: true, label: 'Address text block', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail text block', type: 'checkbox'},
  logo: {defaultValue: false, label: 'Logo', type: 'checkbox'},
  map: {defaultValue: true, label: 'Map', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone text block', type: 'checkbox'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
