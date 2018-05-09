import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Telescopes 101',
        type: 'heading',
      },
      text: {
        content: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. ',
        type: 'text',
        color: 'var(--ui-dark-accent-color)',
      },
      picture: {
        resourceRef: 'service.jpg',
        alt: 'Telescopes 101 illustration',
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
        content: 'Weddine Makeup Tips',
        type: 'heading',
        color: 'var(--ui-light-shade-color)',
      },
      text: {
        content: 'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.',
        type: 'text',
        color: 'var(--ui-dark-accent-color)',
      },
      picture: {
        resourceRef: 'service2.jpg',
        alt: 'Weddine Makeup Tips illustration',
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
  title: {
    content: 'Services',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.',
    type: 'subtitle',
    color: 'var(--ui-dark-accent-color)',
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
    textValue: 'View All',
    type: 'secondary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Service description', type: 'checkbox'},
}

export default ExtendedWireframe
