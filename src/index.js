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
      cover: '50% 40%',
    },
    resourceRef: 'bg.jpg',
  },
  title: {
    content: 'Services.',
    type: 'heroTitle',
  },
  subtitle: {
    content: 'Let\'s Keep in Touch.',
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'primary-btn': {defaultValue: false, label: 'Primary button', type: 'checkbox'},
  'secondary-btn': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
