import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  articles: [
    {
      id: 'f822d787-b3e2-432d-a03e-689c58efb302',
      description: {
        content: 'How to change your attitude to money, so that you can make far more.',
        type: 'text',
      },
    },
    {
      id: '18ce5632-46d1-4c9e-b249-ca0e37f665c2',
      description: {
        content:
          'How to better recognize and attract perfect clients, make your marketing more effective and targeted.',
        type: 'text',
      },
    },
    {
      id: '7986b4e0-751f-48f6-8861-5ace080e284b',
      description: {
        content:
          'How to save all your business balls in the air without losing sagacity and sleep (and without working on weekends).',
        type: 'text',
      },
    },
    {
      id: 'f822d787-b3e2-432d-a03e-689c8728fb302',
      description: {
        content:
          'How to stop procrastination, indecision, and self-doubt so that you get way more done in far less time.',
        type: 'text',
      },
    },
    {
      id: '18ce5632-46d1-4c9e-b249-ca0e2725f665c2',
      description: {
        content:
          'How to overwhelm competitors with class and kindness so that you’re no longer wasting your energy and time thinking about them.',
        type: 'text',
      },
    },
    {
      id: '7986b4e0-751f-48f6-8861-5ace0257e284b',
      description: {
        content:
          'How to build your professional reputation to engage far more possibilities so that you can start having a bigger impact with your work.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'Marketing SOS coaching course will teach you:',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'item-description': {defaultValue: true, label: 'Advantages description', type: 'checkbox'},
  'item-heading': {defaultValue: false, label: 'Advantages title', type: 'checkbox'},
  'item-icon': {defaultValue: false, label: 'Advantages icon', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
