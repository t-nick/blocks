import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-events/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-events/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

export default ExtendedWireframe
