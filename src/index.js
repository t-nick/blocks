import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
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
    resourceRef: 'bg.jpg',
  },

  title: {
    content: 'Our Values',
    type: 'blockTitle',
    color: '#1e1313',
  },
  subtitle: {
    content: 'We are a customer-oriented company, and our  values drive us to achieve more.',
    type: 'subheading',
    color: '#646060',
  },
  text: {
    content: 'We always work hard to improve our goods and services to achieve higher results for our clients. We love challenging tasks that require an innovative approach. Thus, if your business needs a unique solution, we are ready to fine-tune our existing products to meet all your demands.',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Description', type: 'checkbox'},
}

export default ExtendedWireframe
