import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'The 10 Pillars of Business Mastery',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We provide a wide range of services to meet even the most daring requirements. ',
    type: 'subtitle',
  },
  text: {
    content:
      'Most service business owners are shocked to realize that running a service business can be an expensive, exhausting battle. But it doesn’t have to be. You don’t have to donate your money, your time with family, and your health.<br><br>In The 10 Pillars of Business Mastery, Roy Hale shares how you can take charge of your business, dominate your market, and achieve the kind of effective results that you’ve only dreamed of.',
    type: 'text',
  },
  picture: {
    src: 'books.png',
    alt: 'Picture about the company',
  },
  'button-1': {
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
    textValue: 'Buy on amazon',
    type: 'primary',
    size: 'md',
  },
  background: {
    type: 'color',
    color: '#f9f9f9',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
