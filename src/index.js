import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Locations & Contacts',
    type: 'blockTitle',
  },
  map: {
    preset: 'dark',
    height: '100%',
    center: {
      lat: 40.2027859,
      lng: -99.2275384,
    },
    zoom: 5.25,
    activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
    disableDefaultUI: true,
    allowZoomOnScroll: false,
    markers: [
      {
        position: {
          lat: 35.1115429,
          lng: -106.6126318,
        },

      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  address: {defaultValue: false, label: 'Address text block', type: 'checkbox'},
  email: {defaultValue: false, label: 'E-mail text block', type: 'checkbox'},
  logo: {defaultValue: false, label: 'Logo', type: 'checkbox'},
  map: {defaultValue: true, label: 'Map', type: 'checkbox'},
  phone: {defaultValue: false, label: 'Phone text block', type: 'checkbox'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
  'map-arrangement': {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'left',
    name: 'Map arrangement',
    type: 'radio-button-group',
    style: 'buttons',
  },
}

export default ExtendedWireframe
