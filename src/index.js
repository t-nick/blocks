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
  title: {
    content: 'News',
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
    textValue: 'Show more',
    type: 'secondary',
  },
  background: {
    type: 'color',
    color: '#fff',
  },
}


ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
