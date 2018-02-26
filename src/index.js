import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  title: 'Welcome to Our Company ',
  'text-1': 'Follow us:',
  subtitle:
    'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.',
  text:
    'We want to share that passion with our customers who come far and wide to enjoy the food we have spent sleepless nights thinking up, testing and producing at the very highest standard possible.',
  picture: {
    resourceRef: 'depositphotos-98898652-original.png',
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
    type: 'primary',
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
  link: '<a href="/">More about us</a>',
  socialIcons: {
    networks: [
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://www.linkedin.com/',
      },
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://instagram.com/',
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
      offset: 15,
      color: '#ac8670',
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

ExtendedWireframe.modifierScheme = []

export default ExtendedWireframe
