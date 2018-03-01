import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    src: 'image.jpg',
    alt: 'Picture about the company',
  },
  text: {
    content: 'SkydiveBirds was founded in 1997. For over 20 years we provide our members with everything they need to learn to skydive in a safe and friendly environment and try to satisfy any skydiving needs and requirements. Our professional pilots and highly qualified instructors will provide you with the individual attention and will make your experience a life-long memory. So if you want to spend a great time, don\'t hesitate to spend it with us!',
    type: 'text',
  },
  title: {
    content: 'About US',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
