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
        content: 'CEO at minor thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Amanda Peterson review',
        src: 'review.png',
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
        content: 'CEO at minor thinking',
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
        content: 'CEO at minor thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Elizabeth Smith review',
      },
    },
  ],
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of',
    color: 'var(--ui-dark-shade-color)',
  },
  button: {
    ...Component.defaultContent.button,
    textValue: 'Additional button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
