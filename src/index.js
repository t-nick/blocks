import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  blog: [
    {
      title: {
        content: 'We clean carpets now',
        type: 'heading',
      },
      description: {
        content: 'Now we can clean carpets to make your home ambiance more…',
        type: 'text',
      },
      date: {
        content: 'September 11th, 2017',
        type: 'caption',
      },
      picture: {
        src: 'img-1.png',
        alt: 'Article illustration photo',
      },
      category: {
        content: '',
        type: 'caption',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Our teams need cleaners',
        type: 'heading',
      },
      description: {
        content: 'We are always in search of new cleaners. If you are interested...',
        type: 'text',
      },
      date: {
        content: 'September 8th, 2017',
        type: 'caption',
      },
      category: {
        content: '',
        type: 'caption',
      },
      picture: {
        src: 'img-2.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'We start a new promo',
        type: 'heading',
      },
      description: {
        content: 'We are going to start a new promo this week. Do not miss out your… ',
        type: 'text',
      },
      category: {
        content: '',
        type: 'caption',
      },
      date: {
        content: 'September 6th, 2017',
        type: 'caption',
      },
      picture: {
        src: 'img-3.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'News',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Subtitle here',
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
    textValue: 'Show more',
    type: 'secondary',
  },
  background: {
    type: 'color',
    color: '#fff',
  },
}

export default ExtendedWireframe
