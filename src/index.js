import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  heading: {
    content: 'Heading About Us',
    type: 'heading',
  },
  subheading: {
    content: 'If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.',
    type: 'subheading',
  },
  text: {
    content: 'If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.',
    type: 'text',
  },
  'button-2': {
    ...Component.defaultContent['button-2'],
    textValue: 'Learn more',
    type: 'secondary',
    size: 'lg',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'about.jpg',
    overlay: {
      type: 'color',
      color: '#fff',
      opacity: 0.9,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Company description', type: 'checkbox'},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
}

export default ExtendedWireframe
