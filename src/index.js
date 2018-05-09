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
    resourceRef: 'about_services-1.png',
  },
  title: {
    content: 'Residential Cleaning',
    type: 'blockTitle',
  },
  text: {
    content: '— One-off, weekly, or bi-weekly cleaning available <br> — Custom checklist - you tell us what to clean <br> — Regular Quality Control for excellent results <br> — Professional cleaners you can trust <br> — More free time for things you love to do',
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
    textValue: 'Request a Quote',
    type: 'secondary',
    size: 'lg',
  },
  subheading: {
    content: 'From $15/hour',
    type: 'subheading',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Company description', type: 'checkbox'},
}

export default ExtendedWireframe
