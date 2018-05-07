import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-about/src/options.json'
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
    resourceRef: 'bg.jpg',
  },
  title: {
    content: 'Sed cursus feugiat',
    type: 'heading',
  },
  heading: {
    content: "Let's talk about us",
    type: 'blockTitle',
  },
  subheading: {
    content:
      'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,<br/>quis gravida magna mi a libero. Fusce vulputate eieifend sapien.',
    type: 'subheading',
  },
  text: {
    content:
      'Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum<br/>volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.<br/>Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed<br/>lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque<br/>facilisis. Etiam imperdiet imperdiet orci.',
    type: 'text',
  },
  'button-1': {
    textValue: 'Read more',
    type: 'primary',
  },
  'button-2': {
    textValue: 'Read more',
    type: 'secondary',
  },
  'social-icons': {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
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
      color: '#676a73',
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
  'top-caption': {
    content: 'sed cursus feugiat',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Company description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
