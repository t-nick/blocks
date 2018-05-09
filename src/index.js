import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-testimonials/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-testimonials/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  subtitle: {
    content: 'To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.',
    type: 'subtitle',
  },
  testimonials: [
    {
      title: {
        content: 'Nicholas Weber',
        type: 'heading',
      },
      date: {
        content: 'October 27, 2017',
        type: 'caption',
      },
      description: {
        content: 'The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.',
        type: 'text',
      },
      position: {
        content: 'CEO at Minor Thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Nicholas Weber review',
      },
    },
    {
      title: {
        content: 'Bertie Robbins',
        type: 'heading',
      },
      date: {
        content: 'October 27, 2017',
        type: 'caption',
      },
      description: {
        content: 'The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.',
        type: 'text',
      },
      position: {
        content: 'CEO at Minor Thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Bertie Robbins review',
      },
    },
    {
      title: {
        content: 'Pauline Santiago',
        type: 'heading',
      },
      date: {
        content: 'October 27, 2017',
        type: 'caption',
      },
      description: {
        content: 'The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.',
        type: 'text',
      },
      position: {
        content: 'CEO at Minor Thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Pauline Santiago   review',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
