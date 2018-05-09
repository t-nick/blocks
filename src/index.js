import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#fff',
  },
  title: {
    content: 'What we clean',
    type: 'blockTitle',
  },
  services: [
    {
      title: {
        content: 'Hotels',
        type: 'heading',
        color: '#fff',
      },
      picture: {
        resourceRef: 'depositphotos-2612375-original.png',
        alt: 'Hotels illustration',
      },
    },
    {
      title: {
        content: 'Motels',
        type: 'heading',
        color: '#fff',
      },
      picture: {
        resourceRef: 'depositphotos-31239309-original.png',
        alt: 'Motels illustration',
      },
    },
    {
      title: {
        content: 'Resorts',
        type: 'heading',
        color: '#fff',
      },
      picture: {
        resourceRef: 'depositphotos-1628938-original.png',
        alt: 'Resorts illustration',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: false, label: 'Service main text', type: 'checkbox'},
  'service-button': {defaultValue: false, label: 'Service button', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
