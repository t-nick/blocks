import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#0c1526',
  },
  title: {
    content: 'About us',
    type: 'blockTitle',
  },
  image: {
    src: 'bg.jpg',
    alt: 'About illustration',
  },
  heading: {
    content: 'Wedding ring tattoos',
    type: 'heading',
  },
  subheading: {
    content: "Let's start with stating the obvious. Finger tattoos, also known as wedding ring tattoos are totally a thing now. Valentine's Day often sees couples speaking of love and the everlasting commitment.",
    type: 'subtitle',
  },
  text: {
    content: 'So, in a spirit of creativity alike to the times we live in,some US couples have decided (for better or worse) that there is no way more awesome to celebrate their love then by showcasing it on each other\'s ring fingers with a tattoo.<br/><br/> &quot;An important thing to undesstand is how permanent that &quot;wedding rings tattoos&quot; are,&quot; said Christopher Loxley, who was married last July to Sarah Johnson in Santa Monica, California. For Mr. Loxley, 30, a designer in an advertising agency, and Ms. Loxley, 28, an interior designer, the factors influencing their decision to get inked came down to its lower cost and minimalism.<br/><br/>Oh, and also the fact that Mr. Loxley\'s brother is a tattoo artist.',
    type: 'text',
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
    textValue: 'Request a quote',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  'social-icons': {
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
      offset: 15,
      color: '#9b9b9b',
      sizes: [10, 20, 30, 40],
      size: 35,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  image: {defaultValue: true, label: 'About company illustration', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Company description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'social-icons': {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
