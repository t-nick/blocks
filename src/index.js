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
    content: 'Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had ',
    type: 'subtitle',
  },
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      image: {
        ...Component.defaultContent.gallery[0].image,
        resourceRef: 'img_1.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[1],
      image: {
        ...Component.defaultContent.gallery[1].image,
        resourceRef: 'img_2.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      image: {
        ...Component.defaultContent.gallery[2].image,
        resourceRef: 'img_3.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
