import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#f8f8f8',
  },
  title: {
    content: 'About me',
    type: 'blockTitle',
  },
  text: {
    content:
     'Hi, I\'m Roy Hale, a head coach at Roy Hale Business Coaching. If you are ready for changes, let’s build a profitable business. \n\nBuilding and running any business is not an easy task. It\'s rather expensive and it takes all your time and efforts. Hiring a business coach can help you create a more successful organization. \n\nLet me show you how I can develop a great strategy and help you achieve your dream of a profitable company.',
    type: 'text',
  },
  picture: {
    resourceRef: 'picture.png',
    alt: 'Roy Hale photo',
  },
  'button-1': {
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
    textValue: 'Know more about me',
    type: 'secondary-alt',
    size: 'md',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
