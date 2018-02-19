import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'Depositphotos_145064481_original.jpg',

    overlay: {
      type: 'gradient',
      gradient: {
        angle: 180,
        firstColor: 'transparent',
        secondColor: 'var(--ui-dark-shade-color)',
      },
    },
  },
  title: {
    content: 'The 10 Pillars of Business Mastery',
    type: 'blockTitle',
  },
  description: {
    content: 'Take charge of your business, dominate your market, and achieve the kind of effective results that you’ve only dreamed of.',
    type: 'text',
  },
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
    textValue: 'buy on amazon',
    type: 'primary-alt',
    size: 'lg',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  picture: {defaultValue: false, label: 'Picture', type: 'hidden'},
}

export default ExtendedWireframe

