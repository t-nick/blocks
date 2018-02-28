import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Executive managers',
    type: 'blockTitle',
  },
  background: {
    type: 'color',
    color: '#fff',
  },
  team: [
    {
      id: '06567442-178b-46ab-a822-661218143093',
      name: {
        content: 'Ann',
        type: 'heading',
      },
      position: {
        content: 'Founder and CEO',
        type: 'caption',
      },
      description: {
        content:
          'My work is to set the strategy\n and vision for ShinyHouse and\n then to hire extremely\n capable, devoted pople to\n deliver it.',
        type: 'text',
      },
      picture: {
        resourceRef: 'item-1.png',
        alt: 'Ann photo',
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
        textValue: 'Learn more',
        type: 'link',
      },
      email: '<a href="mailto:shimmer@gmail.com">shimmer@gmail.com</a>',
      socialIcons: {
        networks: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
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
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 11,
          color: 'var(--ui-brand-color)',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      id: 'd7b368a3-75c8-4039-80ef-15c783140026',
      name: {
        content: 'Lisa',
        type: 'heading',
      },
      position: {
        content: 'Head of Operations',
        type: 'caption',
      },
      description: {
        content:
          'I’m responsible for structuring\n & managing our Ops team to\n provide the exceptional\n service to our respectful\n clients.',
        type: 'text',
      },
      picture: {
        resourceRef: 'item-2.png',
        alt: 'Lisa photo',
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
        textValue: 'Learn more',
        type: 'link',
      },
      email: '<a href="mailto:maisner@gmail.com">maisner@gmail.com</a>',
      socialIcons: {
        networks: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
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
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 11,
          color: 'var(--ui-brand-color)',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29db',
      name: {
        content: 'Lindsey',
        type: 'heading',
      },
      position: {
        content: 'Recruitment Manager',
        type: 'caption',
      },
      description: {
        content:
          'My job is to find 5-star\n housekeepers and to make\n sure they have got the\n highest quality cleaning\n experience.',
        type: 'text',
      },
      picture: {
        resourceRef: 'item-3.png',
        alt: 'Lindsey photo',
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
        textValue: 'Learn more',
        type: 'link',
      },
      email: '<a href="mailto:abbar@gmail.com">abbar@gmail.com</a>',
      socialIcons: {
        networks: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
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
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 11,
          color: 'var(--ui-brand-color)',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29da',
      name: {
        content: 'Liam',
        type: 'heading',
      },
      position: {
        content: 'Senior Digital Marketing Manager',
        type: 'caption',
      },
      description: {
        content:
          'I attract new clients and strive to make them regular. I always try to advance the product and experience for both housekeepers and clients.',
        type: 'text',
      },
      picture: {
        resourceRef: 'item-4.png',
        alt: 'Liam photo',
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
        textValue: 'Learn more',
        type: 'link',
      },
      email: '<a href="mailto:liam@gmail.com">abbar@gmail.com</a>',
      socialIcons: {
        networks: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
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
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 11,
          color: 'var(--ui-brand-color)',
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
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'checkbox'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'checkbox'},
}

export default ExtendedWireframe
