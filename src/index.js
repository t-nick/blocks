import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: '404',
  description: 'The page you are looking for could not be found',
  cta: {
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
    textValue: 'BACK TO HOME PAGE',
    type: 'primary-alt',
    size: 'sm',
  },
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
}

ExtendedWireframe.modifierScheme = [{
  id: 'title',
  type: 'checkbox',
  label: 'Block title',
  defaultValue: true,
},
{
  id: 'subtitle',
  type: 'checkbox',
  label: 'Title description',
  defaultValue: true,
},
{
  id: 'picture',
  type: 'hidden',
  label: 'Picture',
  defaultValue: false,
}]

export default ExtendedWireframe
