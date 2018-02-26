import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  title: 'upcoming sports events',
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'Detroit Tigers at New York Yankees',
      description:
        'The New York Yankees are the personification of classic American baseball. With a franchise that covers over a century, they are the most outstanding and adored team in the history of sports.',
      category: '20',
      date: 'October, 2018',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
      },
      link: {
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
    },
    {
      id: '41db0c4f-46b3-4835-8e77-062de63d018a',
      title: 'Los Angeles Lakers at Chicago Bulls',
      description:
        'The Los Angeles Lakers is the most successful basketball team with a long list of legendary players and a huge fan base. Buy a ticket anytime and enjoy a great experience with your family or friends!',
      category: '18',
      date: 'October, 2018',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
      },
      link: {
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
    },
    {
      id: 'fff4b459-6e4f-4645-901e-4c1b1aa94e51',
      title: 'Minnesota Wild at New Jersey Devils',
      description:
        'The New Jersey Devils is a highly professional ice hockey team that are a part of the Eastern Conference of the NHL. Save your time and buy the ticket online to watch this game with your own eyes.',
      category: '07',
      date: 'October, 2018',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
      },
      link: {
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
    },
  ],
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  subtitle: 'Subtitle here',
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
}

ExtendedWireframe.modifierScheme = {
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'post-description': {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  'post-image': {defaultValue: false, label: 'Post image', type: 'checkbox'},
  'post-link': {defaultValue: false, label: 'Post link', type: 'checkbox'},
  'post-publish-date': {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
