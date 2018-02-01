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
      id: '07a5468d-b105-4866-98a5-dcf2cf46db3a',
      title: 'Step 01',
      description:
        'It will be as simple as Occidental; in fact, it will be Occidental. To an English person',
    },
    {
      id: '12e39a62-f8f4-4bf5-b2a0-5d536eeecd27',
      title: 'Step 02',
      description:
        'It will be as simple as Occidental; in fact, it will be Occidental. To an English person',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3505',
      title: 'Step 03',
      description:
        'It will be as simple as Occidental; in fact, it will be Occidental. To an English person',
    },
  ],
  title: 'Our Process',
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
    defaultValue: false,
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
    label: 'Button',
    defaultValue: false,
  },
]

export default ExtendedWireframe
