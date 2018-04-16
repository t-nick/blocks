import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: 'jack-kaminski-129845-unsplash.jpg',
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        ...Component.defaultContent.services[1].picture,
        resourceRef: 'julien-pianetti-230463-unsplash.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true},
}

export default ExtendedWireframe
