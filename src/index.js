import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Ask Our Experts <br>About Your Freight',
    type: 'blockTitle',
  },
  text: {
    content: 'Our experts are always ready to help. Get in touch with us and we\'ll find the right solution to meet your needs.',
    type: 'text',
  },
  picture: {
    resourceRef: 'about-girl.png',
    alt: 'Picture about the company',
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
    textValue: 'Get a Quote',
    type: 'primary',
    size: 'md',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
