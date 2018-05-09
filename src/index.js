import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-faq/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-faq/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'FAQ',
    type: 'blockTitle',
  },
  description: {
    content: 'Here are the most frequently asked questions by individuals and companies',
    type: 'subtitle',
  },
  individuals: {
    heading: {
      content: 'Individuals',
      type: 'heading',
    },
    faq: [
      {
        title: {
          content: 'What materials do you use for your products?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'What shipping do you provide?',
          type: 'subtitle',
        },
        description: {
          content: 'We ship orders by air and sea (UPS, FedEx). UPS and FedEx offers value-added services such as pickup and delivery options, delivery notification, and special handling options. We deliver order to the US and abroad, including Europe, Asia, Australia, and Africa. You can also order standard shipping within 4-5 business days.',
          type: 'text',
        },
      },
      {
        title: {
          content: 'How can I make an order?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'What length of warranty do you offer?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'How can I return the goods?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
    ],
  },
  companies: {
    heading: {
      content: 'Companies',
      type: 'heading',
    },
    faq: [
      {
        title: {
          content: 'What payment methods do you offer?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'Do you have any plans for big companies?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'When will I get profits after applying your goods?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'Can I get exclusive offers for my company?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'Will my company have aftersales service?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
    ],
  },
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
    textValue: 'Learn more',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Description of FAQ', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Type/Category of questions', type: 'checkbox'},
}

export default ExtendedWireframe
