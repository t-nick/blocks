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
      id: '07a5468d-b105-4866-98a5-dcf2cf46db3a',
      title: '1.',
      description:
        'The cleaner will first attach the extension pole to the water pump.',
    },
    {
      id: '12e39a62-f8f4-4bf5-b2a0-5d536eeecd27',
      title: '2.',
      description:
        'Then the fluid will be delivered under the high pressure from a specific brush head attachment, which will be moved across the whole window surface to treat all the stains.',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3505',
      title: '3.',
      description:
        'After duplicating this process twice and using the brush itself to scrub off any remaining stains, the professional will let the water evaporate on its own. This will keep your window panes dirt- and dust-free for a longer time than any common cleaning methods that are used currently.',
    },
    {
      id: '3195f48d-96bc-a9d9-a9c5-71bb203f8405',
      title: '4.',
      description:
        'On your request, your windows may be washed from the inside by our specialist. He will use purified water and squeegees for this and will stay until the moment that all stains are completely removed.',
    },
  ],
  title: 'How it works',
  description:
    'We are guided by clear and simple cooperation with clients. Here’s how you can order our online products:',
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
    textValue: 'Learn more',
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
  background: {
    type: 'color',
    color: '#fff',
  },
}

ExtendedWireframe.modifierScheme = {
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
