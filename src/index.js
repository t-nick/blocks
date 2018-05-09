import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
  contacts: [
    {
      title: {
        content: 'Head office in <br>London',
        type: 'heading',
      },
      address: {
        content: '802 Cordell Cove Apt. 343',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:+12221232345">+1 (222) 123-2345</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:elta_witting@yahoo.com">elta_witting@yahoo.com</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contacts_01.jpg',
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'Vienna Office',
        type: 'heading',
      },
      address: {
        content: '17 Warren Lakes Suite 026',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:+12221232345">+1 (222) 123-2345</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:terry_moshe@hotmail.com">terry_moshe@hotmail.com</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contacts_02.jpg',
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'Amsterdam office',
        type: 'heading',
      },
      address: {
        content: '626 Oberbrunner Shore',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:+12221232345">+1 (222) 123-2345</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:oma.crona@tremblay.tv">oma.crona@tremblay.tv</a>',
        type: 'text',
      },
      picture: {
        resourceRef: 'contacts_03.jpg',
        alt: 'Location illustration photo',
      },
    },
  ],
  title: {
    content: '- Contacts -',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart',
    type: 'subheading',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Contacts description', type: 'checkbox'},
}

export default ExtendedWireframe
