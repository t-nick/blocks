import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-pricing/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-pricing/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'Ultimate',
  },
  products: [
    {
      title: {
        content: 'Tandem flight - 7000 ft, Ultimate',
        type: 'heading',
      },
      price: {
        content: '$380',
        type: 'headingLg',
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
        textValue: 'Buy now',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Tandem flight - 10,000 ft, Ultimate',
        type: 'heading',
      },
      price: {
        content: '$460',
        type: 'headingLg',
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
        textValue: 'Buy now',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Tandem flight - 15,000 ft, Ultimate',
        type: 'heading',
      },
      price: {
        content: '$520',
        type: 'headingLg',
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
        textValue: 'Buy now',
        type: 'primary',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  icon: {defaultValue: false, label: 'Product icon', type: 'checkbox'},
  'price-info': {defaultValue: false, label: 'Price additional info', type: 'checkbox'},
  body: {defaultValue: false, label: 'Product details', type: 'checkbox'},
}

export default ExtendedWireframe
