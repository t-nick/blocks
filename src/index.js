import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
  },
  title: {
    content: 'Sed cursus feugiat',
    type: 'heading',
    color: '#676a73',
  },
  heading: {
    content: "Let's talk about us",
    type: 'blockTitle',
    color: '#222328',
  },
  subheading: {
    content:
      'We provide a whole bulk of services to ensure stable growth of the company',
    type: 'subheading',
  },
  text: {
    content:
      'We provide a whole bulk of services to ensure stable growth of the company. The profound expertise of our team, deep understanding of all business aspects, ideal knowledge of processes will help to deal with various issues.<br><br><br> We create unique and innovative solutions for our customers along with the high-quality support services and personal approach to any case. Feel free to entrust your business to our experts, and you’ll see the difference! ',
    type: 'text',
    color: '#676a73',
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
    textValue: 'Read more',
    type: 'primary',
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
  align: {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'center', label: 'Center'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'left',
    name: 'Aligning',
    type: 'radio-button-group',
  },
  heading: {defaultValue: true, label: 'Company title', type: 'checkbox'},
  subheading: {
    defaultValue: false,
    label: 'Company description',
    type: 'checkbox',
  },
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'social-icons': {
    defaultValue: true,
    label: 'Social media buttons',
    type: 'checkbox',
  },
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {
    defaultValue: true,
    label: 'Additional button',
    type: 'checkbox',
  },
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
