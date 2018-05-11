import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#f8f8f8',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Testimonials description', type: 'hidden'},
  image: {defaultValue: false, label: 'Reviewer photo', type: 'hidden'},
  position: {defaultValue: false, label: 'Reviewer job position', type: 'hidden'},
  publishDate: {defaultValue: false, label: 'Date of publishing', type: 'hidden'},
  button: {defaultValue: false, label: 'Secondary Button', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
