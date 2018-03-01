import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Dropzone',
    type: 'blockTitle',
  },
  text: {
    content: 'We\'ve created a club to meet all your skydiving needs just 30 minutes from Chicago. This is really the best place to come for your very first skydive or if you want just to watch skydivers sailing like birds in the sky. We welcome you to our dropzone! We are proud of our spacious facility and are passionate about what we do here. Our team of professional skydiving instructors and support staff are specially trained to work with the first-time tandem skydivers so you have nothing to worry about.',
    type: 'text',
  },
  picture: {
    src: 'img-1.jpg',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}

export default ExtendedWireframe
