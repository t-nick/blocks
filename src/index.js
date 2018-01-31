import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: 'Inspiration for your life.',
  subtitle: 'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.',
  background: {
    type: 'image',
    src: 'cover.jpg',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Title description',
    defaultValue: true,
  },
  {
    id: 'primary-btn',
    type: 'checkbox',
    label: 'Primary button',
    defaultValue: true,
  },
  {
    id: 'secondary-btn',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: false,
  },
  {
    type: 'separator',
  },
  {
    id: 'align',
    type: 'radio-button-group',
    name: 'Aligning',
    defaultValue: 'left',
    children: [
      {
        id: 'left',
        label: 'left',
      },
      {
        id: 'center',
        label: 'center',
      },
      {
        id: 'right',
        label: 'right',
      },
    ],
  },
  {
    id: 'caption-decorator',
    type: 'hidden',
    name: 'top decorator',
    defaultValue: true,
  }]

export default ExtendedWireframe
