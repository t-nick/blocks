import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-awards/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  awards: [
    {
      title: {
        content: 'Most Innovative Solutions for Companies (2016)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'img-1.jpg',
        alt: 'Award "Most Innovative Solutions for Companies"',
      },
    },
    {
      title: {
        content: 'Best Service Provider (2014)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'img-2.jpg',
        alt: 'Award "Best Service Provider"',
      },
    },
    {
      title: {
        content: 'Comfortable and Modern Office Design (2012)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'img-3.jpg',
        alt: 'Award "Comfortable and Modern Office Design"',
      },
    },
  ],
  title: {
    content: 'Awards',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We’re proud of our awards! Look, what we’ve already won:',
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Awards description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Award title', type: 'checkbox'},
}

export default ExtendedWireframe
