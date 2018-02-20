import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'light',
  background: {
    type: 'color',
    color: '#fff',
  },
  title: {
    content: 'Thanks for your registration!',
    type: 'blockTitle',
  },
  description: {
    content: 'Roy will contact you shortly and provide all the additional info',
    type: 'text',
  },
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
    textValue: 'Back to homepage',
    type: 'primary',
    size: 'lg',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Illustration photo',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  picture: {defaultValue: false, label: 'Picture', type: 'hidden'},
}

export default ExtendedWireframe
