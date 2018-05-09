import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'image1.jpg',
  },
  title: {
    content: 'Adaline',
    type: 'blockTitle',
  },
  text: {
    content: 'Adaline was a waitress and a hotel housekeeper in Poland. Then she worked  in NYC as a part of a team that serviced apartments. Her eight years of  practical experience and high scale standards have led her to the  ShinyHouse team. Adaline is dedicated to satisfying any clients\' needs and  requirements.',
    type: 'text',
  },
  subheading: {
    content: '“The house was ideally clean. I\'m completely satisfied with the result!” - Sam Jackson',
    type: 'subheading',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Company description', type: 'checkbox'},
}

export default ExtendedWireframe
