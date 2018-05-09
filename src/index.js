import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-projects/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  projects: [
    {
      ...Component.defaultContent.projects[0],
      picture: {
        ...Component.defaultContent.projects[0].picture[0],
        resourceRef: '1.jpg',
      },
    },
    {
      ...Component.defaultContent.projects[1],
      picture: {
        ...Component.defaultContent.projects[1].picture[1],
        resourceRef: '2.jpg',
      },
    },
    {
      title: {
        content: 'Project 1',
        type: 'heading',
      },
      text: {
        content: 'Innovative digital solution for a marketing company. We worked on UX for the company website to make it more effective and increase the number of leads.',
        type: 'text',
      },
      picture: {
        resourceRef: '3.jpg',
      },
    },
    {
      title: {
        content: 'Project 2',
        type: 'heading',
      },
      text: {
        content: 'Innovative digital solution for a marketing company. We worked on UX for the company website to make it more effective and increase the number of leads.',
        type: 'text',
      },
      picture: {
        resourceRef: '4.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'hidden'},
  'project-button': {defaultValue: false, label: 'Project button', type: 'hidden'},
  'project-category': {defaultValue: false, label: 'Project category', type: 'hidden'},
}

export default ExtendedWireframe
