import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

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
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'logo',
      width: 186,
      height: 58,
    },
  },
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    target: '_blank',
    design: {
      border: null,
      innerFill: false,
      preset: 'preset001',
      offset: 7.5,
      color: '#303C42',
      sizes: [30, 40],
      size: 35,
    },
  },
  topLineText: {
    ...Component.defaultContent.topLineText,
    type: 'subheading',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
