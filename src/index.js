import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'background.png',
  },
  title: {
    content: 'Experienced skydivers',
    type: 'blockTitle',
  },
  heading: {
    content: 'Come fly with us!',
    type: 'heading',
  },
  subheading: {
    content: 'At SkydiveBirds club, we appreciate our dedicated fun jumper community. We welcome experienced skydivers of all skill levels and ages!',
    type: 'subheading',
    brightness: 20,
  },
  text: {
    content: 'Our dropzone is located near Chicago. We are proud of our spacious facility and are passionate about what we do here. Our team of professional skydiving instructors and support staff are specially trained to work with the first-time tandem skydivers so you have nothing to worry about.',
    type: 'subheading',
    brightness: 20,
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox'},
}

export default ExtendedWireframe
