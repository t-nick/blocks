import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'Why choose us',
  },
  collection: {
    background: {
      'nth-child': [
        [1, {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '1.png',
          imageColor: [0, 0, 0],
        }],
        [2, {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '2.png',
          imageColor: [0, 0, 0],
        }],
        [3, {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '3.png',
          imageColor: [0, 0, 0],
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        heading: {
          ...Component.defaultContent.collection.items[0].heading,
          content: 'Open-mindedness',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
      },
      {
        ...Component.defaultContent.collection.items[2],
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Why us description', type: 'checkbox'},
  'main-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
