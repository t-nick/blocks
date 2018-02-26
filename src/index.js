import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: 'Upcoming workshops',
  blog: [
    {
      title: {
        content: 'Business Plan Series',
        type: 'heading',
      },
      description: {
        content: "This intensive Business Plan Workshop Series is created to increase business owners’ knowledge, reliability, and skills necessary for high performance. Together we'll develop a complete business plan in over a few weeks.",
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'Sep. 28, 2017 – Oct. 11, 2017 - 18:30',
        type: 'caption',
      },
      picture: {
        resourceRef: 'article_left.jpg',
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
        textValue: 'learn more and apply',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Sales Is NOT a Dirty Word: The Workshop',
        type: 'heading',
      },
      description: {
        content: "Are you an aspiring entrepreneur or a small business owner? If you are not sure how to create your marketing messages and sales, present a valuable offer to your potential clients, we'll teach you how to understand your customersand gain success.",
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'Oct. 28, 2017 - 18:30',
        type: 'caption',
      },
      picture: {
        resourceRef: 'article_right.jpg',
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
        textValue: 'learn more and apply',
        type: 'link',
      },
    },
  ],
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
    textValue: 'all workshops',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
