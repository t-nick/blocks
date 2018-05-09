import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-numbers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
  },
  numbers: [
    {
      title: {
        content: 'Experience in  Transportation',
        type: 'subtitle',
      },
      label: {
        content: 'for our customers',
        type: 'text',
      },
      value: {
        content: '32 yrs',
        type: 'blockTitle',
        color: 'brand-color',
      },
    },
    {
      title: {
        content: 'Offices and  Logistics Facilities',
        type: 'subtitle',
      },
      label: {
        content: 'for our clients',
        type: 'text',
      },
      value: {
        content: '1000',
        type: 'blockTitle',
        color: 'brand-color',
      },
    },
    {
      title: {
        content: 'Skilled Drivers  in Our Fleet',
        type: 'subtitle',
      },
      label: {
        content: 'for our users',
        type: 'text',
      },
      value: {
        content: '22,000',
        type: 'blockTitle',
        color: 'brand-color',
      },
    },
    {
      title: {
        content: 'Miles Driven  Per Year',
        type: 'subtitle',
      },
      label: {
        content: 'for our users',
        type: 'text',
      },
      value: {
        content: '2 Billion',
        type: 'blockTitle',
        color: 'brand-color',
      },
    },
  ],
  title: {
    content: 'Acrozz in Numbers',
    type: 'blockTitle',
    color: 'light-shade-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  body: {defaultValue: false, label: 'Numbers description', type: 'checkbox'},
}

export default ExtendedWireframe
