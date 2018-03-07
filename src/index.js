import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import options from './options.json'

const {
  enhancers: {
    withProps,
  },
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'gradient',
    gradient: {
      angle: -45,
      firstColor: '#5052b5',
      secondColor: '#598fb7',
    },
  },
  partners: [
    {
      desc: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      picture: {
        resourceRef: 'partner01.png',
        alt: 'partner logo',
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
        textValue: 'Case study',
        type: 'link',
      },
    },
    {
      desc: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      picture: {
        resourceRef: 'partner02.png',
        alt: 'partner logo',
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
        textValue: 'Case study',
        type: 'link',
      },
    },
    {
      desc: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      picture: {
        resourceRef: 'partner03.png',
        alt: 'partner logo',
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
        textValue: 'Case study',
        type: 'link',
      },
    },
  ],
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Every season, there’s always a new must-have (or at least must try) beauty product that comes out — the newest color palette in make-up, the latest in skin care, new scents, etc.',
    type: 'subtitle',
  },
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
    textValue: 'View All',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  logo: {
    children: [
      {id: 'image', label: 'Image'},
      {id: 'text', label: 'Text'},
    ],
    defaultValue: 'image',
    style: 'column',
    name: 'Logo',
    type: 'radio-button-group',
  },
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  body: {defaultValue: true, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: true, label: 'Partner link', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
