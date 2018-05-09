import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-quote/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-quote/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'gori.jpg',
  },
  blockquote:
    'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
  author: 'Helen Keller',
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'author',
    type: 'checkbox',
    label: 'Quote author',
    defaultValue: true,
  },
]


export default ExtendedWireframe
