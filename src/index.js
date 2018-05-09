import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-faq/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-faq/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  description: {
    content: 'There are advances',
    type: 'subtitle',
  },
  individuals: {
    heading: {
      content: 'White Rabbit with pink eyes',
      type: 'heading',
    },
    faq: [
      {
        title: {
          content: 'Alice was beginning to get very tired of sitting by her sister on the bank, and?',
          type: 'subtitle',
        },
        description: {
          content: 'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy- chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'So she was considering in her own mind? ',
          type: 'subtitle',
        },
        description: {
          content: 'We ship orders by air and sea (UPS, FedEx). UPS and FedEx offers value-added services such as pickup and delivery options, delivery notification, and special handling options. We deliver order to the US and abroad, including Europe, Asia, Australia, and Africa. You can also order standard shipping within 4-5 business days.',
          type: 'text',
        },
      },
      {
        title: {
          content: 'There was nothing so very remarkable  in that; nor did Alice think it so very much?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'There was nothing so very remarkable in that; nor did Alice think it so very much?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: '`Oh dear! Oh dear! I shall be late’?',
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
      content: 'Black Cat with white tail',
      type: 'heading',
    },
    faq: [
      {
        title: {
          content: 'The pleasure of making a daisy- chain  would be worth the trouble?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'Her sister was reading, but it had no  pictures or conversations in it?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'As well as she could, for the hot day made her feel very sleepy and stupid?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'Out of the way to hear  the Rabbit say?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'When the Rabbit actually took   a watch out?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'When the Rabbit actually took a watch out?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
    ],
  },
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
