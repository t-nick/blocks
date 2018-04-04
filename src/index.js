import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#dddfe8',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'RAM&nbspUAV',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'UNMANNED AERIAL SYSTEM',
  },
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'plane1.png',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: false, label: 'Company main text', type: 'hidden'},
}

export default ExtendedWireframe
