import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  title: 'Company News',
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: '2nd Parlor Opens in Phoenix!',
      description: 'After 16 years of successful business operations, we’ve…',
      category: '',
      date: 'September 11, 2017',
      picture: {
        resourceRef: 'blog_2_home_img1.png',
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
        textValue: 'continue reading >',
        type: 'link',
      },
    },
    {
      id: '41db0c4f-46b3-4835-8e77-062de63d018a',
      title: 'We’ve Got a New Artist!',
      description:
        'Already featuring a dozen of super talented and creative artists in our team, we’re extremely glad to…',
      category: '',
      date: 'September 08, 2017',
      picture: {
        resourceRef: 'blog_2_home_img2.png',
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
        textValue: 'continue reading >',
        type: 'link',
      },
    },
    {
      id: 'fff4b459-6e4f-4645-901e-4c1b1aa94e51',
      title: 'Here’s Our Big Data Stats for the Last Year',
      description: 'Talking about a nice yearly report, we’ve got one for 2016!',
      category: '',
      date: 'September 06, 2017',
      picture: {
        resourceRef: 'blog_2_home_img3.png',
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
        textValue: 'continue reading >',
        type: 'link',
      },
    },
  ],
  cta: {
    size: 'md',
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
    textValue: 'all news',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'post-description': {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  'post-image': {defaultValue: true, label: 'Post image', type: 'checkbox'},
  'post-link': {defaultValue: true, label: 'Post link', type: 'checkbox'},
  'post-publish-date': {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
