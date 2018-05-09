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
    content: '- Gallery -',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?',
  },
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      image: {
        ...Component.defaultContent.gallery[0].image,
        resourceRef: 'samuel-zeller-241197.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[1],
      image: {
        ...Component.defaultContent.gallery[1].image,
        resourceRef: 'raphael-koh-117599.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      image: {
        ...Component.defaultContent.gallery[2].image,
        resourceRef: 'scott-webb-176434.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      image: {
        ...Component.defaultContent.gallery[2].image,
        resourceRef: 'scott-webb-176434.jpg',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    textValue: '- All Images -',
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
