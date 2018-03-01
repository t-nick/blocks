import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'From the blog',
    type: 'blockTitle',
  },
  blog: [
    {
      title: {
        content: 'When can I skydive by myself?',
        type: 'heading',
      },
      description: {
        content: 'Once you\'ve had your first taste of skydiving, we bet you\'ll want to…',
        type: 'text',
      },
      category: {
        content: 'Mike Skydiver',
        type: 'caption',
      },
      date: {
        content: 'September 11th, 2017',
        type: 'caption',
      },
      picture: {
        resourceRef: 'blog_image_1.jpg',
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
        textValue: 'CONTINUE READING',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Parachute Jumping VS Bungee Jumping',
        type: 'heading',
      },
      description: {
        content: 'Extreme sports are not one size fits all. We like skydiving for so many…',
        type: 'text',
      },
      category: {
        content: 'Mike Skydiver',
        type: 'caption',
      },
      date: {
        content: 'September 8th, 2017',
        type: 'caption',
      },
      picture: {
        resourceRef: 'blog_image_2.jpg',
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
        textValue: 'CONTINUE READING',
        type: 'link',
      },
    },
    {
      title: {
        content: 'How to choose skydiving clothing?',
        type: 'heading',
      },
      description: {
        content: 'A big factor for skydiving is dressing for success! What you need to…',
        type: 'text',
      },
      category: {
        content: 'Mike Skydiver',
        type: 'caption',
      },
      date: {
        content: 'September 6th, 2017',
        type: 'caption',
      },
      picture: {
        resourceRef: 'blog_image_3.jpg',
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
        textValue: 'CONTINUE READING',
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
    textValue: 'Show more posts',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
