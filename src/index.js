import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
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
      cover: '50% 50%',
    },
    resourceRef: 'img-bg.jpg',
  },
  title: {
    content: 'What Makes Us Different? Industry Expertise',
    type: 'blockTitle',
  },
  text: {
    content: 'Our professional team of highly trained web specialists has years of industry experience and are always ready to create masterfully designed sites that can turn any whimsical idea into reality. Let\'s start an enjoyable web journey!',
    type: 'text',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    textValue: 'start now',
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: false, label: 'Company title', type: 'hidden'},
  subheading: {defaultValue: false, label: 'Company description', type: 'hidden'},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
