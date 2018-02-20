import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Workshops',
    type: 'blockTitle',
  },
  text: {
    content: 'Roy hosts regular workshops on subjects such as business planning and strategy, goal setting & action plans, sales for small businesses, and much more. Check out our workshop calendar or get in touch to register for the next workshop presentation.',
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
