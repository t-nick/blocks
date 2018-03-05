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
        content: 'We clean carpets now',
        type: 'heading',
      },
      description: {
        content: 'Now we can clean carpets to make your home ambiance more…',
        type: 'text',
      },
      date: {
        content: 'September 11th, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-1.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Our teams need cleaners',
        type: 'heading',
      },
      description: {
        content: 'We are always in search of new cleaners. If you are interested...',
        type: 'text',
      },
      date: {
        content: 'September 8th, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-2.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'We start a new promo',
        type: 'heading',
      },
      description: {
        content: 'We are going to start a new promo this week. Don\'t miss out your...',
        type: 'text',
      },
      date: {
        content: 'September 6th, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-3.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'ShinyHouse provides freehouse cleaning for cancer patients',
        type: 'heading',
      },
      description: {
        content: 'October’s pink campaign has achieved its awareness goal…',
        type: 'text',
      },
      date: {
        content: 'September 4th, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-4.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'ShinyHouse 2017 Growth Summit: A look behind the scenes',
        type: 'heading',
      },
      description: {
        content: 'There are many things we pride ourselves here, at ShinyHouse. ',
        type: 'text',
      },
      date: {
        content: 'September 1st, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-5.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Give the gift of ShinyHouse for the holidays',
        type: 'heading',
      },
      description: {
        content: 'Enjoy a great opportunity to give a special gift to your loved one...',
        type: 'text',
      },
      date: {
        content: 'August 15th, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-6.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Chicago team wins the national ‘Team of the Year’ honor from ShinyHouse',
        type: 'heading',
      },
      description: {
        content: 'Listen to Rebecca Lopez, who works at ShinyHouse from the…',
        type: 'text',
      },
      date: {
        content: 'August 1st, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-7.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'New York worker is named “Manager of the Year” by ShinyHouse',
        type: 'heading',
      },
      description: {
        content: 'In three short years with ShinyHouse, Veronica Madera… ',
        type: 'text',
      },
      date: {
        content: 'July 21st, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-8.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Cleaners of Chicago win Top National Award',
        type: 'heading',
      },
      description: {
        content: 'As a Franchise of the Year, ShinyHouse of Chicago received… ',
        type: 'text',
      },
      date: {
        content: 'July 14th, 2017',
        type: 'caption',
        brightness: 30,
      },
      picture: {
        src: 'img-9.png',
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
        textValue: 'Continue Reading',
        type: 'link',
      },
    },
  ],
  title: {
    content: 'News',
    type: 'blockTitle',
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
    textValue: 'Show more',
    type: 'secondary',
    size: 'md',
  },
  background: {
    type: 'color',
    color: '#fff',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
