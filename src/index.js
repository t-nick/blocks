import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  'address-title': {
    content: 'Address',
    type: 'heading',
  },
  'phone-title': {
    content: 'Contacts',
    type: 'heading',
  },
  'email-title': {
    content: 'Opening Hours',
    type: 'heading',
  },
  'address-content': {
    content: '1585 Folsom St, San Francisco, CA 94103',
    type: 'text',
  },
  'phone-link': {
    content: '<a href="tel:+1687042511">+ 1-687-704-2511<a/><br><a href="mailto:plugin@a.weblium.com">plugin@a.weblium.com</a>',
    type: 'text',
  },
  'email-link': {
    content: 'Monday to Saturday<br>8 A.M. - 5 P.M.',
    type: 'text',
  },
  map: {
    ...Component.defaultContent.map,
    preset: 'default',
    markers: [],
    zoom: 11,
    center: {
      lat: 40.6999999,
      lng: -74.0069728,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  logo: {defaultValue: false, label: 'Logo', type: 'checkbox'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'checkbox'},
}

export default ExtendedWireframe
