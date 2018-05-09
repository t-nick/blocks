import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-process/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
  steps: [
    {
      title: {
        content: 'Initial consultation',
        type: 'heading',
      },
      description: {
        content: 'After your first free session, I use the info you’ve given me about yourself and your business, what’s standing in your way, and what your business goals are.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Comprehensive assessment',
        type: 'heading',
      },
      description: {
        content: 'During the in-depth conversation about the current condition of your business and your financial potential, I’ll offer you tools to solve your causes of frustrations.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Getting results',
        type: 'heading',
      },
      description: {
        content: 'Through my coaching, you’ll improve your skills as an Entrepreneur and as a Manager, become the leader of your business, and achieve long-term results.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'How I work',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Process description', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
