import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Latest News',
    type: 'blockTitle',
  },
  blog: [
    {
      title: {
        content: 'Anchor Media',
        type: 'heading',
      },
      description: {
        content: '2017 Lloyds List Americas Award Nomination, Ship Operator of the Year',
        type: 'text',
      },
      category: {
        content: '',
        type: 'caption',
      },
      date: {
        content: 'August 03, 2017',
        type: 'caption',
      },
      picture: {
        src: 'img-1.jpg',
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
        textValue: 'Read article',
        iconEnabled: true,
        iconAlignment: 'right',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)" x="0px" y="0px" viewBox="0 0 100 125"><path d="M50 66.138l3.2-2.7 26-22-6.4-7.7-22.8 19.4-22.8-19.3-6.4 7.7 26 22 3.2 2.6z"/></svg>',
        },
        type: 'link',
      },
    },
    {
      title: {
        content: 'Logistic Global',
        type: 'heading',
      },
      description: {
        content: 'Shawn Garry Joins Acrozz as VP of Regulatory Compliance & Inspections',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'July 27, 2017',
        type: 'caption',
      },
      picture: {
        src: 'img-2.jpg',
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
        textValue: 'Read article',
        iconEnabled: true,
        iconAlignment: 'right',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)" x="0px" y="0px" viewBox="0 0 100 125"><path d="M50 66.138l3.2-2.7 26-22-6.4-7.7-22.8 19.4-22.8-19.3-6.4 7.7 26 22 3.2 2.6z"/></svg>',
        },
        type: 'link',
      },
    },
    {
      title: {
        content: '​Business News',
        type: 'heading',
      },
      description: {
        content: '43 Vessels Awarded the Jones F. Devlin Award',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'July 21, 2017',
        type: 'caption',
      },
      picture: {
        src: 'img-3.jpg',
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
        textValue: 'Read article',
        iconEnabled: true,
        iconAlignment: 'right',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)" x="0px" y="0px" viewBox="0 0 100 125"><path d="M50 66.138l3.2-2.7 26-22-6.4-7.7-22.8 19.4-22.8-19.3-6.4 7.7 26 22 3.2 2.6z"/></svg>',
        },
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
    textValue: 'View More News',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'post-image': {defaultValue: false, label: 'Post image', type: 'checkbox'},
}

export default ExtendedWireframe
