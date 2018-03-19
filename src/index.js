import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#fff',
  },
  title: {
    ...Component.defaultContent.title,
    content: '- TESTIMONIALS -',
  },
  testimonials: [
    {
      ...Component.defaultContent.testimonials[0],
      name: {
        ...Component.defaultContent.testimonials[0].name,
        content: 'AMANDA PETERSON',
      },
      position: {
        ...Component.defaultContent.testimonials[0].position,
        content: 'MARKETING DIRECTOR AT FRESH FOOD CO.',
      },
      date: {
        ...Component.defaultContent.testimonials[0].date,
        content: 'DECEMBER 15, 2017',
      },
      image: {
        ...Component.defaultContent.testimonials[0].image,
        resourceRef: 'testimonials.png',
      },
    },
    {
      ...Component.defaultContent.testimonials[1],
      name: {
        ...Component.defaultContent.testimonials[1].name,
        content: 'AMANDA PETERSON',
      },
      position: {
        ...Component.defaultContent.testimonials[1].position,
        content: 'MARKETING DIRECTOR AT FRESH FOOD CO.',
      },
      date: {
        ...Component.defaultContent.testimonials[1].date,
        content: 'DECEMBER 15, 2017',
      },
      image: {
        ...Component.defaultContent.testimonials[1].image,
        resourceRef: 'testimonials.png',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
