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
      title: {
        content: 'Can I book a team for the weekend?',
        type: 'heading',
      },
      description: {
        content:
          'Yes, this service is available 7 days per week, even on weekends and bank holidays. ',
        type: 'text',
      },
    },
    {
      title: {
        content: 'What is your coverage?',
        type: 'heading',
      },
      description: {
        content:
          'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Do you also clean kitchen appliances?',
        type: 'heading',
      },
      description: {
        content:
          'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
        type: 'text',
      },
    },
    {
      title: {
        content: 'When can I make a booking?',
        type: 'heading',
      },
      description: {
        content:
          'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Is there a difference between Residential and Deep Cleaning?',
        type: 'heading',
      },
      description: {
        content:
          'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
        type: 'text',
      },
    },
    {
      title: {
        content: 'How are the prices for Deep Cleaning formed?',
        type: 'heading',
      },
      description: {
        content:
          'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'FAQ',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
