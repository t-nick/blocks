import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: {
    background: {
      'nth-child': [
        ['n', {
          color: 'light-shade-color',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        title: {
          content: 'Samsung',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Samsung.</span> It doesn’t need a lot of words. High-quality tech products with superior design.',
          type: 'text',
        },
        logo: {
          image: {
            resourceRef: 'partners-img-1.png',
            alt: 'Partners logo',
            width: 151,
            height: 117,
          },
        },
        picture: {
          alt: 'Samsung logo',
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
          content: '<span style="font-weight: bold">Ford.</span> This is our moving force, literally! 100% reliable and credible.',
          type: 'text',
        },
        logo: {
          image: {
            resourceRef: 'partners-img-2.png',
            alt: 'Partners logo',
            width: 135,
            height: 93,
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
        title: {
          content: 'Medical Family',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Medical Family.</span> Ensuring good health and medical care for our team for 5 years.',
          type: 'text',
        },
        logo: {
          image: {
            resourceRef: 'partners-img-3.png',
            alt: 'Partners logo',
            width: 113,
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
        title: {
          content: 'Coffee Break Now',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Coffee Break Now.</span> We love their delicious coffee and flavored cakes!',
          type: 'text',
        },
        logo: {
          image: {
            resourceRef: 'partners-img-4.png',
            alt: 'Partners logo',
            width: 146,
            height: 107,
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
  },
  button: {
    textValue: 'Medium Button',
    type: 'secondary',
  },
  background: {
    type: 'color',
    color: '#f3f3f6',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
}

export default ExtendedWireframe
