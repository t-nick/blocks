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
      id: '06567442-178b-46ab-a822-661218143093',
      name: 'Blake',
      position: 'July 17th – November 27th',
      picture: {
        src: 'img-1.png',
        alt: 'Blake photo',
      },
    },
    {
      id: 'd7b368a3-75c8-4039-80ef-15c783140026',
      name: 'Aaron',
      position: 'October 10th, 11th & 12th',
      picture: {
        src: 'img-2.png',
        alt: 'Ann Maisner photo',
      },
    },
    {
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29db',
      name: 'Helem',
      position: 'October 8th – 10th',
      picture: {
        src: 'img-3.png',
        alt: 'Tomas Abbar photo',
      },
    },
  ],
  title: 'Guest artists',
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
    textValue: 'All artists',
    type: 'secondary',
  },
  background: {
    type: 'color',
    color: '#0c1526',
  },
}

ExtendedWireframe.modifierScheme = []

export default ExtendedWireframe
