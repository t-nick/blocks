import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: 'How it works',
  steps: [
    {
      id: '07a5468d-b105-4866-98a5-dcf2cf46db3a',
      title: 'Choose the service you need & book it',
      description:
        'Make an appointment with the help of our handy online booking form.',
    },
    {
      id: '12e39a62-f8f4-4bf5-b2a0-5d536eeecd27',
      title: 'We send our workers to your location',
      description:
        'Our professionals will come to your property on time to make the dirty work for you.',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3505',
      title: 'We meet your needs with care',
      description:
        'We guarantee you maximum satisfaction from service we provide.',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3515',
      title: 'Enjoy your free time and excellent result',
      description:
        'Our cleaners will do their best to deliver you a premium cleaning service!',
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'brand-color',
  },
  background: {
    type: 'color',
    color: '#fff',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Step main text', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Button', type: 'hidden'},
  heading: {defaultValue: true, label: 'Step title', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Step icon', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Process description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
