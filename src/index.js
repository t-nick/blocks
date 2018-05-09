import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-text/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'Equipment for Sale',
  },
  text: {
    ...Component.defaultContent.text,
    content: 'Our equipment is fully owned and customized. The majority of our recent model tractor fleet is available for purchase within only several years of their date of release. Our fleet of trailers consists of various user features and custom driven dimensions.<br/><br/> We offer a great chance to buy your truck, upgrade your present fleet, or add trucks to your present fleet. Besides tractors, we also have flatbed, step deck, van trailers, custom heavy haul and miscellaneous equipment for sale.',
  },
  heading: {
    content: 'For more details and pricing please call us at <a href="tel:+1 337-515-1307">+1 337-515-1307</a>.',
    type: 'caption',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    ...Component.modifierScheme.align,
    defaultValue: 'left',
  },
  heading: {defaultValue: true, label: 'Title', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Description', type: 'hidden'},
}

export default ExtendedWireframe
