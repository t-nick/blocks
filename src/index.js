import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Who we are',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Diverse Abilities Dorset is an independent, nonprofit organization which works with the local <br />community to help people with physical and learning disabilities.<br /> We strive to meet their needs and at the same time give them an opportunity to feel more confident and live a better life.<br /><br />We make all the efforts to accomplish this by unique support programs developed to meet the needs of each person at every stage of their personal improvement and life transition.<br />We offer those people a hope for a better and happier future and ensure they have a life of full value they deserve.<br />Our team works hard to meet our community needs and our diverse selection of services are full of joy and happiness.<br />We help people of all ages reduce their responsibilities to relax for some time. We give a wonderful chance doubtful or alone people to play together, spend a good time with their parents and be happier and satisfied with life.',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Description', type: 'checkbox'},
  text: {defaultValue: false, label: 'Main text', type: 'checkbox'},
}

export default ExtendedWireframe
