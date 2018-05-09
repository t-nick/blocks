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
    content: 'From the Blog',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Subtitle here',
    type: 'subtitle',
  },
  blog: [
    {
      title: {
        content: 'Our Team Celebrates 1 Million Miles Accident Free',
        type: 'heading',
      },
      description: {
        content: 'Our drivers achieved an incredible milestone this year by driving 1.3 million miles as a team with zero preventable accidents. ',
        type: 'text',
      },
      category: {
        content: '',
        type: 'caption',
      },
      date: {
        content: 'August 14, 2017 by Admin',
        type: 'caption',
      },
      picture: {
        resourceRef: 'img-1.jpg',
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
        content: '​How Supply Chain Management Has Evolved Over the Last 5 Years',
        type: 'heading',
      },
      description: {
        content: "Supply chain engineers must embrace change to keep up with the Jones's. New technology sweeping our warehouses make things possible...",
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'July 20, 2017 by Admin',
        type: 'caption',
      },
      picture: {
        resourceRef: 'img-2.jpg',
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
        content: '​Do You Have a Proactive Supply Chain Design or a Reactive One?',
        type: 'heading',
      },
      description: {
        content: 'Every supply chain has a central purpose, regardless of the size or industry: getting materials from... ',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'July 18, 2017 by Admin',
        type: 'caption',
      },
      picture: {
        resourceRef: 'img-3.jpg',
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
    textValue: 'View More Posts',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
