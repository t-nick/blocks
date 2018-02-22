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
        content: 'Client Catch-Up: Evolve Architecture',
        type: 'heading',
      },
      description: {
        content: 'One of the things I love most about my job is that I often find I learn…',
        type: 'text',
      },
      category: {
        content: 'Roy Hale',
        type: 'caption',
      },
      date: {
        content: 'September 11th, 2017',
        type: 'caption',
      },
      picture: {
        resourceRef: 'blog_1.jpg',
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
        textValue: 'CONTINUE READING',
        type: 'link',
      },
    },
    {
      title: {
        content: 'How to Get Your Business Found on Google',
        type: 'heading',
      },
      description: {
        content: 'If there is one thing businesses want and need today is getting found in…',
        type: 'text',
      },
      category: {
        content: 'Roy Hale',
        type: 'caption',
      },
      date: {
        content: 'September 8th, 2017',
        type: 'caption',
      },
      picture: {
        resourceRef: 'blog_2.jpg',
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
        textValue: 'CONTINUE READING',
        type: 'link',
      },
    },
  ],
  title: {
    content: 'Related posts',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
