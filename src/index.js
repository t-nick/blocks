import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cta/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'light-shade-color',
  },
  title: {
    content: 'Thank you for the message!',
    type: 'blockTitle',
  },
  description: {
    content: 'We will contact you shortly',
    type: 'subheading',
  },
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
    textValue: 'back to home page',
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
