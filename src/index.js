import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  contacts: [
    {
      title: {
        content: 'Location Name',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927<br>Port Yasmeenland, PY 20061 ',
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
        resourceRef: 'location-2.jpg',
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'Location Name',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927<br>Port Yasmeenland, PY 20061',
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
        resourceRef: 'location-1.jpg',
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'Location Name',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927<br>Port Yasmeenland, PY 20061',
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
        resourceRef: 'location-3.jpg',
        alt: 'Location illustration photo',
      },
    },
  ],
  title: {
    content: 'Contacts',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'The French Revolution constituted for the conscience of the dominant aristocratic class<br>a fall from innocence, and upturning of the natural chain of',
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
    textValue: 'Main button (L)',
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
}

ExtendedWireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Contacts description', type: 'checkbox'},
  image: {defaultValue: true, label: 'Location photo', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Location title', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
