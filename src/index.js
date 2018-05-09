import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cover/src/options.json'
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
    resourceRef: 'order-bg.png',
  },
  title: {
    content: 'Thanks <br>for your order!',
    type: 'heroTitle',
  },
  subtitle: {
    content: 'We will contact you shortly',
    type: 'subtitle',
    color: 'light-shade-color',
  },
  'cta-1': {
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
    textValue: 'back to home',
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-btn': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
