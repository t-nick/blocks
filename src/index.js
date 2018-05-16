import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-footer/src/options.json'
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
      resourceRef: 'logo.png',
      alt: 'Logo',
      width: 387,
      height: 117,
    },
  },
  follow: {
    ...Component.defaultContent.follow,
    content: 'Follow us',
  },
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    design: {
      ...Component.defaultContent.socialIcons.design,
      border: null,
      innerFill: true,
      color: 'light-shade-color',
      offset: 32,
    },
    networks: [
      {
        ...Component.defaultContent.socialIcons.networks[1],
      },
      {
        ...Component.defaultContent.socialIcons.networks[0],
      },
      {
        ...Component.defaultContent.socialIcons.networks[3],
      },
      {
        ...Component.defaultContent.socialIcons.networks[2],
      },
    ],
  },
  menu: [
    {
      ...Component.defaultContent.menu[0],
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'About us',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'testimonials',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Testimonials',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'team',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Our team',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'services',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Services',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'blog',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Blog',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'resources',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Resources',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'careers',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Careers',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'approach',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Our approach',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'press',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Press',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'projects',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Projects',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'industries',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Industries',
      },
    },
    {
      ...Component.defaultContent.menu[0],
      id: 'contact',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Contact us',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
