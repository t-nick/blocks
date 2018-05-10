import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-schedule/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#fff',
  },
  collection: {
    ...Component.defaultContent.collection,
    background: {
      ...Component.defaultContent.collection.background,
      'nth-child': [
        ['n', {
          type: 'color',
          color: 'light-shade-color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        title: {
          type: 'heading',
          content: 'Monday',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        title: {
          type: 'heading',
          content: 'Tuesday',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        title: {
          type: 'heading',
          content: 'Wednesday',
        },
      },
      {
        ...Component.defaultContent.collection.items[3],
        title: {
          type: 'heading',
          content: 'Thursday',
        },
      },
      {
        ...Component.defaultContent.collection.items[4],
        title: {
          type: 'heading',
          content: 'Friday',
        },
      },
      {
        ...Component.defaultContent.collection.items[5],
        title: {
          type: 'heading',
          content: 'Saturday',
        },
      },
      {
        ...Component.defaultContent.collection.items[6],
        title: {
          type: 'heading',
          content: 'Sunday',
        },
      },
    ],
  },
  'button-1': {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Learn more',
    type: 'secondary',
    size: 'md',
  },
  'button-2': {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Learn more',
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Schedule description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
