import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Business Plan Workshop',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Sep.28.2017 - 18:30',
    type: 'subtitle',
  },
  text: {
    content: 'This intensive Business Plan Workshop Series is created to increase business owners’ knowledge, reliability, and skills necessary for high performance. Together we\'ll develop a complete business plan in over a few weeks with the help of Roy Hale from the Roy Hale Business coaching and Sam Brown, Managing Director of The Small Business Lounge. <br><br>This workshop is created mainly for aspiring entrepreneurs, small business owners, and start-up companies. A thorough business plan is crucial for your business as it performs the organizational structure of your business, including titles of officers or directors and each employee’s individual duties and roles. It will act as a management tool to assist in keeping your business on course with meeting its projected goals, targets, and milestones.',
    type: 'text',
  },
  picture: {
    resourceRef: 'picture-article.png',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
}

export default ExtendedWireframe
