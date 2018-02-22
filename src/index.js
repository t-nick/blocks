import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
    overlay: {
      type: 'color',
      color: 'brand-color',
      opacity: 0.92,
    },
  },
  subtitle: {
    type: 'subtitle',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  partners: [
    {
      picture: {
        ...Component.defaultContent.partners[0].picture,
        resourceRef: '1.png',
      },
    },
    {
      picture: {
        ...Component.defaultContent.partners[1].picture,
        resourceRef: '2.png',
      },
    },
    {
      picture: {
        ...Component.defaultContent.partners[2].picture,
        resourceRef: '3.png',
      },
    },
    {
      picture: {
        ...Component.defaultContent.partners[3].picture,
        resourceRef: '4.png',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Partner title', type: 'hidden'},
  body: {defaultValue: false, label: 'About partner', type: 'hidden'},
  link: {defaultValue: false, label: 'Partner link', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
