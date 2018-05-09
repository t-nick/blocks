import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-schedule/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  subtitle: {
    ...Component.defaultContent.subtitle,
    color: 'dark-shade-color',
  },
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        title: {
          ...Component.defaultContent.collection.items[0].title,
          content: 'Monday',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        title: {
          ...Component.defaultContent.collection.items[1].title,
          content: 'Tuesday',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        title: {
          ...Component.defaultContent.collection.items[2].title,
          content: 'Wednesday',
        },
      },
      {
        ...Component.defaultContent.collection.items[3],
        title: {
          ...Component.defaultContent.collection.items[3].title,
          content: 'Thursday',
        },
      },
      {
        ...Component.defaultContent.collection.items[4],
        title: {
          ...Component.defaultContent.collection.items[4].title,
          content: 'Friday',
        },
      },
      {
        ...Component.defaultContent.collection.items[5],
        title: {
          ...Component.defaultContent.collection.items[5].title,
          content: 'Saturday',
        },
      },
      {
        ...Component.defaultContent.collection.items[6],
        title: {
          ...Component.defaultContent.collection.items[6].title,
          content: 'Sunday',
        },
      },
    ],
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    textValue: 'Download a schedule',
  },
  'button-2': {
    ...Component.defaultContent['button-2'],
    textValue: 'book a class',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Schedule description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
