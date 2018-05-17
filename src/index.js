import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cta/src/options.json'
import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'contain',
      contain: '50%, 50%',
    },
    resourceRef: 'ukraine.png',
  },
  contentBackground: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'CTA.jpg',
  },
  title: {
    ...Component.defaultContent.title,
    type: 'blockTitle',
    color: 'lightShadeColor',
  },
  cta: {
    ...Component.defaultContent.cta,
    type: 'primary',
    size: 'md',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  picture: {defaultValue: true, label: 'Picture', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'hidden'},
}

export default ExtendedWireframe
