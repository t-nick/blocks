import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-process/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      ...Component.defaultContent.steps[0],
      title: {
        ...Component.defaultContent.steps[0].title,
        content: '3D & Computer design',
      },
      description: {
        ...Component.defaultContent.steps[0].description,
        content: 'Creation of the 3D and computer-generated design of your new kitchen to preview it before the project begins.',
      },
    },
    {
      ...Component.defaultContent.steps[1],
      title: {
        ...Component.defaultContent.steps[1].title,
        content: 'Project Estimation',
      },
      description: {
        ...Component.defaultContent.steps[1].description,
        content: 'Estimation of the total project price that covers everything, from start to finish of the whole remodeling process.',
      },
    },
    {
      ...Component.defaultContent.steps[2],
      title: {
        ...Component.defaultContent.steps[2].title,
        content: 'Project Management',
      },
      description: {
        ...Component.defaultContent.steps[2].description,
        content: 'Professional project management results in a successful completion of your new kitchen renovation project.',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Process description', type: 'hidden'},
}

export default ExtendedWireframe
