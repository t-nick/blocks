import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  socialIcons: {
    networks: [
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      offset: 7.5,
      color: 'transparent',
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'logo',
      width: 200,
      height: 47,
    },
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 10%',
    },
    resourceRef: 'bg.jpg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  text: {defaultValue: false, label: 'Text', type: 'checkbox'},
}

export default ExtendedWireframe
