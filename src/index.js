import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'some facts in Numbers',
    type: 'blockTitle',
  },
  numbers: [
    {
      title: {
        content: 'Increase profits by',
        type: 'subtitle',
      },
      label: {
        content: 'Years of experience and practice',
        type: 'text',
      },
      value: {
        content: '21',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Expand market reach for',
        type: 'subtitle',
      },
      label: {
        content: 'Airplanes that can accommodate 112 passengers',
        type: 'text',
      },
      value: {
        content: '6',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Improve customer satisfaction for',
        type: 'subtitle',
      },
      label: {
        content: 'Trustworthy instructors',
        type: 'text',
      },
      value: {
        content: '50',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Improve customer satisfaction for',
        type: 'subtitle',
      },
      label: {
        content: 'Positive reviews from happy clients',
        type: 'text',
      },
      value: {
        content: '13,650',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Improve customer satisfaction for',
        type: 'subtitle',
      },
      label: {
        content: 'Skydiving jumps each year',
        type: 'text',
      },
      value: {
        content: '175,000',
        type: 'blockTitle',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'number-title': {
    defaultValue: false,
    label: 'Additional information on numbers',
    type: 'checkbox',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
