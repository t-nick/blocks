import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'Dropzone',
  },
  text: {
    ...Component.defaultContent.text,
    content: 'We welcome you to our dropzone! We are proud of our spacious facility and are passionate about what we do here. Our team of professional skydiving instructors and support staff are specially trained to work with the first-time tandem skydivers so you have nothing to worry about.',
  },
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'img.jpg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
}

export default ExtendedWireframe
