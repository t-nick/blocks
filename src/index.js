import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    resourceRef: 'article_img.png',
    alt: 'Picture about the company',
  },
  background: {
    type: 'color',
    color: '#fff',
  },
  title: 'Why choose us',
  text: 'Industrial facilities are a blend of areas such as offices, labs, cafeterias, loading docks, storage, equipment rooms, childcare rooms, and restrooms – as well as assembly or manufacturing areas. Spacious hallways with carpeting or cement flooring are guaranteed to be cleaned efficiently with the appropriate equipment. Unlike other industrial cleaning contractors, ShinyHouse pays detailed attention to using the proper tools and cleaning process to achieve the best possible end result.',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false},
  'top-icon': {defaultValue: false},
}

export default ExtendedWireframe
