import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-pricing/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-pricing/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#f7f7f7',
  },
  products: [
    {
      title: {
        content: 'Basic',
        type: 'heading',
      },
      price: {
        content: 'Free',
        type: 'headingLg',
      },
      'price-info': {
        content: 'For all period',
        type: 'caption',
      },
      body: {
        content: '100 Max Connections<br>Unlimited Channels<br>200k Messages / Day',
        type: 'text',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 20 20"><path d="m 6.6864849,0.03124999 c -3.6624893,0 -6.63570365,2.96589371 -6.63570365,6.61514391 0,3.6492501 2.97321435,6.6132171 6.63570365,6.6132171 3.6624891,0 6.6357031,-2.963967 6.6357031,-6.6132171 0,-3.6492502 -2.973214,-6.61514391 -6.6357031,-6.61514391 z m 0,0.47388626 c 3.4037961,0 6.1585381,2.74704945 6.1585381,6.14125765 0,3.3942091 -2.754742,6.1393321 -6.1585381,6.1393321 -3.4037955,0 -6.15853817,-2.745123 -6.15853817,-6.1393321 0,-3.3942082 2.75474267,-6.14125765 6.15853817,-6.14125765 z"/></svg>',
        fill: 'light-accent-color',
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
        textValue: 'Book a Class',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Semi',
        type: 'heading',
      },
      price: {
        content: '$50',
        type: 'headingLg',
      },
      'price-info': {
        content: 'per month',
        type: 'caption',
      },
      body: {
        content: '100 Max Connections<br>Unlimited Channels<br>200k Messages / Day',
        type: 'text',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 20 20"><path d="M 3.271485,0 C 1.463163,0 0,1.46121 0,3.26953 v 6.76367 c 0,1.80833 1.463163,3.27149 3.271485,3.27149 h 6.781251 c 1.80832,0 3.27148,-1.46316 3.27148,-3.27149 V 3.26953 C 13.324216,1.46121 11.861056,0 10.052736,0 Z m 0,0.46094 h 6.781251 c 1.56021,0 2.80859,1.24838 2.80859,2.80859 v 6.76367 c 0,1.56021 -1.24838,2.8086 -2.80859,2.8086 H 3.271485 c -1.56021,0 -2.810547,-1.24839 -2.810547,-2.8086 V 3.26953 c 0,-1.56021 1.250337,-2.80859 2.810547,-2.80859 z"/></svg>',
        fill: 'light-accent-color',
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
        textValue: 'Book a Class',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Pro',
        type: 'heading',
      },
      price: {
        content: '$100',
        type: 'headingLg',
      },
      'price-info': {
        content: 'per month',
        type: 'caption',
      },
      body: {
        content: '100 Max Connections<br>Unlimited Channels<br>200k Messages / Day',
        type: 'text',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 20 20"><path d="M 4.47373,0.0099 C 3.68957,0.0252 3.37092,0.41453 3.1378,0.67005 l -0.0176,0.0176 -2.85547,5.02344 -0.002,0.004 C -0.11246,6.453 -0.06462,7.2612 0.27273,7.8108 l 2.98242,4.99414 0.0137,0.0156 c 0.26218,0.29887 0.4882,0.46879 0.70117,0.5586 0.21148,0.0892 0.39964,0.0904 0.54101,0.0879 h 5.49024 0.0117 c 0.45939,-0.0442 0.89397,-0.085 1.41992,-0.67774 l 0.0156,-0.0195 2.77735,-4.91211 0.004,-0.0117 c 0.0935,-0.22861 0.23213,-0.47086 0.27344,-0.80859 0.0413,-0.33773 -0.0232,-0.74921 -0.27539,-1.3125 l -0.004,-0.008 -2.71484,-5.05664 -0.0195,-0.0195 C 11.1198,0.22723 10.63166,-0.06065 10.03056,0.01185 l 0.0273,-0.002 H 4.47583 Z m 5.61133,0.45898 c 0.43294,-0.0522 0.74082,0.13094 1.05078,0.47461 l 2.66992,4.97266 c 0.22938,0.51304 0.26749,0.82569 0.23829,1.06445 -0.0288,0.23513 -0.13135,0.42331 -0.23633,0.67773 l -2.72852,4.82813 c -0.45573,0.51019 -0.63558,0.47374 -1.11133,0.51953 h -5.45898 -0.002 c -0.1336,0.002 -0.22835,0.002 -0.35743,-0.0527 -0.12804,-0.054 -0.29956,-0.17296 -0.52929,-0.4336 L 0.66704,7.57047 h -0.002 C 0.42719,7.18271 0.37021,6.52306 0.67504,5.92399 L 3.48754,0.97672 C 3.74608,0.69158 3.82836,0.48359 4.48169,0.47086 h 5.58984 z"/></svg>',
        fill: 'light-accent-color',
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
        textValue: 'Book a Class',
        type: 'primary',
      },
    },
  ],
  title: {
    content: 'Pricing',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Product icon', type: 'checkbox'},
  price: {defaultValue: true, label: 'Product price', type: 'checkbox'},
  'price-info': {defaultValue: true, label: 'Price additional info', type: 'checkbox'},
  body: {defaultValue: true, label: 'Product details', type: 'checkbox'},
  'product-button': {defaultValue: true, label: 'Product button', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
