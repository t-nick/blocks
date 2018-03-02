import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Photos',
    type: 'blockTitle',
  },
  gallery: [
    {
      picture: {
        resourceRef: 'photo_1.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_2.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_3.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_4.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_5.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_6.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_7.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_8.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_9.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_10.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_11.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        resourceRef: 'photo_12.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
