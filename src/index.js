import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-numbers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-numbers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Our Results',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'When no fees are being charged at the exchange, it is possible for a trader (or bot) to trade back and forth with themselves and generate a lot of "fake" volume without penalty.',
    type: 'subtitle',
  },
  numbers: [
    {
      body: {
        content: 'increase in profits of our customers',
        type: 'text',
      },
      number: {
        content: '128%',
        type: 'headingLg',
      },
      picture: {
        resourceRef: 'numbers_01.jpg',
        alt: 'Illustration for number',
      },
    },
    {
      body: {
        content: 'higher customer satisfaction',
        type: 'text',
      },
      number: {
        content: '527%',
        type: 'headingLg',
      },
      picture: {
        resourceRef: 'numbers_02.jpg',
        alt: 'Illustration for number',
      },
    },
    {
      body: {
        content: 'of clients found new sales markets',
        type: 'text',
      },
      number: {
        content: '92%',
        type: 'headingLg',
      },
      picture: {
        resourceRef: 'numbers_03.jpg',
        alt: 'Illustration for number',
      },
    },
  ],
  button: {
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
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  image: {defaultValue: true, label: 'Image', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
