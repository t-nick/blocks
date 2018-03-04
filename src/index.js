import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Stunt Coordination and Cinematography',
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
          'We have everything you need for your new film or any other project. We offer a picturesque location, state of the art aircraft, professional skydivers, all the needed skydiving equipment, and aerial cinematography.',
        type: 'text',
      },
      picture: {
        resourceRef: 'service-1.png',
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
    {
      title: {
        content: 'Service 2',
        type: 'heading',
      },
      description: {
        content: 'On filming projects, we work back-to-back with Joe Jennings, a \ntwo-time winner of the Emmy Award for cinematography and XGames champion. Joe’s work includes Charlie’s Angels, Air Force One, Triple XXX, San Andreas, Point Break, and more as well as many thousands of television and commercial projects. Joe was drawn to SkydiveBirds for its unparalleled landscape in Chicago, and he’s been filming here ever since.',
        type: 'text',
      },
      picture: {
        resourceRef: 'service-2.png',
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
  heading: {defaultValue: false, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
