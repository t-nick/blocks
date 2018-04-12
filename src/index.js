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
      title: {
        content: 'OMS: Key to the Optimal Omnichannel Customer Experience (2017)',
        type: 'heading',
      },
      cta: {
        ...Component.defaultContent.services[0].cta,
        textValue: 'Download PDF File',
        type: 'secondary',
      },
    },
    {
      ...Component.defaultContent.services[1],
      title: {
        content: 'Top Business Drives for Integrated Logistics Outsourcing (2017)',
        type: 'heading',
      },
      cta: {
        ...Component.defaultContent.services[1].cta,
        textValue: 'Download PDF File',
        type: 'secondary',
      },
    },
    {
      title: {
        content: 'Cross-Docking <br/> Trends Report (2017)',
        type: 'heading',
      },
      text: {
        content: 'Multipurpose program that will perfectly suit online stores and online retail business. You can add up to 2000 items with a detailed description, characteristics, and photos. Also, the shopping cart, clients’ feedback, rating, and related items option are available.',
        type: 'text',
      },
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
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
