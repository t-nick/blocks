import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  subtitle: {
    content: 'Every season, there’s always a new must-have (or at least must try) beauty product that comes out — the newest color palette in make-up, the latest in skin care, new scents, etc.',
    type: 'subtitle',
  },
  gallery: [{
    ...Component.defaultContent.gallery[0],
    image: {
      ...Component.defaultContent.gallery[0].image,
      src: 'img-1.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[1],
    image: {
      ...Component.defaultContent.gallery[1].image,
      src: 'img-2.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[2],
    image: {
      ...Component.defaultContent.gallery[2].image,
      src: 'img-3.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[4],
    image: {
      ...Component.defaultContent.gallery[4].image,
      src: 'img-1.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[5],
    image: {
      ...Component.defaultContent.gallery[5].image,
      src: 'img-2.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[6],
    image: {
      ...Component.defaultContent.gallery[6].image,
      src: 'img-3.jpg',
    },
  }],
  cta: {
    textValue: 'View All',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
