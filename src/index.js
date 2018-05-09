import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'About The Company',
    type: 'blockTitle',
  },
  'social-title': {
    content: 'Follow us:',
    type: 'heading',
  },
  subtitle: {
    content: 'We provide a wide range of services to meet even the most daring requirements.',
    type: 'subtitle',
  },
  text: {
    content: 'Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients.',
    type: 'text',
  },
  'text-2': {
    content: 'Additional text',
    type: 'text',
  },
  picture: {
    resourceRef: 'img-1.jpg',
    alt: 'Picture about the company',
  },
  'button-1': {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Learn more',
    type: 'secondary-alt',
    size: 'md',
  },
  'button-2': {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Learn more',
    type: 'link',
  },
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
      offset: 10,
      color: '#9b9b9b',
      sizes: [10, 20, 30, 40],
      size: 34,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  socialIcons: {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
}

export default ExtendedWireframe
