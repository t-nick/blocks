import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-text/src/options.json'
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
    type: 'blockTitle',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    type: 'subheading',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Description', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Title', type: 'hidden'},
  subheading: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
}

export default ExtendedWireframe
