import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  numbers: [
    {
      title: {
        content: 'Increased profits by',
        type: 'subtitle',
      },
      label: {
        content: 'Experience in Transportation',
        type: 'text',
      },
      value: {
        content: '32 yrs',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Expanded market reach by',
        type: 'subtitle',
      },
      label: {
        content: 'Offices and Logistics Facilities',
        type: 'text',
      },
      value: {
        content: '1000',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Improved customer satisfaction by',
        type: 'subtitle',
      },
      label: {
        content: 'Skilled Drivers in Our Fleet',
        type: 'text',
      },
      value: {
        content: '22,000',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Improved customer satisfaction by',
        type: 'subtitle',
      },
      label: {
        content: 'Miles Driven Per Year',
        type: 'text',
      },
      value: {
        content: '2 Billion',
        type: 'blockTitle',
      },
    },
  ],
  cta: {
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
    textValue: 'More About Us',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'number-title': {
    defaultValue: false,
    label: 'Additional information on numbers',
    type: 'checkbox',
  },
  title: {defaultValue: false},
}

export default ExtendedWireframe
