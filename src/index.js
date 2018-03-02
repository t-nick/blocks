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
        content: 'Parachute jumping VS Bungee jumping',
        type: 'heading',
      },
      description: {
        content: "Extreme sports are not one size fits all. We like skydiving for so many reasons and think it's the...",
        type: 'text',
      },
      category: {
        content: 'Mike Skydiver',
        type: 'caption',
      },
      date: {
        content: 'September 8th, 2017 ',
        type: 'caption',
      },
      picture: {
        resourceRef: 'block_1.jpg',
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
        content: 'How to choose skydiving clothing',
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
        resourceRef: 'block_2.jpg',
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
  title: {
    content: 'related posts',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false},
}

export default ExtendedWireframe
