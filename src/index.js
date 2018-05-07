import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Contacts',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'When no fees are being charged at the exchange, it is possible for a trader (or bot) to trade back and forth with themselves.',
    type: 'subtitle',
  },
  contacts: [
    {
      title: {
        content: 'Head office Berlin',
        type: 'heading',
      },
      address: {
        content: '0500 Hagenes Haven Apt. 718',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:1 (222) 123-12-12">1 (222) 123-12-12</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:junius_price@raynor.biz">junius_price@raynor.biz</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contacts_01.jpg',
        alt: 'Location illustration photo',
      },

    },
    {
      title: {
        content: 'New York office',
        type: 'heading',
      },
      address: {
        content: '4946 Aglae Cliff Suite 302',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:1 (222) 123-12-12">1 (222) 123-12-12</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:clovis_rogahn@joy.us">clovis_rogahn@joy.us</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contacts_02.jpg',
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'London office',
        type: 'heading',
      },
      address: {
        content: '196 Erdman Causeway Apt. 829',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:1 (222) 123-12-12">1 (222) 123-12-12</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:fanny_denesik@yahoo.com">fanny_denesik@yahoo.com</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contacts_03.jpg',
        alt: 'Location illustration photo',
      },
    },
  ],
  'button-1': {
    ...Component.defaultContent['button-1'],
    textValue: 'Learn more',
    type: 'secondary',
    size: 'lg',
  },
  'button-2': {
    ...Component.defaultContent['button-2'],
    textValue: 'CONTACT US',
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Contacts description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
