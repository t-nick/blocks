import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,

  background: {
    type: 'color',
    color: '#ffffff',
  },
  title: 'Our process',
  description: 'But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  steps: [
    {
      id: '07a5468d-b105-4866-98a5-dcf2cf46db3a',
      title: 'Pick a plan',
      description: 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?',
    },
    {
      id: '12e39a62-f8f4-4bf5-b2a0-5d536eeecd27',
      title: 'Make a payment',
      description: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3505',
      title: 'Enjoy our products',
      description: 'To take a trivial example, which of us ever undertakes laborious physical exercise.',
    },
  ],
  cta: {
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
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Process description',
    defaultValue: true,
  },
  {
    id: 'icon',
    type: 'checkbox',
    label: 'Step icon',
    defaultValue: true,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Step title',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Step main text',
    defaultValue: true,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: true,
  },
]

export default ExtendedWireframe
