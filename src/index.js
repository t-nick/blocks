import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: '- OUR PROJECTS -',
  },
  projects: [
    {
      ...Component.defaultContent.projects[0],
      title: {
        ...Component.defaultContent.projects[0].title,
        content: 'PROJECT 1',
      },
      subtitle: {
        ...Component.defaultContent.projects[1].subtitle,
        content: 'UX DESIGN',
      },
      picture: {
        ...Component.defaultContent.projects[0].picture,
        resourceRef: 'iphone.jpg',
      },
      link: {
        ...Component.defaultContent.projects[0].link,
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.projects[1],
      title: {
        ...Component.defaultContent.projects[1].title,
        content: 'PROJECT 2',
      },
      subtitle: {
        ...Component.defaultContent.projects[1].subtitle,
        content: 'BRANDING',
      },
      picture: {
        ...Component.defaultContent.projects[1].picture,
        resourceRef: 'project_02.jpg',
      },
      link: {
        ...Component.defaultContent.projects[1].link,
        type: 'link',
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
  'block-button': {defaultValue: true, label: 'Block button', type: 'checkbox'},
  'project-button': {defaultValue: true, label: 'Project button', type: 'checkbox'},
  'project-category': {defaultValue: true, label: 'Project category', type: 'checkbox'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
