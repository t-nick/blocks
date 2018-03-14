import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  steps: [
    {
      title: {
        content: 'Schedule an</br>appointment',
        type: 'heading',
      },
      description: {
        content: 'Choose the date and time that suits you.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Request your</br>service',
        type: 'heading',
      },
      description: {
        content: 'Specify the service you need for your project.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Choose an</br>electrician',
        type: 'heading',
      },
      description: {
        content: 'Select a highly trained & registered electrician.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Request a free</br>estimate',
        type: 'heading',
      },
      description: {
        content: 'We offer free estimates on any service.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'How to get started',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We are guided by clear and simple cooperation with clients. Here’s how you can order our online products:',
    type: 'subtitle',
  },
  'cta-1': {
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
    textValue: 'make an order',
    type: 'secondary',
  },
  'cta-2': {
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
    textValue: 'Learn more',
    type: 'link',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}


ExtendedWireframe.modifierScheme = {
  body: {defaultValue: true, label: 'Step main text', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Button', type: 'hidden'},
  heading: {defaultValue: true, label: 'Step title', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Step icon', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Process description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
