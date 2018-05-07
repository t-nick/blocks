import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-footer/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-footer/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },
  copyright: {
    ...Component.defaultContent.copyright,
    content: 'Produced by Weblium.com.',
  },
  additional: {
    ...Component.defaultContent.additional,
    content: 'All rights Reserved',
  },
  logo: {
    ...Component.defaultContent.logo,
    image: {
      resourceRef: 'asam.png',
      alt: 'asam.',
      width: 118,
      height: 23,
    },
  },
}

export default ExtendedWireframe
