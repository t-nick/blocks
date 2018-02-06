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
      name: 'Kyle',
      position: 'Tattooist: Traditional Style',
      picture: {
        src: 'img-1.png',
        alt: 'Kyle photo',
      },
      more: {
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
        textValue: 'go to portfolio',
        type: 'link',
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
      name: 'Michael',
      position: 'Tattoist: Neo-Traditional Style',
      picture: {
        src: 'img-2.png',
        alt: 'Michael photo',
      },
      more: {
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
        textValue: 'go to portfolio',
        type: 'link',
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
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29db',
      name: 'Sarah',
      position: 'Professional Body Piercer',
      picture: {
        src: 'img-3.png',
        alt: 'Sarah photo',
      },
      more: {
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
        textValue: 'go to portfolio',
        type: 'link',
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
  ],
  title: 'Our Piercers',
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
    color: '#151f30',
  },
}

export default ExtendedWireframe
