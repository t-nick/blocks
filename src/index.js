import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Courses',
    type: 'blockTitle',
  },
  services: [
    {
      title: {
        content: 'Service 1',
        type: 'heading',
      },
      description: {
        content:
          "Whatever you want to change in your life and business, I can assist you to deal with this process. Working together we will determine what matters to you most, what has been restricting you, and we'll develop a personalized plan to help you grow.",
        type: 'text',
      },
      picture: {
        resourceRef: 'services_img.png',
        alt: 'Service illustration photo',
      },
      link: {
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
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
