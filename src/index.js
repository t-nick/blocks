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
    content: 'History',
    type: 'blockTitle',
  },
  picture: {
    resourceRef: 'image.jpg',
    alt: 'Picture about the company',
  },
  subtitle: {
    content: "Since the day of our foundation, we've been committed to attracting both newcomers and professionals to our club. Now we have a team of like-minded professionals who love to work and have fun together.",
    type: 'subtitle',
  },
  text: {
    content: '“SkydiveBirds offers a unique experience. We have mountains, we have the National Park and beautiful rivers. This is the only one location in the USA where you can be fully satisfied.”',
    type: 'text',
  },
  'text-2': {
    content: 'Stuart Bean',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true},
  button: {defaultValue: false},
  'additional-text': {defaultValue: true},
}

export default ExtendedWireframe
