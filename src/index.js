import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Teacher Training',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Become a teacher or just expand your practice ',
    type: 'subtitlte',
  },
  text: {
    content: 'Based on the tradition of authentic ancestors, our program is aimed at bringing yoga back to its true home as an alive art, and as a comprehensive way to revival. We are highly experienced teachers who are committed to providing a clear and encouraging education while enabling you to reveal your true abilities and potential. ',
    type: 'text',
  },
  picture: {
    src: 'photo.jpg',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
}

export default ExtendedWireframe
