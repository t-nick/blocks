import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  team: [
    {
      ...Component.defaultContent.team[0],
      picture: {
        resourceRef: 'team-img-1.png',
        alt: 'Andrew Shimmer photo',
      },
      socialIcons: {
        networks: [
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 8,
          color: '#f3f4f9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      ...Component.defaultContent.team[1],
      picture: {
        resourceRef: 'team-img-2.png',
        alt: 'Ann Maisner photo',
      },
      socialIcons: {
        networks: [
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 8,
          color: '#f3f4f9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      ...Component.defaultContent.team[2],
      picture: {
        resourceRef: 'team-img-3.png',
        alt: 'Tomas Abbar photo',
      },
      socialIcons: {
        networks: [
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 8,
          color: '#f3f4f9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      ...Component.defaultContent.team[2],
      picture: {
        resourceRef: 'team-img-4.png',
        alt: 'Tomas Abbar photo',
      },
      socialIcons: {
        networks: [
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 8,
          color: '#f3f4f9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Team description', type: 'checkbox'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'checkbox'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'checkbox'},
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
