import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-testimonials/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  testimonials: [
    {
      title: {
        content: 'Julia Banks',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
      description: {
        content: '“They are always accountable. I have confidence when I make a decision. I know it\'s going to get done. If they could lose money on a project just because they\'re trying to make the customer happy, they probably would do that.”',
        type: 'text',
      },
      position: {
        content: 'CEO at Minor Thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Amanda Peterson review',
      },
    },
    {
      title: {
        content: 'Julia Banks',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
      description: {
        content: '“They are always accountable. I have confidence when I make a decision. I know it\'s going to get done. If they could lose money on a project just because they\'re trying to make the customer happy, they probably would do that.”',
        type: 'text',
      },
      position: {
        content: 'CEO at Minor Thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Jeff Gordons review',
      },
    },
    {
      title: {
        content: 'Julia Banks',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
      description: {
        content: '“They are always accountable. I have confidence when I make a decision. I know it\'s going to get done. If they could lose money on a project just because they\'re trying to make the customer happy, they probably would do that.”',
        type: 'text',
      },
      position: {
        content: 'CEO at Minor Thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Elizabeth Smith review',
      },
    },
  ],
  title: {
    content: 'Testimonials',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Every season, there’s always a new must-have (or at least must try) beauty product that comes out — the newest color palette in make-up, the latest in skin care, new scents, etc.',
    type: 'subtitle',
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
    textValue: 'View All',
    type: 'secondary',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Reviewer name', type: 'checkbox'},
  position: {defaultValue: true, label: 'Reviewer job position', type: 'checkbox'},
  date: {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
