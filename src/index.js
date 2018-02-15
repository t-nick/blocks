import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  theme: 'light',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'cover-bg.jpg',
  },
  title: {
    content: 'Quantum Company',
    type: 'heroTitle',
  },
  subtitle: {
    content: 'We can execute even the most unpredictable ideas! ',
    type: 'subtitle',
  },
  'cta-1': {
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
    textValue: 'Request a quote',
    type: 'primary',
    size: 'lg',
  },
  'cta-2': {
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
    type: 'secondary',
    size: 'lg',
  },
  topCaption: 'welcome',
}

ExtendedWireframe.modifierScheme = {
  align: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'left',
    name: 'Aligning',
    type: 'radio-button-group',
  },
  'caption-decorator': {defaultValue: false, label: 'Pretitle', type: 'hidden'},
  'primary-btn': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'secondary-btn': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  undefined: {type: 'separator'},
}

export default ExtendedWireframe
