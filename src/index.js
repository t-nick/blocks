import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
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
    resourceRef: 'bg.jpg',
  },
  title: {
    content: 'Removing Post-Construction dust',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We’ll clean up all the mess after the construction ends.',
    type: 'subtitle',
  },
  text: {
    content: '— We send as many cleaners as needed  </br> — We use specialized equipment and detergents </br> — We restore the healthy environment of your property',
    type: 'text',
  },
  'text-2': {
    content: 'From $16/hour',
    type: 'text',
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
    textValue: 'Request a Quote',
    type: 'secondary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: false},
  subtitle: {defaultValue: true},
  'additional-text': {defaultValue: true},
}

export default ExtendedWireframe
