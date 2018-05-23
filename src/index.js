import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 30%',
    },
    resourceRef: 'bg.jpg',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    type: 'subheading',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'left',
    name: 'Aligning',
    type: 'hidden',
    style: 'buttons',
  },
  'primary-btn': {defaultValue: false, label: 'Primary button', type: 'hidden'},
  'secondary-btn': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
}

export default ExtendedWireframe
