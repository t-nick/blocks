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
      id: '06567442-178b-46ab-a822-661218143093',
      name: 'Blake',
      position: 'July 17th – November 27th',
      picture: {
        src: 'img-1.png',
        alt: 'Blake photo',
      },
      socialIcons: {
        networks: [
          {
            id: 'instagram',
            name: 'instagram',
            url: 'https://facebook.com/',
          },
          {
            id: 'facebook',
            name: 'facebook',
            url: 'https://twitter.com/',
          },
          {
            id: 'twitter',
            name: 'twitter',
            url: 'https://www.linkedin.com/',
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
          offset: 15,
          color: '#151f30',
          sizes: [15, 25, 35, 45],
          size: '30px',
        },
      },
    },
    {
      id: 'd7b368a3-75c8-4039-80ef-15c783140026',
      name: 'Aaron',
      position: 'October 10th, 11th & 12th',
      picture: {
        src: 'img-2.png',
        alt: 'Ann Maisner photo',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
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
          offset: 15,
          color: '#151f30',
          sizes: [15, 25, 35, 45],
          size: '30px',
        },
      },
    },
    {
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29db',
      name: 'Helem',
      position: 'October 8th – 10th',
      picture: {
        src: 'img-3.png',
        alt: 'Tomas Abbar photo',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
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
          offset: 15,
          color: '#151f30',
          sizes: [15, 25, 35, 45],
          size: '30px',
        },
      },
    },
  ],
  title: 'Guest artists',
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
    textValue: 'All artists',
    type: 'secondary',
  },
  background: {
    type: 'color',
    color: '#0c1526',
  },
}

ExtendedWireframe.modifierScheme = []

export default ExtendedWireframe
