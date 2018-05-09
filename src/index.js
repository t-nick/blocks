import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-awards/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Our licenses',
    type: 'blockTitle',
    color: 'var(--ui-block-title-color)',
  },
  awards: [
    {
      title: {
        content: 'C-10 License on any electrical work',
        type: 'heading',
        color: 'var(--ui-heading-color)',
        fontSize: 'var(--ui-heading-size )',
      },
      picture: {
        resourceRef: 'battle-certificate-418.png',
        alt: 'C-10 License on any electrical work',
      },
    },
    {
      title: {
        content: 'C-7 Electrical work for low voltage',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      picture: {
        resourceRef: 'battle-certificate-292.png',
        alt: 'C-7 Electrical work for low voltage',
      },
    },
    {
      title: {
        content: 'C-45 Electrical work for electrical sign',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      picture: {
        resourceRef: 'battle-certificate-223.png',
        alt: 'C-45 Electrical work for electrical sign',
      },
    },
    {
      title: {
        content: 'C-46 License on electrical work for solar systems',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      picture: {
        resourceRef: 'battle-certificate-362.png',
        alt: 'C-46 License on electrical work for solar systems',
      },
    },
    {
      title: {
        content: 'C-28 Electrical work for garage door',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      picture: {
        resourceRef: 'battle-certificate-311.png',
        alt: 'C-28 Electrical work for garage door',
      },
    },
    {
      title: {
        content: 'C-34 Electrical work for prefabricated office workstation',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      picture: {
        resourceRef: 'battle-certificate-543.png',
        alt: 'C-34 Electrical work for prefabricated office workstation',
      },
    },
  ],
  background: {
    type: 'color',
    color: 'var(--ui-light-accent-color)',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
