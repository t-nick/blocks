import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  subtitle: {
    content: 'Feel free to contact me with any kitchen remodeling inquiries',
    type: 'subtitle',
  },
  contacts: [
    {
      title: {
        ...Component.defaultContent.contacts[0].title,
      },
      address: {
        ...Component.defaultContent.contacts[0].address,
      },
      phone: {
        content: '<a href="tel:+12221111111">+1(222) 111 11 11</a>',
        type: 'text',
      },
      email: {
        content: '<a href="quentin.loboo@a.weblium.com">quentin.loboo@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
        src: 'img-map.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Contacts description', type: 'checkbox'},
}

export default ExtendedWireframe
