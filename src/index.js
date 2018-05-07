import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-footer/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  copyright: {
    ...Component.defaultContent.copyright,
    content: 'PRODUCED BY WEBLIUM.COM.',
    brightness: 25,
  },
  additional: {
    ...Component.defaultContent.additional,
    content: 'ALL RIGHTS RESERVED',
    brightness: 25,
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  social: {defaultValue: false, label: 'Social media Icons', type: 'hidden'},
}

export default ExtendedWireframe
