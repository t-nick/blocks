import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-quote/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'image-bg.jpg',
    overlay: {
      type: 'color',
      color: 'var(--ui-dark-shade-color)',
      opacity: 0.2,
    },
  },
  blockquote:
  'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.',
  author: 'Amelia Earhart',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  author: {defaultValue: true, label: 'Quote author', type: 'checkbox'},
}

export default ExtendedWireframe
