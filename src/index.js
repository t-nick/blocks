import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },
  copyright: {
    content: 'Produced by Weblium.com.',
  },
  additional: {
    content: 'All rights Reserved',
  },

  title: 'Design title',
  logo: {
    text: {
      value: 'asam.',
    },
  },
}

export default ExtendedWireframe
