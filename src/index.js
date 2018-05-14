import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    ...Component.defaultContent.background,
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
  },
  cover: [
    {
      ...Component.defaultContent.cover[0],
      title: {
        ...Component.defaultContent.cover[0].title,
        color: 'dark-shade-color',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        type: 'secondary',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0].cta,
        type: 'primary',
      },
    },
    {
      ...Component.defaultContent.cover[1],
      title: {
        ...Component.defaultContent.cover[1].title,
        color: 'dark-shade-color',
      },
      cta: {
        ...Component.defaultContent.cover[1].cta,
        type: 'secondary',
      },
      'cta-2': {
        ...Component.defaultContent.cover[1].cta,
        type: 'primary',
      },
    },
    {
      ...Component.defaultContent.cover[2],
      title: {
        ...Component.defaultContent.cover[2].title,
        color: 'dark-shade-color',
      },
      cta: {
        ...Component.defaultContent.cover[2].cta,
        type: 'secondary',
      },
      'cta-2': {
        ...Component.defaultContent.cover[2].cta,
        type: 'primary',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
