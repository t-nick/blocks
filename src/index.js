import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: 'Our Menu',
  services: [
    {
      id: '900aa334-14f2-4c05-b078-78099a5725e5',
      title: 'Mexican Burger\n $12.50',
      description:
        'Chicken beef cooked over charcoal and onions on the grill, hot pepper, lettuce, tomatoes,double American cheddar cheese sauce.',
      picture: {
        resourceRef: 'item-1.png',
        alt: 'Mexican Burger photo',
      },
      link: {
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
        textValue: 'Order Online',
        type: 'link',
      },
    },
    {
      id: 'cfb2c56d-7708-4459-bdf2-6780f4ba62b9',
      title: 'Mini Burger\n $10.99',
      description:
        'Chicken beef cooked over charcoal and onions on the grill, hot pepper, lettuce, tomatoes,double American cheddar cheese sauce.',
      picture: {
        resourceRef: 'item-2.png',
        alt: 'Mini Burger photo',
      },
      link: {
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
        textValue: 'Order Online',
        type: 'link',
      },
    },
    {
      id: 'eea21546-b56e-406b-8cba-18a5a5ec1820',
      title: 'Classic Burger\n $13.90',
      description:
        'Chicken beef cooked over charcoal and onions on the grill, hot pepper, lettuce, tomatoes,double American cheddar cheese sauce.',
      picture: {
        resourceRef: 'item-3.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Order Online',
        type: 'link',
      },
    },
    {
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: 'California Burger\n $17.99',
      description:
        'Chicken beef cooked over charcoal and onions on the grill, hot pepper, lettuce, tomatoes,double American cheddar cheese sauce.',
      picture: {
        resourceRef: 'item-4.png',
        alt: 'California Burger photo',
      },
      link: {
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
        textValue: 'Order Online',
        type: 'link',
      },
    },
    {
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359d',
      title: 'Double Burger\n $15.90',
      description:
        'Chicken beef cooked over charcoal and onions on the grill, hot pepper, lettuce, tomatoes,double American cheddar cheese sauce.',
      picture: {
        resourceRef: 'item-5.png',
        alt: 'Double Burger photo',
      },
      link: {
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
        textValue: 'Order Online',
        type: 'link',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
