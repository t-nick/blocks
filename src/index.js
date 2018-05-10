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
  text: {
    content: 'With years of experience in IT business, we\'ve provided top-notch digital solutions to thousands of clients. We are committed to meet each client\'s unique needs, enabling our partners to make use of the web to its fullest potential while exceeding expectations. ',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    ...Component.modifierScheme.align,
    defaultValue: 'center',
  },
  heading: {defaultValue: false, label: 'Company title', type: 'hidden'},
  subheading: {defaultValue: false, label: 'Company description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
