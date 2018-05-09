import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-process/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-process/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Our process',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.',
    type: 'subtitle',
  },
  steps: [
    {
      heading: {
        content: 'Beyond The Naked Eye',
        type: 'heading',
      },
      description: {
        content: 'The following year, he had a profound spiritual experience, stating that, "a golden spirit sprang up from the ground, veiled my body, and changed my body into a golden one."',
        type: 'text',
      },
    },
    {
      heading: {
        content: 'Ordering Contact Lens Online',
        type: 'heading',
      },
      description: {
        content: 'The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.',
        type: 'text',
      },
    },
    {
      heading: {
        content: 'Swallow To Glow A Holistic Approach To Skin Health',
        type: 'heading',
      },
      description: {
        content: 'However, Takeda overshadowed him throughout his early martial arts career, and Ueshiba\'s own students recorded the need to address what they referred to as "the Takeda problem"',
        type: 'text',
      },
    },
  ],
  button: {
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
  subtitle: {defaultValue: true, label: 'Process description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
