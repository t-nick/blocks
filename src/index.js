import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Become a skydiver',
    type: 'blockTitle',
  },
  subheading: {
    content: 'Learn to skydive with the experienced instructors at SkydiveBirds club near Chicago!',
    type: 'heading',
  },
  text: {
    content: 'SkydiveBirds Center is proud to offer the Accelerated Freefall (AFF) training program for those who want to improve their skills and become qualified, licensed skydivers. AFF is a quick and easy way to learn to skydive. You will learn to correctly get out of the plane, remain conscious of altitude, freefall in a fixed position, execute maneuvers, deploy from a fixed position at the right time, estimate and respond to an emergency, fly under the canopy, and make a safe landing. You will learn this art through 7 special jumps with the instructor nearby you, who will teach you every step of the way, from 12,000 feet.',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subheading: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
}

export default ExtendedWireframe
