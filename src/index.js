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
    resourceRef: 'bg.jpg',
  },
  cover: [
    {
      title: {
        content: 'Perfect Choice',
        type: 'heroTitle',
      },
      subtitle: {
        content: '25 years of business achievements',
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
        textValue: 'Read More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Perfect Choice',
        type: 'heroTitle',
      },
      subtitle: {
        content: '25 years of business achievements',
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
        textValue: 'Read More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Perfect Choice',
        type: 'heroTitle',
      },
      subtitle: {
        content: '25 years of business achievements',
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
        textValue: 'Read More',
        type: 'primary',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
