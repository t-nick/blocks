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
      name: {
        content: 'Alfred Brock',
        type: 'heading',
      },
      position: {
        content: 'CEO',
        type: 'caption',
      },
      description: {
        content: '13,000 jumps',
        type: 'text',
      },
      picture: {
        src: 'foto-1.png',
        alt: 'Alfred Brock',
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
      email: {
        content: '<a href="mailto:shimmer@gmail.com">shimmer@gmail.com</a>',
        type: 'caption',
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
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'James Lean',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director',
        type: 'caption',
      },
      description: {
        content: '11,000 jumps',
        type: 'text',
      },
      picture: {
        src: 'foto-2.png',
        alt: 'James Lean',
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
      email: {
        content: '<a href="mailto:maisner@gmail.com">maisner@gmail.com</a>',
        type: 'caption',
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
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'Vincent Powell',
        type: 'heading',
      },
      position: {
        content: 'Product Manager',
        type: 'caption',
      },
      description: {
        content: '9000 jumps',
        type: 'text',
      },
      picture: {
        src: 'foto-3.png',
        alt: 'Vincent Powell',
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
      email: {
        content: '<a href="mailto:abbar@gmail.com">abbar@gmail.com</a>',
        type: 'caption',
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
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'Jeffrey Salazar',
        type: 'heading',
      },
      position: {
        content: 'Product Manager',
        type: 'caption',
      },
      description: {
        content: '8000 jumps',
        type: 'text',
      },
      picture: {
        src: 'foto-4.png',
        alt: 'Jeffrey Salazar',
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
      email: {
        content: '<a href="mailto:abbar@gmail.com">abbar@gmail.com</a>',
        type: 'caption',
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
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
  ],
  title: {
    content: 'Skydiving instructors',
    type: 'blockTitle',
  },
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
    textValue: 'Meet our team',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'member-desc': {defaultValue: true, label: 'Team member bio', type: 'checkbox'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'checkbox'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'checkbox'},
  'member-social': {defaultValue: false, label: 'Team social buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Team description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
