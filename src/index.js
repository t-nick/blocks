import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'var(--ui-dark-shade-color)',
  },
  subtitle: {
    content: 'There are advances',
    type: 'subtitle',
  },
  gallery: [
    {
      picture: {
        resourceRef: 'depositphotos-46803805-original.png',
      },
    },
    {
      picture: {
        resourceRef: 'depositphotos-114382428-original.png',
      },
    },
    {
      picture: {
        resourceRef: 'depositphotos-46808163-original.png',
      },
    },
  ],
  cta: {
    textValue: 'Medium button (M)',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
