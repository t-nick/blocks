import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services.items[0],
      title: {
        content: 'OMS: Key to the Optimal Omnichannel Customer Experience (2017)',
        type: 'heading',
      },
      cta: {
        ...Component.defaultContent.services.items[0].cta,
        textValue: 'Download PDF File',
        type: 'secondary',
      },
    },
    {
      ...Component.defaultContent.services.items[1],
      title: {
        content: 'Top Business Drives for Integrated Logistics Outsourcing (2017)',
        type: 'heading',
      },
      cta: {
        ...Component.defaultContent.services.items[1].cta,
        textValue: 'Download PDF File',
        type: 'secondary',
      },
    },
    {
      ...Component.defaultContent.services.items[1],
      title: {
        content: 'Cross-Docking <br/> Trends Report (2017)',
        type: 'heading',
      },
      cta: {
        ...Component.defaultContent.services.items[1].cta,
        textValue: 'Download PDF File',
        type: 'secondary',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    content: 'White Papers',
  },
  subtitle: {
    content: 'Our whitepaper series gives you valuable market intelligence on the state of today’s logistics industry. These research-based reports identify common practices, emerging trends and challenges in the industry. ',
    type: 'small',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Service description', type: 'checkbox'},
  'body-text': {defaultValue: false, label: 'Service main text', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
