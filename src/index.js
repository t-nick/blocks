import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'First Services',
        type: 'heading',
      },
      text: {
        content: 'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.',
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
        textValue: 'Try now',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Second Services',
        type: 'heading',
      },
      text: {
        content: 'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.',
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
        textValue: 'Try now',
        type: 'primary',
      },
    },
  ],
  title: {
    content: '- Services -',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
}


ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Service description', type: 'checkbox'},
}

export default ExtendedWireframe
