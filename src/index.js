import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery/src/options.json'
import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img-1.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img-2.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img-3.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img-4.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img-5.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img-6.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img-7.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img-8.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'top-icon': {
    defaultValue: false,
    label: 'Top icon decorator',
    type: 'hidden',
  },
  title: {defaultValue: false, label: 'Gallery title', type: 'hidden'},
  subtitle: {
    defaultValue: false,
    label: 'Gallery description',
    type: 'checkbox',
  },
  'body-text': {
    defaultValue: false,
    label: 'Image description',
    type: 'checkbox',
  },
  caption: {defaultValue: false, label: 'Image caption', type: 'hidden'},
  'secondary-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
