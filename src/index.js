import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

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
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'Car Cleaning',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        textValue: 'Get callback',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[1],
      title: {
        ...Component.defaultContent.cover[1].title,
        content: 'Car Cleaning',
      },
      cta: {
        ...Component.defaultContent.cover[1].cta,
        textValue: 'Get callback',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[2],
      title: {
        ...Component.defaultContent.cover[2].title,
        content: 'Car Cleaning',
      },
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
