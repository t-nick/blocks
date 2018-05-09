import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },
  subtitle: {
    content: 'They were significantly bigger than him, especially the second man, who frequently slapped him on the shoulder.',
    type: 'subtitle',
  },
  partners: [
    {
      logo: {
        image: {
          resourceRef: 'logo-img-1.png',
          width: 78,
          height: 78,
        },
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-img-2.png',
          width: 78,
          height: 78,
        },
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-img-3.png',
          width: 108,
          height: 37,
        },
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-img-4.png',
          width: 73,
          height: 73,
        },
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-img-5.png',
          width: 110,
          height: 30,
        },
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-img-6.png',
          width: 103,
          height: 36,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: false, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: false, label: 'Partner link', type: 'checkbox'},
}

export default ExtendedWireframe
