import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...ExtendedWireframe.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg_about-us.jpg',
  },
  picture: {
    resourceRef: 'photo.png',
    alt: 'Picture about the company',
  },
  topIcon: {
    svg: "<svg viewBox='0 0 18 19' width='18' height='19' xmlns='http://www.w3.org/2000/svg'><g fill-rule='nonzero' ><path d='M18 18.39a7.931 7.931 0 0 0-7.93-7.93H7.954C3.551 10.46 0 14.01 0 18.39c0 .315.268.583.584.583H17.44c.291 0 .559-.268.559-.584zM12.405 5.351V3.405A3.415 3.415 0 0 0 9 0a3.415 3.415 0 0 0-3.405 3.405v1.946A3.415 3.415 0 0 0 9 8.757a3.415 3.415 0 0 0 3.405-3.406z'/></g></svg>",
    fill: 'brand-color',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...ExtendedWireframe.modifierScheme,
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}


export default ExtendedWireframe
