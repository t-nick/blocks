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
    resourceRef: 'educational-img-1.png',
  },
  title: {
    content: 'Educational',
    type: 'blockTitle',
  },
  subheading: {
    content: 'Customized solutions for Educational Facilities',
    type: 'subheading',
  },
  text: {
    content: '— We work as efficiently as you do <br> — We care about your products and processes  <br>— We are flexible and able to scale our operations to match your business cycle',
    type: 'quote',
  },
  'button-2': {
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
    textValue: 'Send Us a Message',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Company description', type: 'checkbox'},
}

export default ExtendedWireframe
