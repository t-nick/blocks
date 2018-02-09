import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: 'Teachers',
  subtitle: 'dasda',
  team: [
    {
      id: '06567442-178b-46ab-a822-661218143093',
      name: 'Alberta Mitchell',
      position: 'Hatha, Yoga Basics',
      description:
        'Alberta first got acquainted with yoga at the age of 18. At first she was primarily interested in the physical side of the practice. But gradually she became more conscious how yoga effects her. Now she is an experienced teacher.',
      picture: {
        resourceRef: 'item-1.png',
        alt: 'Alberta Mitchell photo',
      },
      more: {
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
      email: '<a href="mailto:shimmer@gmail.com">shimmer@gmail.com</a>',
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: '30px',
        },
      },
    },
    {
      id: 'd7b368a3-75c8-4039-80ef-15c783140026',
      name: 'Lillie Fleming',
      position: 'Vinyasa, Yin',
      description:
        'Lillie is the soul of our team. Her Yoga classes are focused on moving with the right breath. The breath is the basis. She is a very confident teacher, but her smile is infectious. She is committed to helping clients find their mind and body balance.',
      picture: {
        resourceRef: 'item-2.png',
        alt: 'Ann Maisner photo',
      },
      more: {
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
      email: '<a href="mailto:maisner@gmail.com">maisner@gmail.com</a>',
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: '30px',
        },
      },
    },
    {
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29db',
      name: 'Peter Alvarado',
      position: 'Ashtanga Led, Meditation',
      description:
        'Peter started his yoga practice at an early age. His older sister was his first teacher. They practiced Meditation yoga from books they could ever find. Today Peter is recognized as one of the world\'s leading yoga practitioners and instructors.',
      picture: {
        resourceRef: 'item-3.png',
        alt: 'Tomas Abbar photo',
      },
      more: {
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
      email: '<a href="mailto:abbar@gmail.com">abbar@gmail.com</a>',
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: '30px',
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'member-desc': {defaultValue: true, label: 'Team member bio', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Team description', type: 'checkbox'},
}

export default ExtendedWireframe
