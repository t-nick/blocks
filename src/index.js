import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'

import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'about_img.png',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    type: 'secondary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden'},
  button: {defaultValue: true, label: 'Contact us button', type: 'checkbox'},
  link: {defaultValue: false, label: 'About us link', type: 'hidden'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}


export default ExtendedWireframe
