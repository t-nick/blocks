import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'As featured in',
    type: 'blockTitle',
  },
  partners: [
    {
      picture: {
        resourceRef: 'img-1.jpg',
        alt: 'BBC logo',
        size: {'min-width: 320px': 170, 'min-width: 992px': 170},
      },
      title: {
        content: 'BBC',
        type: 'heading',
      },
      desc: {
        content:
          'Back in 1995, we started cooperation with this brand. Samsung became our main supplier of high-quality tech products. Today, Samsung is our main partner who supports each initiative and actively participates in company development.',
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
      picture: {
        resourceRef: 'img-2.jpg',
        alt: 'NY logo',
        size: {'min-width: 320px': 170, 'min-width: 992px': 170},
      },
      title: {
        content: 'NY ',
        type: 'heading',
      },
      desc: {
        content:
          'The company that has always put reliability first. We started to work with Ford in 2002, and now this is one of the partners who’ve been with us for more than 15 years! We believe that this partnership is one of the achievements we can be proud of.',
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
      picture: {
        resourceRef: 'img-3.jpg',
        alt: 'NBC logo',
        size: {'min-width: 320px': 170, 'min-width: 992px': 170},
      },
      title: {
        content: 'NBC',
        type: 'heading',
      },
      desc: {
        content:
          'Health of our team members is a top priority for us. Therefore, we work with the best clinics only, like Medical Family. We entrust our health to them and we entrust our business as well.',
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
      picture: {
        resourceRef: 'img-4.jpg',
        alt: 'The HP logo',
        size: {'min-width: 320px': 170, 'min-width: 992px': 170},
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content:
          'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, starting workshops and seminars, and up to everyday meal for our team members.',
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
      picture: {
        resourceRef: 'img-5.jpg',
        alt: 'RD logo',
        size: {'min-width: 320px': 170, 'min-width: 992px': 170},
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content:
          'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, starting workshops and seminars, and up to everyday meal for our team members.',
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
      picture: {
        resourceRef: 'img-6.jpg',
        alt: 'The Gardian logo',
        size: {'min-width: 320px': 170, 'min-width: 992px': 170},
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content:
          'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, starting workshops and seminars, and up to everyday meal for our team members.',
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
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: false, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: false, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: false, label: 'Partner link', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
