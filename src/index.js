import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  contacts: [
    {
      title: {
        content: 'New York Office',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927 <br>Port Yasmeenland, NY 20061 ',
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
        src: 'image1.jpg',
      },
    },
    {
      title: {
        content: 'Los Angeles Office',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927<br>Port Yasmeenland, LA 20012',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:2221111111">(333) 222 22 22</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
        src: 'image2.jpg',
      },
    },
    {
      title: {
        content: 'Chicago office',
        type: 'heading',
      },
      address: {
        content: '3611 Silas Trail Suite 927<br>Port Yasmeenland, CH 20011',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:2221111111">(222) 555 11 44</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
        src: 'image3.jpg',
      },
    },
  ],
  subtitle: {
    content: 'Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id venenatis metus at tortorodio.',
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Contacts description', type: 'checkbox'},
  'top-caption': {defaultValue: true, label: 'Top caption', type: 'hidden'},
  'button-secondary': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
