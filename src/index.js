import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Coaching',
    type: 'blockTitle',
  },
  text: {
    content:
      'If you are ready to new perspectives, if you are dedicated to your self-growth, and you are ready for things to be changed, here is the best way to reach your aspired results.',
    type: 'text',
  },
  picture: {
    src: 'bg.png',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: false,
}

export default ExtendedWireframe
