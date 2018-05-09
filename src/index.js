import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-team/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  team: [
    {
      name: {
        content: 'Juan Jensen',
        type: 'heading',
      },
      position: {
        content: '200 jumps',
        type: 'caption',
      },
      description: {
        content: 'Andrew Shimmer has more than 15 years of experience in IT development and marketing. He has successfully run companies specializing in innovative technologies.',
        type: 'text',
      },
      picture: {
        resourceRef: 'img1.png',
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
        content: 'Robert Brewer',
        type: 'heading',
      },
      position: {
        content: '40 jumps',
        type: 'caption',
      },
      description: {
        content: 'Ann is a highly skilled professional with over 10 years of experience in marketing. She has been rewarded by the Association of Marketing as one of the most successful directors. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'img2.png',
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
        content: 'Albert Rowe',
        type: 'heading',
      },
      position: {
        content: '50 jumps',
        type: 'caption',
      },
      description: {
        content: 'For 13 years, Tomas has been taking a position of product manager at Quantum. He successfully launched several best-selling products. Now he is working on 3 new products.',
        type: 'text',
      },
      picture: {
        resourceRef: 'img3.png',
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
        content: 'Tomas Abbar',
        type: 'heading',
      },
      position: {
        content: '71 jumps',
        type: 'caption',
      },
      description: {
        content: 'For 13 years, Tomas has been taking a position of product manager at Quantum. He successfully launched several best-selling products. Now he is working on 3 new products.',
        type: 'text',
      },
      picture: {
        resourceRef: 'img4.png',
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
    content: 'OUR PILOTS',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Our team is our proud. Each of the team members is dedicated to delivering the best results to the clients. Meet some of our expert who will work on your case:',
    type: 'subtitle',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'member-desc': {defaultValue: false, label: 'Team member bio', type: 'checkbox'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'checkbox'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'checkbox'},
  'member-social': {defaultValue: false, label: 'Team social buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Team description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
