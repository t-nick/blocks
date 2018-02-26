import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: 'Showcase',
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  gallery: [
    {
      title: 'Quantum CEO & our partners',
      picture: {
        resourceRef: 'item-1.png',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
      caption: 'Black tattoo in a traditional style by Brucius',
      id: 'ce744570-02be-4080-b3f2-740d628ccb52',
    },
    {
      title: 'Digital Marketing workshop lecturer',
      picture: {
        resourceRef: 'item-2.png',
        alt: 'Digital Marketing workshop lecturer',
        galleryId: 'gallery',
      },
      caption: 'Black  and Red  tattoo by John Paul',
      id: 'a980742f-2b78-40b0-9fed-247e71056797',
    },
    {
      title: 'Quantum Company at WebSummit',
      picture: {
        resourceRef: 'item-3.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
      caption: 'Black and Color roses & butterflies by Dani Cobra',
      id: 'cb6bbbcc-1980-4575-af5c-0f46e33d6d1e',
    },
    {
      title: 'UX workshop attendees',
      picture: {
        resourceRef: 'item-4.png',
        alt: 'UX workshop attendees',
        galleryId: 'gallery',
      },
      caption: 'Color tattoo in a neo traditional style by Leah',
      id: '3e7b03a6-54fb-4d5c-8735-ddfd27f0c8fa',
    },
    {
      title: 'UX workshop lecturer',
      picture: {
        resourceRef: 'item-5.png',
        alt: 'UX workshop lecturer',
        galleryId: 'gallery',
      },
      caption: 'Nose piercing by Manu',
      id: 'd6741c92-36d7-4495-93cc-ba77ce79f2bb',
    },
    {
      title: 'Quantum team',
      picture: {
        resourceRef: 'item-6.png',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
      caption: 'Big color rose by Man',
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
    {
      title: 'Quantum team',
      picture: {
        resourceRef: 'item-7.png',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
      caption: 'Custom tattoo design by Javier Rodríguez',
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051ba',
    },
    {
      title: 'Quantum team',
      picture: {
        resourceRef: 'item-8.png',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
      caption: 'Tribal and Maori influenced design by Rafa Serrano',
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bc',
    },
  ],
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
    textValue: 'All works',
    type: 'secondary',
    size: 'sm',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: false, label: 'Image description', type: 'checkbox'},
  caption: {defaultValue: true, label: 'Caption after body', type: 'hidden'},
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Gallery description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
