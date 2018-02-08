import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-faq/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  faq: [
    {
      title: 'Alice was beginning to get very tired of sitting by her sister on the bank, and of?',
      description:
        'Our Bakery is a fast-growing company committed to hiring the best bakers, cake decorators, sales and support staff. We are expanding every day due to the hard work and dedication of each and every staff member. This is a dedicated team that strives to achieve the impossible with every cake design and project bigger and better than the last',
      id: '231733d3-fc14-4e74-8cb2-ba71a90aecdd',
    },
    {
      title: 'Once or twice she had peeped into the book?',
      description:
        'Our Bakery is a fast-growing company committed to hiring the best bakers, cake decorators, sales and support staff. We are expanding every day due to the hard work and dedication of each and every staff member. This is a dedicated team that strives to achieve the impossible with every cake design and project bigger and better than the last',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b60',
    },
    {
      title: 'It had no pictures or conversations in it, \'and what is the use of a book,\'  thought Alice  \'without pictures or conversation?\'',
      description:
        'Our Bakery is a fast-growing company committed to hiring the best bakers, cake decorators, sales and support staff. We are expanding every day due to the hard work and dedication of each and every staff member. This is a dedicated team that strives to achieve the impossible with every cake design and project bigger and better than the last',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b61',
    },
    {
      title: 'So she was considering in her own mind?',
      description:
        'Our Bakery is a fast-growing company committed to hiring the best bakers, cake decorators, sales and support staff. We are expanding every day due to the hard work and dedication of each and every staff member. This is a dedicated team that strives to achieve the impossible with every cake design and project bigger and better than the last',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b62',
    },
  ],
  title: 'FAQ',
  description:
    'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.',
  cta: {
    type: 'secondary',
    size: 'md',
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
    textValue: 'Learn More',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'FAQ description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
