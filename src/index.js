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
        content:
          'Our HR Director shares his experience how to fill positions with the best candidates, where to find talents, and how to attract professionals to your business. ',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'September 22, 2017',
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
        content:
          'Do you want to achieve higher profits this year? Our new product will help you get what you want. In this article, you will find out how to use it to get more benefits.',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'September 22, 2017',
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
