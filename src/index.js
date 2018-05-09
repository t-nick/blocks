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
      cover: '50% 50%',
    },
    resourceRef: 'background-img.png',
  },
  products: [
    {
      title: {
        content: 'Tandem flight - 7000 ft',
        type: 'heading',
      },
      price: {
        content: '-$49',
        type: 'headingLg',
      },
      body: {
        content: 'Refer a friend and get up to $49 off discount on your next jump.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Birthday Discount',
        type: 'heading',
      },
      price: {
        content: '-20%',
        type: 'headingLg',
      },
      body: {
        content: 'Book a flight on your birthday and get 20% off the regular price.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Student Discount',
        type: 'heading',
      },
      price: {
        content: '-15%',
        type: 'headingLg',
      },
      body: {
        content: 'Show your valid student card and get an extra 15% off discount.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'SPECIAL OFFERS',
    type: 'blockTitle',
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
  'top-caption': {
    content: 'vitae sapien ut libero',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  icon: {defaultValue: false, label: 'Product icon', type: 'checkbox'},
  price: {defaultValue: true, label: 'Product price', type: 'checkbox'},
  'price-info': {defaultValue: false, label: 'Price additional info', type: 'checkbox'},
  body: {defaultValue: true, label: 'Product details', type: 'checkbox'},
  'product-button': {defaultValue: false, label: 'Product button', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
