import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [
    {
      title: {
        content: 'Quantum CEO & our partners',
        type: 'text',
      },
      picture: {
        src: '1.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'Digital Marketing workshop lecturer',
        type: 'text',
      },
      picture: {
        src: '2.jpg',
        alt: 'Digital Marketing workshop lecturer',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'Quantum Company at WebSummit',
        type: 'text',
      },
      picture: {
        src: '3.jpg',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'UX workshop attendees',
        type: 'text',
      },
      picture: {
        src: '4.jpg',
        alt: 'UX workshop attendees',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'UX workshop lecturer',
        type: 'text',
      },
      picture: {
        src: '5.jpg',
        alt: 'UX workshop lecturer',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'Quantum team',
        type: 'text',
      },
      picture: {
        src: '6.jpg',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
  ],
  title: {
    content: 'Instagram',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
