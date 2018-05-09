import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-projects/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  projects: [
    {
      id: 'e9ec34d7-3cc6-49f3-a9ad-6ea69f59409c',
      title: 'Piercing Workshop 101',
      subtitle: 'Friday, October 09, 2017 | 12:00 p.m. – 8:00 p.m.',
      text:
        'Without a doubt, three and a half hours won’t be enough to capture all the new trends and old techniques an experienced tattoo or piercing master can share. But we’ll try to squeeze all the gist in this limited time frame of this workshop.',
      picture: {
        src: 'img-1.jpg',
        alt: 'Project 1',
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: 'New Trends in Tattooing',
      subtitle: 'Monday, October 12, 2017 | 12:00 p.m. – 8:00 p.m.',
      text:
        'Dating back centuries, the art and most essential techniques of tattoo masters have all stayed the same. Still, considering some new cutting-edge tools and graphics options that we have exposed in the last few years, we…',
      picture: {
        src: 'img-2.jpg',
        alt: 'Project 2',
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
        textValue: 'Learn more',
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
    textValue: 'all events',
    type: 'secondary',
    size: 'sm',
  },
  background: {
    type: 'color',
    color: '#0c1526',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'project-category': {defaultValue: true, label: 'Project category', type: 'checkbox'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}


export default ExtendedWireframe
