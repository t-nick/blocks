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
    color: 'var(--ui-light-accent-color)',
  },
  title: {
    content: 'Speaking',
    type: 'blockTitle',
  },
  text: {
    content:
      'Roy Hale shares the best practices he uses \ndaily as an expert speaker, from marketing and \nservice to training and recruiting. He recognizes that \nthe real change starts from inside, so he is glad \nto discuss such topics like personal development, \ngoal-setting, and limiting beliefs, but never \nforgets about practical strategies that will \nimmediately touch his audience.',
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
    textValue: 'About Roy as a speaker',
    type: 'secondary-alt',
    size: 'md',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
