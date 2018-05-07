import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      title: {
        ...Component.defaultContent.services[0].title,
        content: 'Rodney Bailey',
      },
      description: {
        ...Component.defaultContent.services[0].description,
        content: 'Magothy Electric, CEO',
      },
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: 'man1.jpg',
      },
    },
    {
      ...Component.defaultContent.services[1],
      title: {
        ...Component.defaultContent.services[1].title,
        content: 'Theodore Daniel',
      },
      description: {
        ...Component.defaultContent.services[1].description,
        content: 'Skydivers, Inc., CEO',
      },
      picture: {
        ...Component.defaultContent.services[1].picture,
        resourceRef: 'man2.jpg',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    content: 'What my clients say',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'hidden'},
  link: {defaultValue: false, label: 'Link', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'hidden'},
}

export default ExtendedWireframe
