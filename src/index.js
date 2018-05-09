import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#ffffff',
  },
  title: {
    content: '- Partners -',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
    type: 'subtitle',
  },
  partners: [
    {
      ...Component.defaultContent.partners[0],
      desc: {
        content:
          'O my friend -- but it is too much for my strength -- I sink under the weight of the splendour of these visions!',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'logo_1.png',
          alt: 'Windfall logo',
          width: 180,
          height: 76,
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.partners[0],
      desc: {
        content:
          'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'logo_2.png',
          alt: 'Windfall logo',
          width: 180,
          height: 76,
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.partners[0],
      desc: {
        content:
          'I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'logo_3.png',
          alt: 'Windfall logo',
          width: 180,
          height: 76,
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.partners[0],
      desc: {
        content:
          'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'logo_4.png',
          alt: 'Windfall logo',
          width: 180,
          height: 76,
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
        textValue: 'Learn more',
        type: 'link',
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
    textValue: 'All Questions',
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
}

export default ExtendedWireframe
