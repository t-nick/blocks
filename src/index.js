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
    type: 'image',
    position: {
      type: 'cover',
      cover: '20% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Gift certificates',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'Searching for the exceptional gift? Our tandem skydiving gift certificate is the excellent way to feast life\'s special moments and achievements! Whatever your event, be it your birthday, anniversary, proposal, or whatever, SkydiveBirds is ready to make your special day the most memorable one!',
  },
  products: [
    {
      ...Component.defaultContent.products[0],
      title: {
        ...Component.defaultContent.products[0].title,
        content: 'Tandem flight - 7000 ft',
      },
      price: {
        ...Component.defaultContent.products[0].price,
        content: '$220',
      },
      body: {
        ...Component.defaultContent.products[0].body,
        content: '3 available features<br>10 requests per month<br>General support',
      },
      cta: {
        ...Component.defaultContent.products[0].cta,
        textValue: 'BUY NOW',
      },
    },
    {
      ...Component.defaultContent.products[1],
      title: {
        ...Component.defaultContent.products[1].title,
        content: 'Tandem flight - 10,000 ft',
      },
      price: {
        ...Component.defaultContent.products[1].price,
        content: '$300',
      },
      'price-info': {
        content: 'per month',
        type: 'caption',
      },
      body: {
        ...Component.defaultContent.products[1].body,
        content: '15 available features<br>200 requests per month<br>24/7 support',
      },
      cta: {
        ...Component.defaultContent.products[1].cta,
        textValue: 'BUY NOW',
      },
    },
    {
      ...Component.defaultContent.products[2],
      title: {
        ...Component.defaultContent.products[2].title,
        content: 'Tandem flight - 15,000 ft',
      },
      price: {
        ...Component.defaultContent.products[2].price,
        content: '$360',
      },
      'price-info': {
        content: 'per month',
        type: 'caption',
      },
      body: {
        ...Component.defaultContent.products[2].body,
        content: '30 available features<br>Unlimited requests<br>Personal consultations',
      },
      cta: {
        ...Component.defaultContent.products[2].cta,
        textValue: 'BUY NOW',
      },
    },
  ],
  button: {
    ...Component.defaultContent.button,
    textValue: 'View all sertificates',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  icon: {defaultValue: false, label: 'Product icon', type: 'hidden'},
  'price-info': {defaultValue: false, label: 'Price additional info', type: 'hidden'},
  body: {defaultValue: false, label: 'Product details', type: 'hidden'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
