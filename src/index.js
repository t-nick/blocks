import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  title: {
    ...Component.defaultContent.title,
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    color: 'light-shade-color',
  },
  'cta-2': {
    ...Component.defaultContent['cta-2'],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'primary-btn': {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
