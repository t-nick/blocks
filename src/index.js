import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: {
    background: {
      'nth-child': [
        ['n', {
          color: 'light-shade-color',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.partners.items[0],
        logo: {
          image: {
            resourceRef: 'partners-img-1.png',
            alt: 'Partners logo',
            width: 151,
            height: 117,
          },
        },
        cta: {
          ...Component.defaultContent.cta,
          textValue: 'Case study',
          type: 'link',
        },
      },
      {
        ...Component.defaultContent.partners.items[1],
        logo: {
          image: {
            resourceRef: 'partners-img-2.png',
            alt: 'Partners logo',
            width: 135,
            height: 93,
          },
        },
        cta: {
          ...Component.defaultContent.cta,
          textValue: 'Case study',
          type: 'link',
        },
      },
      {
        ...Component.defaultContent.partners.items[2],
        logo: {
          image: {
            resourceRef: 'partners-img-3.png',
            alt: 'Partners logo',
            width: 113,
            height: 114,
          },
        },
        cta: {
          ...Component.defaultContent.cta,
          textValue: 'Case study',
          type: 'link',
        },
      },
      {
        ...Component.defaultContent.partners.items[3],
        logo: {
          image: {
            resourceRef: 'partners-img-4.png',
            alt: 'Partners logo',
            width: 146,
            height: 107,
          },
        },
        cta: {
          ...Component.defaultContent.cta,
          textValue: 'Case study',
          type: 'link',
        },
      },
    ],
  },
  background: {
    type: 'color',
    color: '#f3f3f6',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
