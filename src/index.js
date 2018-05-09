import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#fff',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'What we clean',
  },
  services: [
    {
      title: {
        content: 'Factories',
        type: 'heading',
        color: 'var(--ui-light-shade-color)',
      },
      picture: {
        resourceRef: 'services1.jpg',
        alt: 'Quantum E-commerce illustration',
      },
    },
    {
      title: {
        content: 'Warehouses',
        type: 'heading',
        color: 'var(--ui-light-shade-color)',
      },
      picture: {
        resourceRef: 'services2.jpg',
        alt: 'Quantum E-commerce illustration',
      },
    },
    {
      title: {
        content: 'Distribution centres',
        type: 'heading',
        color: 'var(--ui-light-shade-color)',
      },
      picture: {
        resourceRef: 'services3.jpg',
        alt: 'Quantum E-commerce illustration',
      },
    },
    {
      title: {
        content: 'Constructions sites',
        type: 'heading',
        color: 'var(--ui-light-shade-color)',
      },
      picture: {
        resourceRef: 'services4.jpg',
        alt: 'Quantum E-commerce illustration',
      },
    },
    {
      title: {
        content: 'Mine sites',
        type: 'heading',
        color: 'var(--ui-light-shade-color)',
      },
      picture: {
        resourceRef: 'services5.jpg',
        alt: 'Quantum E-commerce illustration',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: false, label: 'Service main text', type: 'checkbox'},
  'service-button': {defaultValue: false, label: 'Service button', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
