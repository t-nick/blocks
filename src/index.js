import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Our Mission',
    type: 'blockTitle',
  },
  text: {
    content: 'Our mission is to ensure global expertise in logistics and transportation management, offering clients the highest quality services with improved visibility and actionable data across all modes, delivering better platforms for capturing and supporting supply chain competitive advantage.',
    type: 'text',
  },
  picture: {
    resourceRef: 'track.png',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
