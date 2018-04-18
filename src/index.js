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
      ...Component.defaultContent.blog[0],
      picture: {
        ...Component.defaultContent.blog[0].picture,
        resourceRef: 'img-1.jpg',
      },
    },
    {
      ...Component.defaultContent.blog[1],
      picture: {
        ...Component.defaultContent.blog[1].picture,
        resourceRef: 'img-2.jpg',
      },
    },
    {
      ...Component.defaultContent.blog[2],
      picture: {
        ...Component.defaultContent.blog[2].picture,
        resourceRef: 'img-3.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'post-description': {
    defaultValue: true,
    label: 'Post main text',
    type: 'checkbox',
  },
  'post-image': {defaultValue: true, label: 'Post image', type: 'checkbox'},
  'post-link': {defaultValue: true, label: 'Post link', type: 'checkbox'},
  'post-publish-date': {
    defaultValue: true,
    label: 'Date of publishing',
    type: 'checkbox',
  },
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {
    defaultValue: false,
    label: 'Top icon decorator',
    type: 'hidden',
  },
}

export default ExtendedWireframe
