import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  image: {
    ...Component.defaultContent.image,
    resourceRef: 'depositphotos-151134840-original-2.png',
  },
  heading: {
    ...Component.defaultContent.heading,
    content: 'Our Text Heading',
  },
  subheading: {
    ...Component.defaultContent.subheading,
    content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence and upturning',
  },
  text: {
    ...Component.defaultContent.text,
    content: 'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.We are in it for the long haul—for our customers and for our world. Our customers can be found in virtually every corner of the earth, and we realize our success comes directly from helping our customers be successful. We take seriously our responsibility to give back to the communities<br> in which we work and live.',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    textValue: 'Learn more',
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
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    design: {
      ...Component.defaultContent['social-icons'].design,
      border: 'circle',
      offset: 5,
      color: '#cdcdcd',
      size: 25,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Company description', type: 'checkbox'},
  'social-icons': {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
