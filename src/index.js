import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  title: 'News',
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'Tattoo Prodigies 2',
      description: 'With so many exciting news happening the last year, we…',
      category: ' ',
      date: 'September 11, 2017',
      picture: {
        resourceRef: 'blog_3_news_img1.png',
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
      title: 'Tattoo Fest 2017',
      description: 'Tattoo Fest 2017 will be the most important industry event in SF this weekend.',
      category: ' ',
      date: 'September 08, 2017',
      picture: {
        resourceRef: 'blog_3_news_img2.png',
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
      title: 'Wedding Ring Tattoos',
      description:
        "Let's start with stating the fact, that the finger tattoos are totally a thing now.",
      category: ' ',
      date: 'September 06, 2017',
      picture: {
        resourceRef: 'blog_3_news_img3.png',
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
      id: 'fff4b459-6e4f-4645-901e-4c1b1dfhu451',
      title: 'Harden Walker Finishes His  25 Years <br> Long Career',
      description: 'Harden, an incredibly talented and passionate artist, has been…',
      category: ' ',
      date: 'September 4, 2017',
      picture: {
        resourceRef: 'blog_3_news_img4.png',
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
      id: 'aeruhj459-6e4f-4645-901e-4c1b1dfhu451',
      title: 'Welcome Our New Artist, Chris <br> Alcerro!',
      description: 'We are pleased to announce that we have a new tattoo artist at R & R.',
      category: ' ',
      date: 'September 01, 2017',
      picture: {
        resourceRef: 'blog_3_news_img5.png',
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
      id: 'aeruhj459-6e4f-4645-901e-4c1ghiedu451',
      title: 'Animal Ink: Exploring The World’s <br> Wildlife',
      description:
        'This new book is a feast for the eyes and is brimming with inspiration from some of...',
      category: ' ',
      date: 'August 06, 2017',
      picture: {
        resourceRef: 'blog_3_news_img6.png',
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
      id: '21a46d6e-0354-4a96-9af0-928ddfhdkr95',
      title: 'Cranial Visions Soft Cover  Edition',
      description: 'The book Cranial Visions is now also available in a Softcover Edition!',
      category: ' ',
      date: 'August 01, 2017',
      picture: {
        resourceRef: 'blog_3_news_img7.png',
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
      id: '2fktoe6e-0354-4a96-9af0-928ddae32095',
      title: 'Ink and Iron',
      description:
        'We just bid farewell to Jeff Ensminger, who took off into the sunset in his motorhome.',
      category: ' ',
      date: 'July 08, 2017',
      picture: {
        resourceRef: 'blog_3_news_img8.png',
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
      id: '2fktoe6e-0354-4a96-9af0-928ddae6482g',
      title: 'Some Travels and Guest Spot',
      description:
        'New update on travels and we have a guest spotter coming in! Jeff is getting ready to...',
      category: ' ',
      date: 'July 06, 2017',
      picture: {
        resourceRef: 'blog_3_news_img9.png',
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
    textValue: 'show more',
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
