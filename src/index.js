import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Rodney Bailey',
        type: 'heading',
      },
      description: {
        content: 'Magothy Electric, CEO',
        type: 'text',
      },
      picture: {
        src: 'man1.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Theodore Daniel',
        type: 'heading',
      },
      description: {
        content: 'Skydivers, Inc., CEO',
        type: 'text',
      },
      picture: {
        src: 'man2.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
  ],
  title: {
    content: 'What my clients say',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
