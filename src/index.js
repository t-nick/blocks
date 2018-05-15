import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      image: {
        ...Component.defaultContent.gallery[0].image,
        resourceRef: 'depositphotos-11709617-original.png',
      },
    },
    {
      ...Component.defaultContent.gallery[1],
      image: {
        ...Component.defaultContent.gallery[1].image,
        resourceRef: 'depositphotos-50502123-original.png',
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      image: {
        ...Component.defaultContent.gallery[2].image,
        resourceRef: 'depositphotos-9269956-original.png',
      },
    },
    {
      ...Component.defaultContent.gallery[3],
      image: {
        ...Component.defaultContent.gallery[3].image,
        resourceRef: 'depositphotos-118496276-original.png',
      },
    },
    {
      ...Component.defaultContent.gallery[4],
      image: {
        ...Component.defaultContent.gallery[4].image,
        resourceRef: 'depositphotos-8827927-original.png',
      },
    },
  ],
  cta: {
    textValue: 'Medium button',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'item-heading': {defaultValue: false, label: 'Image description', type: 'hidden'},
}

export default ExtendedWireframe
