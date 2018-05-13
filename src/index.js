import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    ...Component.defaultContent.logo,
    image: {
      resourceRef: 'logo.png',
      alt: 'logo',
      width: 180,
      height: 33,
    },
  },
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    design: {
      ...Component.defaultContent.socialIcons.design,
      border: null,
      offset: -11,
      color: 'dark-shade-color',
      size: 40,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
