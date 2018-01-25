import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  team: [
    {
      id: '06567442-178b-46ab-a822-661218143093',
      name: 'Andrew Shimmer',
      position: 'CEO',
      description:
        'Andrew Shimmer has a 15-year experience in IT development and marketing. He has successfully run companies specializing in innovative technologies.',
      picture: {
        src: 'Ava_1.jpg',
        alt: 'Andrew Shimmer photo',
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
        textValue: 'Know more',
      },
      email: {
        actionConfig: {
          action: 'external',
          actions: {
            external: {
              url: 'mailto:shimmer@gmail.com',
            },
          },
        },
        textValue: 'shimmer@gmail.com',
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
          marginRight: 15,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
    {
      id: 'd7b368a3-75c8-4039-80ef-15c783140026',
      name: 'Ann Maisner',
      position: 'Marketing Director',
      description:
        'Ann is a high-skilled professional with over 10 years of experience in marketing. She has been rewarded by the Association of Marketing as one of the most successful directors. ',
      picture: {
        src: 'Ava_2.jpg',
        alt: 'Ann Maisner photo',
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
        textValue: 'Know more',
      },
      email: {
        actionConfig: {
          action: 'external',
          actions: {
            external: {
              url: 'mailto:maisner@gmail.com',
            },
          },
        },
        textValue: 'maisner@gmail.com',
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
          marginRight: 15,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
    {
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29db',
      name: 'Tomas Abbar',
      position: 'Product Manager',
      description:
        'For 13 years, Tomas has been taking a position of product manager at Quantum. He successfully launched several best-selling products. Now he is working on 3 new products.',
      picture: {
        src: 'Ava_3.jpg',
        alt: 'Tomas Abbar photo',
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
        textValue: 'Know more',
      },
      email: {
        actionConfig: {
          action: 'external',
          actions: {
            external: {
              url: 'mailto:abbar@gmail.com',
            },
          },
        },
        textValue: 'abbar@gmail.com',
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
          marginRight: 15,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
  ],
  title: 'Our Team',
  subtitle:
    'Our team is our proud. Each of the team members is dedicated to delivering the best results to the clients. Meet some of our expert who will work on your case:',
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
    textValue: 'Medium button',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'subtitle',
    type: 'hidden',
    label: 'Team description',
    defaultValue: false,
  },
  {
    id: 'block-button',
    type: 'hidden',
    label: 'Block button',
    defaultValue: false,
  },
  {
    id: 'member-link',
    type: 'hidden',
    label: 'Team member link',
    defaultValue: false,
  },
  {
    id: 'member-desc',
    type: 'checkbox',
    label: 'Team member bio',
    defaultValue: true,
  },
  {
    id: 'member-email',
    type: 'hidden',
    label: 'Team member email',
    defaultValue: false,
  },
  {
    id: 'member-social',
    type: 'hidden',
    label: 'Team social buttons',
    defaultValue: false,
  },
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default ExtendedWireframe
