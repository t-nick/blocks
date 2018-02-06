import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#0c1526',
  },
  theme: 'dark',
  numbers: [
    {
      title: 'Rate',
      label: 'for our customers',
      value: 'from $200/hour',
      id: '554d7318-3c82-4dd4-87e9-b0b92299199f',
    },
    {
      title: 'minimal charge',
      label: 'of our clients',
      value: '$100',
      id: 'aa002eee-2755-4850-b18a-c990cfa03e37',
    },
    {
      title: 'day session',
      label: 'of our users',
      value: '$900 – $2000',
      id: '84957801-e554-42e1-ab7b-323f483e3f81',
    },
  ],
  title: 'tattoo Prices',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'number-title': {
    defaultValue: true,
    label: 'Additional information on numbers',
    type: 'checkbox',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}


export default ExtendedWireframe
