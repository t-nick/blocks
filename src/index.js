import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#f3f3f6',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Button', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
