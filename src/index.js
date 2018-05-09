import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  // background: {
  //   type: 'image',
  //   position: {
  //     type: 'cover',
  //     cover: '50% 50%',
  //   },
  //   resourceRef: 'cover.jpg',
  //   overlay: {
  //     type: 'color',
  //     color: 'var(--ui-light-shade-color)',
  //     opacity: 0.7,
  //   },
  // },
  cover: [
    {
      ...Component.defaultContent.cover[0],
      cta: {
        ...Component.defaultContent.cover[0].cta,
        type: 'primary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0]['cta-2'],
        type: 'secondary',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[0],
      cta: {
        ...Component.defaultContent.cover[0].cta,
        type: 'primary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0]['cta-2'],
        type: 'primary',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[0],
      cta: {
        ...Component.defaultContent.cover[0].cta,
        type: 'primary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0]['cta-2'],
        type: 'primary',
        size: 'lg',
      },
    },
  ],

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  arrows: {defaultValue: true, label: 'Navigation arrows', type: 'checkbox'},
  dots: {defaultValue: false, label: 'Navigation indicators', type: 'hidden'},
  'primary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'hidden'},
}

export default ExtendedWireframe
