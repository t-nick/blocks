import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
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
    resourceRef: 'cover.jpg',
    overlay: {
      type: 'color',
      color: 'light-shade-color',
      opacity: 0.7,
    },
  },
  cover: [
    {
      ...Component.defaultContent.cover[0],
    },
    {
      ...Component.defaultContent.cover[1],
    },
    {
      ...Component.defaultContent.cover[2],
    },
  ],

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  dots: {defaultValue: false, label: 'Navigation indicators', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'hidden'},
}

export default ExtendedWireframe
