import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Speaking',
    type: 'blockTitle',
  },
  text: {
    content: 'Roy Hale is a progressive business keynote speaker who fascinates audiences with interactive, no fluff, high-value content. Born in San Francisco to become an accidental Millionaire by the age 29, Roy motivates ordinary entrepreneurs to make an exceptional impact.',
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
