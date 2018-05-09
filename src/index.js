import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  blog: [
    {
      ...Component.defaultContent.blog[0],
      picture: {
        ...Component.defaultContent.blog[0].picture,
        resourceRef: 'img-1.png',
      },
    },
    {
      ...Component.defaultContent.blog[1],
      picture: {
        ...Component.defaultContent.blog[1].picture,
        resourceRef: 'img-2.png',
      },
    },
    {
      ...Component.defaultContent.blog[2],
      picture: {
        ...Component.defaultContent.blog[2].picture,
        resourceRef: 'img-3.png',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
