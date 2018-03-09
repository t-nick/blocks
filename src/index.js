import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'State of the art Skydiving Aircraft',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'We have a fleet of 14-seat Cessna and 24-seat Twin Otter Caravans which are fully insured, safe, professionally maintained, and economic for motion picture projects. We also have such aircraft as load-lifting and A-Star copters, vintage planes Beech 18, DC-3, and more.',
    type: 'subtitle',
  },
  services: [
    {
      ...Component.defaultContent.services[0],
      title: {
        content: 'DeHavilland DHC-3 Otter',
        type: 'heading',
      },
      description: {
        content: 'May 20, 2009',
        type: 'text',
      },
      picture: {
        resourceRef: 'service-1.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[0],
      title: {
        content: 'Cessna 208 Caravan',
        type: 'heading',
      },
      description: {
        content: 'May 22, 2009',
        type: 'text',
      },
      picture: {
        resourceRef: 'service-2.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[0],
      title: {
        content: 'Cessna 182 Skylane',
        type: 'heading',
      },
      description: {
        content: 'May 23, 2009',
        type: 'text',
      },
      picture: {
        resourceRef: 'service-3.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[0],
      title: {
        content: 'Cessna 182 G',
        type: 'heading',
      },
      description: {
        content: 'May 23, 2009',
        type: 'text',
      },
      picture: {
        resourceRef: 'service-4.png',
        alt: 'Service illustration photo',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Services description', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
