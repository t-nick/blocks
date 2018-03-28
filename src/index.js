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
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  cover: [
    {
      ...Component.defaultContent.cover[0],
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: '<span style="font-weight: bold;">We implement Innovative Projects</span>',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[0],
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: '<span style="font-weight: bold;">We implement Innovative Projects</span>',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[0],
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: '<span style="font-weight: bold;">We implement Innovative Projects</span>',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        size: 'lg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
