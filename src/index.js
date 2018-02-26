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
        content: 'Business Planning: Keys to Success',
        type: 'heading',
      },
      description: {
        content:
          'Roy will share the essential steps of business planning and the main key elements for business growth. His simple approach to strategic planning steps will help you determine and meet your business goals, operational milestones, and sales objectives.',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'Jul. 28, 2017 – Aug. 11, 2017 - 18:30',
        type: 'caption',
      },
      picture: {
        resourceRef: 'blogfoto_1.jpg',
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
        textValue: 'LEARN MORE AND REGISTER',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Business Planning Basics',
        type: 'heading',
      },
      description: {
        content:
          'Roy will run you through his six key steps to putting a dynamic but simple business plan. Whether you’re a verified small business eager to take your business to the next level, or a start-up at the beginning of your journey, this workshop is right for you.',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'Aug. 28, 2017 - 18:30',
        type: 'caption',
      },
      picture: {
        resourceRef: 'blogfoto_2.jpg',
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
        textValue: 'LEARN MORE AND REGISTER',
        type: 'link',
      },
    },
  ],
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Past workshops',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
