import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
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
    resourceRef: 'bg.jpg',
  },
  title: {
    content: 'Make a difference!<br>Partake in charitable skydiving!',
    type: 'blockTitle',
  },
  text: {
    content: 'Become a part of the solution to the world’s challenges by participating and skydiving for charity at $50. Just select a charity event from the calendar, pay your $50 deposit and raise the minimum fundraising amount. We work with 100\'s of charities across the USA. Over 2000 people every year choose to tandem skydive in aid of charity with SkydiveBirds.',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
