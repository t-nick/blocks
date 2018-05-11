import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: '1.jpg',
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        ...Component.defaultContent.services[1].picture,
        resourceRef: '2.jpg',
      },
    },
    {
      ...Component.defaultContent.services[2],
      picture: {
        ...Component.defaultContent.services[2].picture,
        resourceRef: '3.jpg',
      },
    },
    {
      ...Component.defaultContent.services[3],
      picture: {
        ...Component.defaultContent.services[3].picture,
        resourceRef: '4.jpg',
      },
    },
    {
      picture: {
        resourceRef: '5.jpg',
        alt: 'Service illustration photo',
      },
      title: {
        content: 'Service 1',
        type: 'heading',
      },
      description: {
        content: 'Multipurpose assistance for online stores and offline retail businesses.',
        type: 'text',
      },
    },
    {
      picture: {
        resourceRef: '6.jpg',
        alt: 'Service illustration photo',
      },
      title: {
        content: 'Service 1',
        type: 'heading',
      },
      description: {
        content: 'Multipurpose assistance for online stores and offline retail businesses.',
        type: 'text',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  link: {defaultValue: false, label: 'Link', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
}

export default ExtendedWireframe
