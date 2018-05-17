import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 100%',
    },
    resourceRef: 'img-bg.jpg',
  },
  cover: [
    {
      ...Component.defaultContent.cover[0],
      cta: {
        ...Component.defaultContent.cover[0].cta,
        textValue: 'Get callback',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[1],
      cta: {
        ...Component.defaultContent.cover[1].cta,
        textValue: 'Get callback',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[2],
      cta: {
        ...Component.defaultContent.cover[2].cta,
        textValue: 'Get callback',
        size: 'lg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
