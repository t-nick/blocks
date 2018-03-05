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
        content: 'How to create a house cleaning routine',
        type: 'heading',
      },
      description: {
        content: 'Whether you are a young, first-time homeowner, a newly married…',
        type: 'text',
      },
      category: {
        content: 'Kate Johnson',
        type: 'caption',
        color: 'dark-shade-color',
      },
      date: {
        content: 'September 11th, 2017',
        type: 'caption',
        brightness: 30,
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
        content: 'How to recycle plastic at home',
        type: 'heading',
      },
      description: {
        content: 'Plastic is one of the most harmful products created by…',
        type: 'text',
      },
      category: {
        content: 'Ren Tinker',
        type: 'caption',
        color: 'dark-shade-color',
      },
      date: {
        content: 'September 8th, 2017',
        type: 'caption',
        brightness: 30,
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
        content: 'Are you a clean freak?',
        type: 'heading',
      },
      description: {
        content: 'Do you prefer your home to be clean and tidy? Do you go to great... ',
        type: 'text',
      },
      category: {
        content: 'Kate Johnson',
        type: 'caption',
        color: 'dark-shade-color',
      },
      date: {
        content: 'September 6th, 2017',
        type: 'caption',
        brightness: 30,
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
    content: 'Blog',
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

export default ExtendedWireframe
