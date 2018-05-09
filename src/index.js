import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-schedule/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-schedule/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    ...Component.defaultContent.collection,
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: 'transparent',
        }],
      ],
    },
  },
  'button-2': {
    ...Component.defaultContent['button-2'],
    textValue: 'CONTACT US',
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Schedule description', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
