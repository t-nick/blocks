import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  image: {
    ...Component.defaultContent.image,
    resourceRef: 'bg.jpg',
  },
  text: {
    ...Component.defaultContent.text,
    content: 'Acrozz Logistics is a leading provider of supply chain management services and technology-enabled transportation, delivered on an exclusive technology platform, serving the logistics and transportation needs of its customers. Acrozz manages a web-based technology platform that collects and examines data from its network of transportation providers to serve its clients\' shipping and freight management needs. Acrozz provides logistics and transportation services for clients across a wide variety of industries, such as manufacturing, construction, consumer products, and retail.',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
}

export default ExtendedWireframe
