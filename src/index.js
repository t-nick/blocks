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
    resourceRef: 'adam.jpg',
  },
  title: {
    content: 'Adam',
    type: 'blockTitle',
  },
  heading: {
    content: 'A whole bulk of services',
    type: 'heading',
  },
  subheading: {
    content: '“Absolutely excellent. Great service, very quick and pleasant cleaner I have ever seen.” – Mary Vale',
    type: 'subheading',
  },
  text: {
    content: 'Adam is one of our most passionate and professional cleaners. He moved to New York from Greece six years ago with his family. Earlier he worked as a cook in the Mexican restaurant, so knows all about dirty kitchens and how to make them shine! Adam loves being a part of our team and offers great ideas on how to promote cleaning, what products to use, and keeps the client at the center of his mind.',
    type: 'text',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: false, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Company description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
