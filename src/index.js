import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-awards/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-awards/src/options.json'
import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

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
      ...Component.defaultContent.awards[0],
      title: {
        ...Component.defaultContent.awards[0].title,
        content: 'Most Innovative<br/>Solutions for<br/>Companies (2016)',
      },
      picture: {
        ...Component.defaultContent.awards[0].picture,
        resourceRef: 'icon-1.png',
      },
    },
    {
      ...Component.defaultContent.awards[1],
      title: {
        ...Component.defaultContent.awards[1].title,
        content: 'Best Customer<br/>Approach<br/>at the World<br/>Conference (2014)',
      },
      picture: {
        ...Component.defaultContent.awards[1].picture,
        resourceRef: 'icon-2.png',
      },
    },
    {
      ...Component.defaultContent.awards[2],
      title: {
        ...Component.defaultContent.awards[2].title,
        content: 'Comfortable and<br/>Modern Office<br/>Design (2012)',
      },
      picture: {
        ...Component.defaultContent.awards[2].picture,
        resourceRef: 'icon-3.png',
      },
    },
  ],
  subtitle: {
    ...Component.defaultContent.subtitle,
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,

}

export default ExtendedWireframe
