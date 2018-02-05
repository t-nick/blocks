import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  title: 'Company News',
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: '2nd Parlor Opens in Phoenix!',
      description:
        'After 16 years of successful business operations, we’ve…',
      category: ' ',
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
      category: ' ',
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
      description:
        'Talking about a nice yearly report, we’ve got one for 2016!',
      category: ' ',
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

ExtendedWireframe.modifierScheme = [
  {
    id: 'post-publish-date',
    type: 'checkbox',
    label: 'Date of publishing',
    defaultValue: true,
  },
  {
    id: 'post-image',
    type: 'checkbox',
    label: 'Post image',
    defaultValue: true,
  },
  {
    id: 'post-description',
    type: 'checkbox',
    label: 'Post main text',
    defaultValue: true,
  },
  {
    id: 'post-link',
    type: 'checkbox',
    label: 'Post link',
    defaultValue: true,
  },
  {
    id: 'block-button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'hidden',
    label: 'Subtitle',
    defaultValue: false,
  },
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default ExtendedWireframe
