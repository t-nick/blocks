import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  image: {
    ...Component.defaultContent.image,
    src: 'bg.jpg',
  },
  text: {
    ...Component.defaultContent.text,
    content: 'Acrozz Logistics is a leading provider of supply chain management services and technology-enabled transportation, delivered on an exclusive technology platform, serving the logistics and transportation needs of its customers. Acrozz manages a web-based technology platform that collects and examines data from its network of transportation providers to serve its clients\' shipping and freight management needs. Acrozz provides logistics and transportation services for clients across a wide variety of industries, such as manufacturing, construction, consumer products, and retail.',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  image: {defaultValue: true, label: 'About company illustration', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Company description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
}

export default ExtendedWireframe
