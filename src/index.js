import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Film production',
    type: 'blockTitle',
  },
  text: {
    content: 'SkydiveBirds and its stunt crew have designed and organized some of the most freakish skydiving stunts from freefalling cars, skydiving from one plane to another, parachutes on fire, hidden rigs, and “chuteless” jumps!<br>If you’re searching for the exceptional way to promote your product or have a proficient team working on your film production, then you are in the right place! The SkydiveBirds Film Office can assist you with your film production needs.',
    type: 'text',
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
    textValue: 'More about film production',
    type: 'secondary',
    size: 'md',
  },
  picture: {
    resourceRef: 'img.jpg',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
