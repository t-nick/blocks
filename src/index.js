import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-awards/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'The excellence of our innovative solutions and unique services has been proved by the following awards:',
  },
  awards: [
    {
      title: {
        content: 'International Fitness<br> Awards',
        type: 'heading',
        color: 'light-accent-color',
      },
      picture: {
        alt: 'R&D Leader in Tech photo',
        resourceRef: 'pic1.png',
      },
    },
    {
      title: {
        content: 'Fit Awards<br> Asia',
        type: 'heading',
        color: 'light-accent-color',
      },
      picture: {
        alt: 'Most Innovative B2B Solutions photo',
        resourceRef: 'pic2.png',
      },
    },
    {
      title: {
        content: '2017 Employer<br> Support Freedom Award',
        type: 'heading',
        color: 'light-accent-color',
      },
      picture: {
        alt: 'Best Service Provider',
        resourceRef: 'pic3.png',
      },
    },
    {
      title: {
        content: 'America\'s Most Admired<br> Companies 2016',
        type: 'heading',
        color: 'light-accent-color',
      },
      picture: {
        alt: 'Leader of Innovation photo',
        resourceRef: 'pic4.png',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}

export default ExtendedWireframe
