import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

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
  picture: {
    ...Component.defaultContent.picture,
    src: 'CTA.jpg',
    alt: 'Illustration photo',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  picture: {defaultValue: true, label: 'Picture', type: 'checkbox'},
}

export default ExtendedWireframe
