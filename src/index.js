import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Our Clients',
    type: 'blockTitle',
  },
  partners: [
    {
      ...Component.defaultContent.partners[0],
      logo: {
        image: {
          resourceRef: '01.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[1],
      logo: {
        image: {
          resourceRef: '02.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[2],
      logo: {
        image: {
          resourceRef: '03.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[3],
      logo: {
        image: {
          resourceRef: '04.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[4],
      logo: {
        image: {
          resourceRef: '05.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[5],
      logo: {
        image: {
          resourceRef: '06.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[6],
      logo: {
        image: {
          resourceRef: '07.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[7],
      logo: {
        image: {
          resourceRef: '08.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[8],
      logo: {
        image: {
          resourceRef: '09.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[9],
      logo: {
        image: {
          resourceRef: '10.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[10],
      logo: {
        image: {
          resourceRef: '11.png',
          width: 170,
          height: 170,
        },
      },
    },
    {
      ...Component.defaultContent.partners[11],
      logo: {
        image: {
          resourceRef: '12.png',
          width: 170,
          height: 170,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: false, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: false, label: 'Partner link', type: 'checkbox'},
}

export default ExtendedWireframe
