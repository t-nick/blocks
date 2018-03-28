import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Join Acrozz Team',
    type: 'blockTitle',
  },
  text: {
    content: 'Our company is always looking for experienced people who want to become a part of our team. We are truly dedicated to safety, service, and satisfaction.  ',
    type: 'heading',
  },
  'text-2': {
    content: 'So make a wise choice!',
    type: 'small',
  },
  'button-1': {
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
    textValue: 'View Positions',
    type: 'secondary',
    size: 'md',
  },
  picture: {
    src: 'Depositphotos_47582699_original.jpg',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-text': {defaultValue: true, label: 'Additional text', type: 'hidden'},
}

export default ExtendedWireframe
