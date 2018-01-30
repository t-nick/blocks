import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {
  enhancers: {
    withProps,
  },
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {

  title: 'Our Text Title',
  subtitle: 'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.',
  text: 'We want to share that passion with our customers who come far and wide to enjoy the food we have spent sleepless nights thinking up, testing and producing at the very highest standard possible. ',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 80%',
    },
    src: 'img/text-block-bg.png',
  },
}

ExtendedWireframe.modifierScheme = [{
  id: 'title',
  type: 'checkbox',
  label: 'Block title',
  defaultValue: true,
},
{
  id: 'subtitle',
  type: 'checkbox',
  label: 'Description',
  defaultValue: true,
},
{
  id: 'heading',
  type: 'checkbox',
  label: 'Title',
  defaultValue: false,
},
{
  id: 'subheading',
  type: 'checkbox',
  label: 'Subtitle',
  defaultValue: false,
},
{
  id: 'text',
  type: 'checkbox',
  label: 'Main text',
  defaultValue: true,
},
{
  id: 'align',
  type: 'radio-button-group',
  name: 'Aligning',
  defaultValue: 'center',
  children: [{
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
  id: 'top-icon',
  type: 'hidden',
  label: 'Top icon decorator',
  defaultValue: false,
},
]

export default ExtendedWireframe
