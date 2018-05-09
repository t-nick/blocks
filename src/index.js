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
    ...Component.defaultContent.title,
    content: 'Our locations',
  },
  map: {
    ...Component.defaultContent.map,
    preset: 'dark',
    center: {
      lat: 34.690959,
      lng: -92.347134,
    },
    markers: [

    ],
    zoom: 6,
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  address: {defaultValue: false, label: 'Address text block', type: 'checkbox'},
  email: {defaultValue: false, label: 'E-mail text block', type: 'checkbox'},
  logo: {defaultValue: false, label: 'Logo', type: 'checkbox'},
  phone: {defaultValue: false, label: 'Phone text block', type: 'checkbox'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'checkbox'},
}

export default ExtendedWireframe
