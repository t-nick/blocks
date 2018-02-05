import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  title: 'Recent Blog Entries',
  subtitle: 'Subtitle here',
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
    textValue: 'go to blog',
    type: 'secondary',
  },
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'Meet the Best Modern Tattoo Artists',
      description:
        'With the industry booming and thousands of young artists…',
      category: 'September 11, 2017',
      date: 'Keely Rutherford',
      picture: {
        resourceRef: 'blog_1_home_img1.png',
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
        textValue: 'Continue reading >',
        type: 'link',
      },
    },
    {
      id: '41db0c4f-46b3-4835-8e77-062de63d018a',
      title: 'Tattoo Fest 2017',
      description:
        'Tattoo Fest 2017 will be the most important industry event in SF...',
      category: 'September 08, 2017',
      date: 'Mike Tattooer',
      picture: {
        resourceRef: 'blog_1_home_img2.png',
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
        textValue: 'Continue reading >',
        type: 'link',
      },
    },
    {
      id: 'fff4b459-6e4f-4645-901e-4c1b1aa94e51',
      title: 'The Most Popular Types of Tattoos in the US',
      description:
        'Considering there are hundreds of varieties and types of this…',
      category: 'September 06, 2017',
      date: 'Mike Tattooer',
      picture: {
        resourceRef: 'blog_1_home_img3.png',
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
        textValue: 'Continue reading >',
        type: 'link',
      },
    },
  ],
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
