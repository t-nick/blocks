import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Photos',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Jump day <br>September 11, 2017',
    type: 'subtitle',
  },
  gallery: [{
    image: {
      resourceRef: 'gallery-image-1.jpg',
      alt: 'Gallery image',
      galleryId: 'gallery',
    },
    heading: {
      content: 'Quantum CEO & our partners',
      type: 'subtitle',
    },
  },
  {
    image: {
      resourceRef: 'gallery-image-2.jpg',
      alt: 'Gallery image',
      galleryId: 'gallery',
    },
    heading: {
      content: 'Quantum CEO & our partners',
      type: 'subtitle',
    },
  },
  {
    image: {
      resourceRef: 'gallery-image-3.jpg',
      alt: 'Gallery image',
      galleryId: 'gallery',
    },
    heading: {
      content: 'Quantum CEO & our partners',
      type: 'subtitle',
    },
  },
  {
    image: {
      resourceRef: 'gallery-image-4.jpg',
      alt: 'Gallery image',
      galleryId: 'gallery',
    },
    heading: {
      content: 'Quantum CEO & our partners',
      type: 'subtitle',
    },
  },
  {
    image: {
      resourceRef: 'gallery-image-1.jpg',
      alt: 'Gallery image',
      galleryId: 'gallery',
    },
    heading: {
      content: 'Quantum CEO & our partners',
      type: 'subtitle',
    },
  },
  {
    image: {
      resourceRef: 'gallery-image-2.jpg',
      alt: 'Gallery image',
      galleryId: 'gallery',
    },
    heading: {
      content: 'Quantum CEO & our partners',
      type: 'subtitle',
    },
  },
  {
    image: {
      resourceRef: 'gallery-image-3.jpg',
      alt: 'Gallery image',
      galleryId: 'gallery',
    },
    heading: {
      content: 'Quantum CEO & our partners',
      type: 'subtitle',
    },
  },
  {
    image: {
      resourceRef: 'gallery-image-4.jpg',
      alt: 'Gallery image',
      galleryId: 'gallery',
    },
    heading: {
      content: 'Quantum CEO & our partners',
      type: 'subtitle',
    },
  }],
  cta: {
    textValue: 'View all photos',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
