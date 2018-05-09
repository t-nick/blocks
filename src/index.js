import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#f5f9fa',
  },
  contacts: [
    {
      title: {
        content: 'Head office in London',
        type: 'heading',
      },
      address: {
        content: 'Level 17, Dashwood House<br>London EC2M 1QS ',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:2221111111">(222) 111 11 11</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
        resourceRef: 'back1.png',
      },
    },
    {
      title: {
        content: 'Vienna office ',
        type: 'heading',
      },
      address: {
        content: 'Kaerntner Ring 5-7<br>1010 Vienna',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:2221111111">(222) 111 11 11</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
        resourceRef: 'back2.png',
      },
    },
    {
      title: {
        content: 'Amsterdam office',
        type: 'heading',
      },
      address: {
        content: 'Keizersgracht 62-64<br>1015 CS Amsterdam',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:2221111111">(222) 111 11 11</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
        resourceRef: 'back3.png',
      },
    },
  ],
  title: {
    content: 'CONTACTS',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Feel free to contact us for any business, media, or personal inquiries:',
    type: 'subtitle',
  },
  'button-1': {
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
    textValue: 'Request a qoute',
    type: 'primary',
  },
  'button-2': {
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
    content: 'eget est egestas',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Contacts description', type: 'checkbox'},
  image: {defaultValue: true, label: 'Location photo', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Location title', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
