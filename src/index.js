import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Gift certificates',
    type: 'blockTitle',
  },
  text: {
    content: 'Searching for the exceptional gift? Our tandem skydiving gift certificate is the excellent way to feast life\'s special moments and achievements! Whatever your event, be it your birthday, anniversary, proposal, or whatever, SkydiveBirds is ready to make your special day the most memorable one!',
    type: 'text',
  },
  picture: {
    resourceRef: 'about-gift-pic.jpg',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
  'additional-text': {defaultValue: false, label: 'Additional text', type: 'hidden'},
}

export default ExtendedWireframe
