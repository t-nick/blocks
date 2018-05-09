import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-about/src/options.json'
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
    overlay: {
      type: 'color',
      color: '#fff',
      opacity: 0.6,
    },
  },
  title: {
    content: 'About <br/> ShinyHouse',
    type: 'blockTitle',
  },
  text: {
    content: 'Cleaning is not an easy task. It is a dirty work and takes a lot of time. But luckily, cleaning is our passion and we can prove this! We are a team of committed cleaners who do our best to provide you with a superior quality service with numerous benefits. Just contact us and test our devotion to cleaning and dedication to customers. We\'ll make your place shine and clean like never before. ',
    type: 'text',
  },
  'button-2': {
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
    textValue: 'Learn more',
    type: 'secondary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'center', label: 'Center'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'left',
    name: 'Aligning',
    type: 'radio-button-group',
  },
  heading: {defaultValue: false, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Company description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
