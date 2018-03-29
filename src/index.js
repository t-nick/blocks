import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    text: {
      value: 'GOOSE',
      fontSize: 34,
    },
  },
  linkColor: {
    color: 'dark-accent-color',
    hover: 'brand-color',
  },
  description: {
    ...Component.defaultContent.description,
    type: 'text',
    color: 'dark-accent-color',
  },
  copyright: {
    type: 'caption',
    content: 'PRODUCED BY WEBLIUM.COM.',
  },
  additional: {
    type: 'caption',
    content: 'ALL RIGHTS RESERVED',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  social: {defaultValue: false, label: 'Social media Icons', type: 'hidden'},
}

export default ExtendedWireframe
