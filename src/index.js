import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  title: 'Chris Pippen',
  subtitle: 'Founder: Japanese, Neo-Traditional Style',
  picture: {
    src: 'Depositphotos_9434210_original.jpg',
    alt: 'Chris Pippen',
  },
  socialIcons: {
    networks: [
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
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      offset: 0,
      color: '#2d3646',
      sizes: [10, 20, 30, 35, 40],
      size: '35px',
    },
  },
  text:
    'Growing up in a family of sailors in North Carolina, Chris has been exposed to the art of tattoos his whole life. Naturally, he chose it as his day job!',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  socialIcons: {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
}


export default ExtendedWireframe
