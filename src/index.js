import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  contacts: [
    {
      title: {
        content: 'Location Name',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927 Port Yasmeenland, PY 20061',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:8001234567">(800) 123 45 67</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contact_img-1.png',
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'Location Name',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927 Port Yasmeenland, PY 20061',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:8001234567">(800) 123 45 67</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contact_img-2.png',
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'Location Name',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927 Port Yasmeenland, PY 20061',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:8001234567">(800) 123 45 67</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contact_img-3.png',
        alt: 'Location illustration photo',
      },
    },
  ],
  title: {
    content: 'Contacts',
    type: 'blockTitle',
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
    textValue: 'More Info',
    type: 'secondary-alt',
  },
  background: {
    type: 'gradient',
    gradient: {
      angle: -90,
      firstColor: '#536bb5',
      secondColor: '#5784b6',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
