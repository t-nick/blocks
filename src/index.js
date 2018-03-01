import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Dropzone',
    type: 'blockTitle',
  },
  text: {
    content: 'We welcome you to our dropzone! We are proud of our spacious facility and are passionate about what we do here. Our team of professional skydiving instructors and support staff are specially trained to work with the first-time tandem skydivers so you have nothing to worry about.',
    type: 'text',
  },
  picture: {
    src: 'img.jpg',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
