import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-quote/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'gradient',
    gradient: {
      angle: 180,
      firstColor: '#e2f6fe',
      secondColor: '#effdff',
    },
  },
  blockquote:
    'All day he hung round the cove or upon the cliffs with a brass telescope; all evening he sat in a corner of the parlour next the fire and drank rum and water very strong.',
  author: 'Robert Louis Stevenson',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  id: 'author',
  type: 'checkbox',
  label: 'Quote author',
  defaultValue: true,
}

export default ExtendedWireframe
