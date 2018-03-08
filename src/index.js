import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,

  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  awards: [
    {
      title: {
        content: 'R&D Leader in Tech (2017)',
        type: 'heading',
      },
      picture: {
        alt: 'R&D Leader in Tech photo',
        resourceRef: '1.png',
      },
    },
    {
      title: {
        content: 'Most Innovative B2B Solutions (2016)',
        type: 'heading',
      },
      picture: {
        alt: 'Most Innovative B2B Solutions photo',
        resourceRef: '2.png',
      },
    },
    {
      title: {
        content: 'Best Service Provider (2014)',
        type: 'heading',
      },
      picture: {
        alt: 'Best Service Provider',
        resourceRef: '3.png',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        alt: 'Leader of Innovation photo',
        resourceRef: '4.png',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        alt: 'Leader of Innovation photo',
        resourceRef: '5.png',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        alt: 'Leader of Innovation photo',
        resourceRef: '6.png',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        alt: 'Leader of Innovation photo',
        resourceRef: '7.png',

      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        alt: 'Leader of Innovation photo',
        resourceRef: '8.png',

      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Awards title', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
