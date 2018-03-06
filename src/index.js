import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: [
    {
      title: {
        content: 'Samsung',
        type: 'heading',
      },
      desc: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      picture: {
        src: 'robot.svg',
        alt: 'Robot',
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
      title: {
        content: 'Ford',
        type: 'heading',
      },
      desc: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      picture: {
        src: 'camera.svg',
        alt: 'Camera',
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
      title: {
        content: 'Medical Family',
        type: 'heading',
      },
      desc: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      picture: {
        src: 'eye.svg',
        alt: 'Eye',
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
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
        type: 'text',
      },
      picture: {
        src: 'doughnut.svg',
        alt: 'Doughnut',
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
    content: 'There are advances being made in science and technology everyday, and a good example<br />of this is the LCD monitor. LCD monitors have several benefits over the old chunky<br />computer monitors that most users are familiar with. Old computer monitors,<br />take up quite a bit of desktop space.',
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
    textValue: 'Medium button',
    type: 'secondary',
  },
  'top-caption': {
    content: 'vitae sapien ut libero',
    type: 'text',
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
