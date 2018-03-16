import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-quote/src/component'
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
    resourceRef: 'quote_bg.jpg',
  },
  author: {
    ...Component.defaultContent.author,
    content: 'RAY GOFORTH',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  author: {
    id: 'author',
    type: 'checkbox',
    label: 'Quote author',
    defaultValue: true,
  },
  border: {
    id: 'author',
    type: 'checkbox',
    label: 'White border',
    defaultValue: true,
    classNameOnActive: style['section--with-border'],
  },
}

export default ExtendedWireframe
