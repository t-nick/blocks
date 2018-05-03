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
    content: 'Pre-order Book Now!',
    type: 'blockTitle',
    color: 'lightShadeColor',
  },
  cta: {
    ...Component.defaultContent.cta,
    textValue: 'Pre order a book',
    type: 'primary',
    size: 'md',
  },
  picture: {
    ...Component.defaultContent.picture,
    src: 'bg.png',
    alt: 'Illustration photo',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  picture: {defaultValue: true, label: 'Picture', type: 'checkbox'},
}

export default ExtendedWireframe
