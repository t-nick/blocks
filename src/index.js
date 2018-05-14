import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  contacts: [
    ...Component.defaultContent,
    {
      ...Component.defaultContent.contacts[0],
      picture: {
        alt: 'Location illustration photo',
        resourceRef: 'img-map.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Contacts description', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
