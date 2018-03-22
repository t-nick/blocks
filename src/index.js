import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
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
    resourceRef: 'cover.jpg',
    overlay: {
      type: 'color',
      color: 'var(--ui-light-shade-color)',
      opacity: 0.7,
    },
  },
  cover: [
    {
      title: {
        content: 'The only journey is the one within',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We implement Innovative Projects',
        type: 'subtitle',
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
        textValue: 'SIGN UP',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Quantum Company',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We implement Innovative Projects',
        type: 'subtitle',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Quantum Company',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We implement Innovative Projects',
        type: 'subtitle',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
  ],

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  arrows: {defaultValue: true, label: 'Navigation arrows', type: 'checkbox'},
  dots: {defaultValue: false, label: 'Navigation indicators', type: 'checkbox'},
  'primary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
