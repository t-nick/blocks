import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-partners/src/options.json'
import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: [
    {
      ...Component.defaultContent.partners[0],
      desc: {
        content:
          'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'robot.svg',
          alt: 'robot',
          width: 100,
          height: 110,
        },
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
      ...Component.defaultContent.partners[1],
      desc: {
        content:
          'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'camera.svg',
          alt: 'camera',
          width: 103,
          height: 103,
        },
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
      ...Component.defaultContent.partners[2],
      desc: {
        content:
          'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'eye.svg',
          alt: 'eye',
          width: 114,
          height: 114,
        },
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
      ...Component.defaultContent.partners[3],
      desc: {
        content:
          'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'doughnut.svg',
          alt: 'doughnut',
          width: 114,
          height: 114,
        },
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
    content:
      'There are advances being made in science and technology everyday, and a good example<br />of this is the LCD monitor. LCD monitors have several benefits over the old chunky<br />computer monitors that most users are familiar with. Old computer monitors,<br />take up quite a bit of desktop space.',
    type: 'subtitle',
    color: 'dark-shade-color',
  },
  button: {
    ...Component.defaultContent.button,
    textValue: 'Medium button',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  logo: {
    children: [{id: 'image', label: 'Image'}, {id: 'text', label: 'Text'}],
    defaultValue: 'image',
    style: 'column',
    name: 'Logo',
    type: 'radio-button-group',
  },
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
