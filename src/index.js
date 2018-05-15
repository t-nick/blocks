import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
import style from './style.css'

<<<<<<< HEAD
=======
import defaultOptions from 'wireframe-series-2-about/src/options.json'
>>>>>>> 736fe7196113f273f311590e4e3e9f08e6b7c265
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor


<<<<<<< HEAD
const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)
=======
const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)
>>>>>>> 736fe7196113f273f311590e4e3e9f08e6b7c265


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'company-img.jpg',
  },
  'social-icons': {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'softRect',
      innerFill: true,
      preset: 'preset001',
      offset: 15,
      color: '#3d87ff',
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Company title', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Company description', type: 'hidden'},
}

export default ExtendedWireframe
