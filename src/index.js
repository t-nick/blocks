import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },

  logo: {
    image: {
      resourceRef: 'layer-847.png',
      alt: 'Logo Company',
      width: 208,
      height: 50,
    },
  },
  menu: [
    {
      id: 'about-us',
      metadata: {
        displayName: 'About',
      },
    },
    {
      id: 'services',
      metadata: {
        displayName: 'Services',
      },
    },
    {
      id: 'our-team',
      metadata: {
        displayName: 'Our team',
      },
    },
    {
      id: 'works-gallery',
      metadata: {
        displayName: 'Works Gallery',
      },
    },
    {
      id: 'gift-certificates',
      metadata: {
        displayName: 'Gift Certificates',
      },
    },
    {
      id: 'aftercare',
      metadata: {
        displayName: ' Aftercare',
      },
    },
    {
      id: 'reviews',
      metadata: {
        displayName: 'Reviews',
      },
    },
    {
      id: 'faq',
      metadata: {
        displayName: 'FAQ',
      },
    },
    {
      id: 'blog',
      metadata: {
        displayName: 'Blog',
      },
    },
    {
      id: 'contact-us',
      metadata: {
        displayName: 'Contact us',
      },
    },
  ],
  socialIcons: {
    networks: [
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      offset: 5,
      color: '#929ca9',
      sizes: [10, 20, 30, 40],
      size: 40,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
