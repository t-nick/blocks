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
    ...Component.defaultContent.title,
    content: 'Photos of the process',
  },
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      image: {
        ...Component.defaultContent.gallery[0].image,
        resourceRef: '1-gallery.png',
      },
    },
    {
      ...Component.defaultContent.gallery[1],
      image: {
        ...Component.defaultContent.gallery[1].image,
        resourceRef: '2-gallery.png',
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      image: {
        ...Component.defaultContent.gallery[2].image,
        resourceRef: '3-gallery.png',
      },
    },
    {
      ...Component.defaultContent.gallery[3],
      image: {
        ...Component.defaultContent.gallery[3].image,
        resourceRef: '4-gallery.png',
      },
    },
    {
      ...Component.defaultContent.gallery[4],
      image: {
        ...Component.defaultContent.gallery[4].image,
        resourceRef: '2-gallery.png',
      },
    },
    {
      ...Component.defaultContent.gallery[5],
      image: {
        ...Component.defaultContent.gallery[5].image,
        resourceRef: '4-gallery.png',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
