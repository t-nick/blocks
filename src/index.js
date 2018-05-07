import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-careers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-careers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Careers',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Every season, there’s always a new must-have (or at least must try) beauty product that comes out — the newest color palette in make-up, the latest in skin care, new scents, etc.',
    type: 'subtitle',
  },
  background: {
    type: 'color',
    color: '#f7f7f7',
  },
  items: [
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80" x="0px" y="0px"><title>10</title><g data-name="Group"><path data-name="Compound Path" d="M50,10.83A39.17,39.17,0,1,0,89.17,50,39.22,39.22,0,0,0,50,10.83Zm0,76.34a36.94,36.94,0,0,1-20.22-6l9.59-5.54a4.58,4.58,0,0,0,2.24-4v-4.3a1,1,0,0,0-.19-.59,26.49,26.49,0,0,1-4.1-9,1,1,0,0,0-.33-.54,4.07,4.07,0,0,1-1.44-3.15V49a4.14,4.14,0,0,1,1-2.67,1,1,0,0,0,.24-.65V41.77a1,1,0,0,0,0-.11A10.9,10.9,0,0,1,39,34.14C41.3,31.4,45.05,30,50.19,30s8.89,1.39,11.16,4.13a10.85,10.85,0,0,1,2.28,7.57s0,.07,0,.11v3.83a1,1,0,0,0,.24.65,4.14,4.14,0,0,1,1,2.67V54.1a4,4,0,0,1-2.22,3.64,1,1,0,0,0-.53.6,29,29,0,0,1-3.47,7.23c-.29.43-.58.84-.86,1.19a1,1,0,0,0-.21.61v4.4a4.54,4.54,0,0,0,2.38,4l10.2,5.4A36.94,36.94,0,0,1,50,87.17Zm22-7.23L60.87,74.06a2.55,2.55,0,0,1-1.32-2.28V67.71c.24-.32.49-.67.73-1a30.87,30.87,0,0,0,3.58-7.33,6,6,0,0,0,3-5.24V49a6.14,6.14,0,0,0-1.21-3.67V41.86a13,13,0,0,0-2.73-9C60.22,29.65,55.95,28,50.19,28s-10,1.63-12.7,4.85a12.82,12.82,0,0,0-2.74,9v3.47A6.14,6.14,0,0,0,33.54,49V54.1a6.08,6.08,0,0,0,1.9,4.46,28.28,28.28,0,0,0,4.17,9.12v4a2.57,2.57,0,0,1-1.24,2.24L28,79.91a37.17,37.17,0,1,1,44,0Z"/></g></svg>',
        fill: 'brand-color',
      },
      heading: {
        content: 'Product Designer',
        type: 'heading',
      },
      employment: {
        content: 'Full time',
        type: 'text',
      },
      location: {
        content: 'New York',
        type: 'text',
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
        type: 'link',
        textValue: 'More about this vacancy',
      },
    },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80" x="0px" y="0px"><g data-name="Group"><path data-name="Compound Path" d="M50,10.83A39.17,39.17,0,1,0,89.17,50,39.22,39.22,0,0,0,50,10.83Zm0,76.34a36.94,36.94,0,0,1-20.22-6l9.59-5.54a4.58,4.58,0,0,0,2.24-4v-4.3a1,1,0,0,0-.19-.59,26.49,26.49,0,0,1-4.1-9,1,1,0,0,0-.33-.54,4.07,4.07,0,0,1-1.44-3.15V49a4.14,4.14,0,0,1,1-2.67,1,1,0,0,0,.24-.65V41.77a1,1,0,0,0,0-.11A10.9,10.9,0,0,1,39,34.14C41.3,31.4,45.05,30,50.19,30s8.89,1.39,11.16,4.13a10.85,10.85,0,0,1,2.28,7.57s0,.07,0,.11v3.83a1,1,0,0,0,.24.65,4.14,4.14,0,0,1,1,2.67V54.1a4,4,0,0,1-2.22,3.64,1,1,0,0,0-.53.6,29,29,0,0,1-3.47,7.23c-.29.43-.58.84-.86,1.19a1,1,0,0,0-.21.61v4.4a4.54,4.54,0,0,0,2.38,4l10.2,5.4A36.94,36.94,0,0,1,50,87.17Zm22-7.23L60.87,74.06a2.55,2.55,0,0,1-1.32-2.28V67.71c.24-.32.49-.67.73-1a30.87,30.87,0,0,0,3.58-7.33,6,6,0,0,0,3-5.24V49a6.14,6.14,0,0,0-1.21-3.67V41.86a13,13,0,0,0-2.73-9C60.22,29.65,55.95,28,50.19,28s-10,1.63-12.7,4.85a12.82,12.82,0,0,0-2.74,9v3.47A6.14,6.14,0,0,0,33.54,49V54.1a6.08,6.08,0,0,0,1.9,4.46,28.28,28.28,0,0,0,4.17,9.12v4a2.57,2.57,0,0,1-1.24,2.24L28,79.91a37.17,37.17,0,1,1,44,0Z"/></g></svg>',
        fill: 'brand-color',
      },
      heading: {
        content: 'UX Designer',
        type: 'heading',
      },
      employment: {
        content: 'Remote work',
        type: 'text',
      },
      location: {
        content: 'New York',
        type: 'text',
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
        type: 'link',
        textValue: 'More about this vacancy',
      },
    },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80" x="0px" y="0px" width="70px" height="70px"><g data-name="Group"><path data-name="Compound Path" d="M50,10.83A39.17,39.17,0,1,0,89.17,50,39.22,39.22,0,0,0,50,10.83Zm0,76.34a36.94,36.94,0,0,1-20.22-6l9.59-5.54a4.58,4.58,0,0,0,2.24-4v-4.3a1,1,0,0,0-.19-.59,26.49,26.49,0,0,1-4.1-9,1,1,0,0,0-.33-.54,4.07,4.07,0,0,1-1.44-3.15V49a4.14,4.14,0,0,1,1-2.67,1,1,0,0,0,.24-.65V41.77a1,1,0,0,0,0-.11A10.9,10.9,0,0,1,39,34.14C41.3,31.4,45.05,30,50.19,30s8.89,1.39,11.16,4.13a10.85,10.85,0,0,1,2.28,7.57s0,.07,0,.11v3.83a1,1,0,0,0,.24.65,4.14,4.14,0,0,1,1,2.67V54.1a4,4,0,0,1-2.22,3.64,1,1,0,0,0-.53.6,29,29,0,0,1-3.47,7.23c-.29.43-.58.84-.86,1.19a1,1,0,0,0-.21.61v4.4a4.54,4.54,0,0,0,2.38,4l10.2,5.4A36.94,36.94,0,0,1,50,87.17Zm22-7.23L60.87,74.06a2.55,2.55,0,0,1-1.32-2.28V67.71c.24-.32.49-.67.73-1a30.87,30.87,0,0,0,3.58-7.33,6,6,0,0,0,3-5.24V49a6.14,6.14,0,0,0-1.21-3.67V41.86a13,13,0,0,0-2.73-9C60.22,29.65,55.95,28,50.19,28s-10,1.63-12.7,4.85a12.82,12.82,0,0,0-2.74,9v3.47A6.14,6.14,0,0,0,33.54,49V54.1a6.08,6.08,0,0,0,1.9,4.46,28.28,28.28,0,0,0,4.17,9.12v4a2.57,2.57,0,0,1-1.24,2.24L28,79.91a37.17,37.17,0,1,1,44,0Z"/></g></svg>',
        fill: 'var(--ui-brand-color)',
      },
      heading: {
        content: 'Visual Designer',
        type: 'heading',
      },
      employment: {
        content: 'Full time',
        type: 'text',
      },
      location: {
        content: 'New York',
        type: 'text',
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
        type: 'link',
        textValue: 'More about this vacancy',
      },
    },
  ],
  button: {
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
    type: 'secondary',
    size: 'md',
    textValue: 'View All',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
