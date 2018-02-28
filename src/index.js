import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: [
    {
      ...Component.defaultContent.partners[0],
      desc: {
        ...Component.defaultContent.partners[1].desc,
        content: 'Samsung. It doesn’t need a lot of words. High-quality tech products with superior design.',
      },
      picture: {
        ...Component.defaultContent.partners[0].picture,
        resourceRef: 'partners_1.png',
      },
      cta: {
        ...Component.defaultContent.partners[0].cta,
        textValue: 'Case study',
      },
    },
    {
      ...Component.defaultContent.partners[1],
      desc: {
        ...Component.defaultContent.partners[1].desc,
        content: 'Ford. This is our moving force, literally! 100% reliable and credible.',
      },
      picture: {
        ...Component.defaultContent.partners[1].picture,
        resourceRef: 'partners_2.png',
      },
      cta: {
        ...Component.defaultContent.partners[1].cta,
        textValue: 'Case study',
      },
    },
    {
      ...Component.defaultContent.partners[2],
      desc: {
        ...Component.defaultContent.partners[2].desc,
        content: 'Medical Family. Ensuring good health and medical care for our team for 5 years.',
      },
      picture: {
        ...Component.defaultContent.partners[2].picture,
        resourceRef: 'partners_3.png',
      },
      cta: {
        ...Component.defaultContent.partners[2].cta,
        textValue: 'Case study',
      },
    },
    {
      ...Component.defaultContent.partners[3],
      desc: {
        ...Component.defaultContent.partners[3].desc,
        content: 'Coffee Break Now. We love their delicious coffee and flavored cakes!',
      },
      picture: {
        ...Component.defaultContent.partners[3].picture,
        resourceRef: 'partners_4.png',
      },
      cta: {
        ...Component.defaultContent.partners[3].cta,
        textValue: 'Case study',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    type: 'blockTitle',
  },
  'top-caption': {
    ...Component.defaultContent['top-caption'],
    type: 'caption',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  'top-caption': {defaultValue: true, label: 'Top caption', type: 'checkbox'},
}

export default ExtendedWireframe
