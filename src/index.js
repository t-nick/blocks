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
    resourceRef: 'layer-204.jpg',
    overlay: {
      type: 'gradient',
      gradient: {
        angle: 180,
        firstColor: 'transparent',
        secondColor: 'var(--ui-dark-shade-color)',
      },
      opacity: 1,
    },
  },
  title: {
    content: 'We Start the Next Course in December 2017',
    type: 'blockTitle',
  },
  description: {
    content: 'We’re opening for registration in December for just 10 days, so register your details and we will start working on your business.',
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
    textValue: 'Learn more',
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
