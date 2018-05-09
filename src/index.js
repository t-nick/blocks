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
    content: 'Browse through our photos to see who we are, what drives our work, what inspires us, and pushes to continuous growth to make a difference in the world.',
    type: 'subheading',
  },
  gallery: [{
    image: {
      ...Component.defaultContent.gallery[0].image,
      src: 'image1.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[1].image,
      src: 'image2.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[2].image,
      src: 'image3.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[3].image,
      src: 'image4.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[4].image,
      src: 'image5.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[5].image,
      src: 'image6.jpg',
    },
  },
  {
    image: {
      ...Component.defaultContent.gallery[6].image,
      src: 'image7.jpg',
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
