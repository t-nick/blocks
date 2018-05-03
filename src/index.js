import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#ffffff',
  },
  gallery: [{
    image: {
      resourceRef: 'gallery-img-1.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-2.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-3.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-4.png',
      alt: 'Gallery image',
    },
  }],
  button: {
    type: 'secondary',
    textValue: 'View All Team',
  },
  title: {
    content: 'Our team',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
