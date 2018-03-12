import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  team: [
    {
      name: {
        content: 'Mary Winslow',
        type: 'heading',
      },
      position: {
        content: '13,000 jumps',
        type: 'text',
      },
      picture: {
        resourceRef: 'marry.png',
        alt: 'Andrew Shimmer photo',
      },
    },
    {
      name: {
        content: 'Stuart Bean',
        type: 'heading',
      },
      position: {
        content: '16,000 jumps',
        type: 'text',
      },
      picture: {
        resourceRef: 'stuart.png',
        alt: 'Ann Maisner photo',
      },
    },
    {
      name: {
        content: 'Derrick Jackson',
        type: 'heading',
      },
      position: {
        content: '18,000 jumps',
        type: 'text',
      },
      picture: {
        resourceRef: 'derrick.png',
        alt: 'Tomas Abbar photo',
      },
    },
  ],
  title: {
    content: 'Owners',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'member-desc': {defaultValue: false, label: 'Team member bio', type: 'checkbox'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'checkbox'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'checkbox'},
  'member-social': {defaultValue: false, label: 'Team social buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Team description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
