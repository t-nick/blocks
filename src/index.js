import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
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
  partners: [
    {
      ...Component.defaultContent.partners[0],
      logo: {
        image: {
          resourceRef: 'partners-img-1.png',
          width: 165,
          height: 68,
        },
      },
    },
    {
      ...Component.defaultContent.partners[1],
      logo: {
        image: {
          resourceRef: 'partners-img-2.png',
          width: 130,
          height: 44,
        },
      },
    },
    {
      ...Component.defaultContent.partners[2],
      logo: {
        image: {
          resourceRef: 'partners-img-3.png',
          width: 170,
          height: 40,
        },
      },
    },
    {
      ...Component.defaultContent.partners[3],
      logo: {
        image: {
          resourceRef: 'partners-img-4.png',
          width: 168,
          height: 40,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: false, label: 'Partner title', type: 'hidden'},
  body: {defaultValue: false, label: 'About partner', type: 'hidden'},
  link: {defaultValue: false, label: 'Partner link', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
