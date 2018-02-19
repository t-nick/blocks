import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      title: {
        content: 'Initial consultation',
        type: 'heading',
      },
      description: {
        content: "After your first free session, I use the info you've given me about youself and your business, what's standing in your way, and what your business goals are.",
        type: 'text',
      },
    },
    {
      title: {
        content: 'Comprehensive assessment',
        type: 'heading',
      },
      description: {
        content: "During the in-depth conversation about the current condition of your business and your financial potential,I'll offer you tools to solve your causes of frustrations.",
        type: 'text',
      },
    },
    {
      title: {
        content: 'Getting results',
        type: 'heading',
      },
      description: {
        content: "Through my coaching, you'll improve your skills as an Entrepreneur and as a Manager, become the leader of your business, and achieve long-term results.",
        type: 'text',
      },
    },
  ],
  title: {
    content: 'How I work',
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
    textValue: 'Contact me',
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
  ...Component.modifierScheme,
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
