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
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'depositphotos-77296596-original.png',
    overlay: {
      type: 'gradient',
      gradient: {
        angle: 180,
        firstColor: 'transparent',
        secondColor: 'var(--ui-dark-shade-color)',
      },
      opacity: 0.6,
    },
  },
  logo: {
    image: {
      resourceRef: 'logo_617.png',
      alt: 'Logo Company',
      width: 197,
      height: 41,
    },
  },
  topLineText: {
    content: '<a href="tel:+8001234567">+ 800 123 45 67</a>',
    type: 'text',
  },
  menu: [
    {
      id: 'about-us',
      metadata: {
        displayName: 'About Us',
      },
    },
    {
      id: 'services',
      metadata: {
        displayName: 'Services',
      },
    },
    {
      id: 'project',
      metadata: {
        displayName: 'Project',
      },
    },
    {
      id: 'testimonials',
      metadata: {
        displayName: 'Testimonials',
      },
    },
    {
      id: 'careers',
      metadata: {
        displayName: 'Carrers',
      },
    },
    {
      id: 'team',
      metadata: {
        displayName: 'Team',
      },
    },
    {
      id: 'development',
      metadata: {
        displayName: 'Development',
      },
    },
    {
      id: 'contact-us',
      metadata: {
        displayName: 'Contact Us',
      },
    },
  ],
  socialIcons: {
    networks: [
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
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
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
    ],
    target: '_blank',
    design: {
      border: null,
      innerFill: true,
      preset: 'preset001',
      offset: 6,
      color: 'var(--ui-link-color)',
      sizes: [10, 20, 30, 40],
      size: 37,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
