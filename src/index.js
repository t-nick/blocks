import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    resourceRef: 'bg.png',
  },
  title: {
    content: 'Client Reviews',
    type: 'blockTitle',
    color: 'var(--ui-block-title-color)',
  },
  partners: [
    {
      logo: {
        image: {
          resourceRef: 'item-1.png',
          width: 245,
          height: 81,
        },
      },
      title: {
        content: 'Jim Cafone',
        type: 'heading',
        color: 'var(--ui-dark-shade-color)',
      },
      desc: {
        content: '«Night or day, Acrozz Logistics is the most reliable freight transportation service provider in our area.»',
        type: 'quote',
        color: 'var(--ui-dark-shade-color)',
      },
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'item-2.png',
          width: 180,
          height: 133,
        },
      },
      title: {
        content: 'Larry Grischow',
        type: 'heading',
        color: 'var(--ui-dark-shade-color)',
      },
      desc: {
        content: '«There\'s a reason why we work with Acrozz Logistics for many years. They\'re friendly, efficient, and incredibly reliable!»',
        type: 'quote',
        color: 'var(--ui-dark-shade-color)',
      },
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'item-3.png',
          width: 180,
          height: 79,
        },
      },
      title: {
        content: 'Bjorn Vang Jensen',
        type: 'heading',
        color: 'var(--ui-dark-shade-color)',
      },
      desc: {
        content: '«Acrozz provides logistics services of the exceptional quality and operational excellence. Highly recommend!»',
        type: 'quote',
        color: 'var(--ui-dark-shade-color)',
      },
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  link: {defaultValue: false, label: 'Partner link', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
