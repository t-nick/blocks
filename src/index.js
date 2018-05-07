import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  map: {
    ...Component.defaultContent.map,
    preset: 'dafault',
  },
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
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
    target: '_blank',
    design: {
      border: null,
      innerFill: true,
      preset: 'preset001',
      offset: 15,
      color: 'brand-color',
      sizes: [10, 20, 30, 40],
      size: 45,
    },
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15"><path d="M20 13.473V1.059l-6.896 6.207zM10 10.06L8.031 8.288l-6.896 6.207h17.73l-6.896-6.207zM18.865.037H1.135L10 8.017zM0 1.059v12.414l6.896-6.207z"/></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  logo: {defaultValue: false, label: 'Logo', type: 'hidden'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},

}

export default ExtendedWireframe
