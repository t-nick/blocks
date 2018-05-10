import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-awards/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  awards: [
    {
      ...Component.defaultContent.awards[0],
      picture: {
        ...Component.defaultContent.awards[0].picture,
        resourceRef: 'logo1.png',
      },
    },
    {
      ...Component.defaultContent.awards[1],
      picture: {
        ...Component.defaultContent.awards[1].picture,
        resourceRef: 'logo2.png',
      },
    },
    {
      ...Component.defaultContent.awards[2],
      picture: {
        ...Component.defaultContent.awards[2].picture,
        resourceRef: 'logo3.png',
      },
    },
    {
      ...Component.defaultContent.awards[3],
      picture: {
        ...Component.defaultContent.awards[3].picture,
        resourceRef: 'logo4.png',
      },
    },
    {
      ...Component.defaultContent.awards[4],
      picture: {
        resourceRef: 'logo5.png',
        alt: 'R&D Leader in Tech photo',
      },
    },
    {
      ...Component.defaultContent.awards[5],
      picture: {
        resourceRef: 'logo6.png',
        alt: 'R&D Leader in Tech photo',
      },
    },
  ],
  title: {
    content: 'Company Awards',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: false, label: 'Awards title', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
