import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#1d1d1d',
  },
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'There are advances:',
    type: 'subtitle',
  },
  partners: [
    {
      logo: {
        image: {
          resourceRef: 'back1.png',
          width: 270,
          height: 140,
        },
      },
      title: {
        content: 'British Airways',
        type: 'heading',
      },
      desc: {
        content: 'Back in 1995, we started cooperation with this brand. Samsung became our main supplier of high-quality tech products. Today, Samsung is our main partner who supports each initiative and actively participates in company development.',
        type: 'text',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'back2.png',
          width: 270,
          height: 140,
        },
      },
      title: {
        content: 'British Airways',
        type: 'heading',
      },
      desc: {
        content: 'British Airways (BA) is the largest airline in the United Kingdom based on fleet size, or the second largest, behind easyJet, when measured by passengers carried. The airline is based in Waterside near its main hub at London Heathrow Airport. In January 2011',
        type: 'text',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'back3.png',
          width: 270,
          height: 140,
        },
      },
      title: {
        content: 'British Airways',
        type: 'heading',
      },
      desc: {
        content: 'British Airways (BA) is the largest airline in the United Kingdom based on fleet size, or the second largest, behind easyJet, when measured by passengers carried. The airline is based in Waterside near its main hub at London Heathrow Airport. In January 2011',
        type: 'text',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'back4.png',
          width: 270,
          height: 140,
        },
      },
      title: {
        content: 'British Airways',
        type: 'heading',
      },
      desc: {
        content: 'British Airways (BA) is the largest airline in the United Kingdom based on fleet size, or the second largest, behind easyJet, when measured by passengers carried. The airline is based in Waterside near its main hub at London Heathrow Airport. In January 2011',
        type: 'text',
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
        textValue: 'Partner’s website',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: true, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: true, label: 'Partner link', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
