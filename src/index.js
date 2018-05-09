import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    resourceRef: 'bg.png',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Latest projects',
  },
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        resourceRef: 'item-1.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        resourceRef: 'item-2.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        resourceRef: 'item-3.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        resourceRef: 'item-4.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        resourceRef: 'item-5.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
    },
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        resourceRef: 'item-6.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
    },
  ],
  cta: {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'view all projects',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
