import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Film Production at SkydiveBirds',
    type: 'headingLg',
  },
  text: {
    content: 'Our spacious 15,000 sq ft facility is located on the five-acre campus on the Rochelle Municipal Airport, Chicago. Our private airport is proud to offer film production services to help you capture all the beauty of the spectacular views of the surrounding area. We have state of the art aircraft and expert instructors to ensure your safety.',
    type: 'subtitle',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
