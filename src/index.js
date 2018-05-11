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
    content: 'Join Acrozz Team',
  },
  text: {
    content: 'Our company is always looking for experienced people who want to become a part of our team. We are truly dedicated to safety, service, and satisfaction.  ',
    type: 'heading',
  },
  'text-2': {
    content: 'So make a wise choice!',
    type: 'small',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    textValue: 'View Positions',
    type: 'secondary',
  },
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'picture.jpg',
  },
  background: {
    type: 'color',
    color: '#f5f5f5',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-text': {defaultValue: true, label: 'Additional text', type: 'checkbox'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
}

export default ExtendedWireframe
