import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  projects: [
    {
      id: 'e9ec34d7-3cc6-49f3-a9ad-6ea69f59409c',
      title: '15th Anniversary Party',
      subtitle: 'Monday, September 12, 2017 | 12:00 p.m. – 8:00 p.m.',
      text:
        'All of our tattoo and piercing masters here are masters indeed... Their artistic precision and perception are nothing short of perfect!',
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
      title: 'SF Half Marathon',
      subtitle: 'Friday, September 09, 2017 | 12:00 p.m. – 8:00 p.m.',
      text:
        'Our artists will make free small tattoos for San Francisco’s Half Marathon participants. Tattoos will be made by Roni and Kyle.',
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
    textValue: 'Show more',
    type: 'secondary',
    size: 'sm',
  },
  background: {
    type: 'color',
    color: '#151f30',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'project-category',
    type: 'checkbox',
    label: 'Project category',
    defaultValue: true,
  },
  {
    id: 'project-description',
    type: 'checkbox',
    label: 'Project description',
    defaultValue: true,
  },
  {
    id: 'block-button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
]

export default ExtendedWireframe
