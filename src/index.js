import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-testimonials/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-testimonials/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  testimonials: {
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: '#f5f5f5',
        }],
      ],
    },
    items: [
      {
        title: {
          content: '- Mark, Driver at Acrozz',
          type: 'heading',
        },
        description: {
          content: '“I have been a driver for over 20 years, and for 10 years I have been driving oversize loads. At Acrozz, I am a Special Commodities Division driver and am really enjoying my role. I feel really at home with this company. So I don’t want to drive anywhere else.”',
          type: 'text',
        },

      },
      {
        title: {
          content: '- Tom, Driver at Acrozz',
          type: 'heading',
        },
        description: {
          content: '"Acrozz did just what they said they would. Their mentor thoroughly trained me to drive, I soon got my driver\'s license. Very good company. Their trucks are all new and in very good condition, their routes are close to my home what really matters to me."',
          type: 'text',
        },
      },
      {
        title: {
          content: '- Sam, Driver at Acrozz',
          type: 'heading',
        },
        description: {
          content: '“I am treated well here and the staff is nice and helpful. All the drivers seem to be satisfied with their jobs and equipment at Acrozz and have long careers here as a rule. I really like working for this company. They offer a deserved salary with great career opportunities."',
          type: 'text',
        },
      },
    ],
  },

  title: {
    content: 'Driver Testimonials',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  date: {defaultValue: false, label: 'Date of publishing', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  position: {defaultValue: false, label: 'Reviewer job position', type: 'hidden'},
}

export default ExtendedWireframe
