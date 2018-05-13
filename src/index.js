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
    color: 'dark-shade-color',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    type: 'subheading',
  },
  gallery: [{
    image: {
      ...Component.defaultContent.gallery[0].image,
      resourceRef: 'image1.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[1].image,
      resourceRef: 'image2.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[2].image,
      resourceRef: 'image3.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[3].image,
      resourceRef: 'image4.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[4].image,
      resourceRef: 'image5.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[5].image,
      resourceRef: 'image6.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[6].image,
      resourceRef: 'image7.jpg',
    },
  }],
  button: {
    ...Component.defaultContent.button,
    type: 'secondary',
    size: 'sm',
    textValue: 'View More',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
}

export default ExtendedWireframe
