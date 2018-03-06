import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      title: {
        content: 'Pick a plan',
        type: 'heading',
      },
      description: {
        content: 'The cleaner will first attach the extension pole to the water pump.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Make a payment',
        type: 'heading',
      },
      description: {
        content: 'Then the fluid will be delivered under the high pressure from a specific brush head attachment, which will be moved across the whole window surface to treat all the stains.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Make a payment',
        type: 'heading',
      },
      description: {
        content: 'After duplicating this process twice and using the brush itself to scrub off any remaining stains, the professional will let the water evaporate on its own. This will keep your window panes dirt- and dust-free for a longer time than any common cleaning methods that are used currently.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Enjoy our products',
        type: 'heading',
      },
      description: {
        content: 'On your request, your windows may be washed from the inside by our specialist. He will use purified water and squeegees for this and will stay until the moment that all stains are completely removed.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'How it works',
    type: 'blockTitle',
  },
  background: {
    type: 'color',
    color: '#fff',
  },
}

ExtendedWireframe.modifierScheme = {
  body: {defaultValue: true, label: 'Step main text', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Button', type: 'hidden'},
  heading: {defaultValue: false, label: 'Step title', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Step icon', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Process description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
