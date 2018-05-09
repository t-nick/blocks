import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true},
  icon: {defaultValue: false},
  'button-secondary': {defaultValue: true},
}

export default ExtendedWireframe
