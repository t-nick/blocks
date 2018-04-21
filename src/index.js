import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-awards/src/component'
import style from './style.css'

import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
  },
  awards: [
    {
      title: {
        content: 'Most Innovative<br/>Solutions for<br/>Companies (2016)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'icon-1.svg',
        alt: '',
      },
    },
    {
      title: {
        content: 'Best Customer<br/>Approach<br/>at the World<br/>Conference (2014)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'icon-2.svg',
        alt: 'Award "Best Service Provider"',
      },
    },
    {
      title: {
        content: 'Comfortable and<br/>Modern Office<br/> Design (2012)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'icon-3.svg',
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
  subtitle: {
    defaultValue: true,
    label: 'Awards description',
    type: 'checkbox',
  },
  heading: {defaultValue: true, label: 'Award title', type: 'checkbox'},
}

export default ExtendedWireframe
