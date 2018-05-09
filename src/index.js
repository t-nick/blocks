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
        color: 'dark-shade-color',
        brightness: 50,
      },
    },
    {
      ...Component.defaultContent.cover[1],
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        color: 'dark-shade-color',
        brightness: 50,
      },
    },
    {
      ...Component.defaultContent.cover[2],
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        color: 'dark-shade-color',
        brightness: 50,
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
