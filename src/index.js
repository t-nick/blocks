import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-numbers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  numbers: [
    {
      ...Component.defaultContent.numbers[0],
      label: {
        ...Component.defaultContent.numbers[0].label,
        content: 'Increase in conversion for a redesigned financial services website',
      },
      value: {
        ...Component.defaultContent.numbers[0].value,
        content: '128',
        type: 'heading',
      },
    },
    {
      ...Component.defaultContent.numbers[1],
      label: {
        ...Component.defaultContent.numbers[1].label,
        content: "Boost in sales with a redesigned tile manufacturer's website",
      },
      value: {
        ...Component.defaultContent.numbers[1].value,
        content: '527',
        type: 'heading',
      },
    },
    {
      ...Component.defaultContent.numbers[2],
      label: {
        ...Component.defaultContent.numbers[2].label,
        content: "Customer satisfaction rating for an insurance provider's website",
      },
      value: {
        ...Component.defaultContent.numbers[2].value,
        content: '92',
        type: 'heading',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  'number-title': {
    defaultValue: false,
    label: 'Additional information on numbers',
    type: 'hidden',
  },
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
}

export default ExtendedWireframe
