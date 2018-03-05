import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'How it works',
    type: 'blockTitle',
  },
  steps: [
    {
      id: '07a5468d-b105-4866-98a5-dcf2cf46db3a',
      title: {
        content: 'Choose the service you need & book it',
        type: 'heading',
      },
      description: {
        content: 'Make an appointment with the help of our handy online booking form.',
        type: 'text',
      },
    },
    {
      id: '12e39a62-f8f4-4bf5-b2a0-5d536eeecd27',
      title: {
        content: 'We send our workers to your location',
        type: 'heading',
      },
      description: {
        content: 'Our professionals will come to your property on time to make the dirty work for you.',
        type: 'text',
      },
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3505',
      title: {
        content: 'We meet your needs with care',
        type: 'heading',
      },
      description: {
        content: 'We guarantee you maximum satisfaction from service we provide.',
        type: 'text',
      },
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3515',
      title: {
        content: 'Enjoy your free time and excellent result',
        type: 'heading',
      },
      description: {
        content: 'Our cleaners will do their best to deliver you a premium cleaning service!',
        type: 'text',
      },
    },
  ],
  background: {
    type: 'color',
    color: '#fff',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Process description', type: 'checkbox'},
}

export default ExtendedWireframe
