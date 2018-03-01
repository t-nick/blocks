import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  team: [
    {
      name: {
        content: 'James Brown',
        type: 'heading',
      },
      position: {
        content: 'Jan 18, 2017',
        type: 'caption',
      },
      description: {
        content: 'Because my kids like to give me presents that pose a challenge, earlier this year I\'ve received a gift voucher to skydive for my 40th birthday. From the minute arriving at SkydiveBirds, the staff was extremely friendly and smiling, made me feel welcome instantly putting any nerves I had at ease. Thanks for an amazing day!',
        type: 'text',
      },
      picture: {
        resourceRef: 'team-img-1.png',
        alt: 'Andrew Shimmer photo',
      },
    },
    {
      name: {
        content: 'Tom Stone',
        type: 'heading',
      },
      position: {
        content: 'Aug 18, 2017',
        type: 'caption',
      },
      description: {
        content: 'It\'s hard to put it in mere words how awesome the whole experience has been! We all had a great day yesterday jumping and raising money for Doing it for Dan. The SkydiveBirds club was so well-organized and very professional. My instructor Peter was a nice guy, who made me feel safe and enjoy the experience.',
        type: 'text',
      },
      picture: {
        resourceRef: 'team-img-2.png',
        alt: 'Ann Maisner photo',
      },
    },
    {
      name: {
        content: 'Robert Moran',
        type: 'heading',
      },
      position: {
        content: 'Mar 27, 2017',
        type: 'caption',
      },
      description: {
        content: 'I did my first skydive on Wednesday with Patrick and it was the awesome thing I have ever done. Patrick helped me to calm down and was so funny and described everything in details. I am happy I chose to go skydive as all the crew is very professional in everything they do. I would highly recommend them to my friends and to anyone who would like to go skydiving.',
        type: 'text',
      },
      picture: {
        resourceRef: 'team-img-3.png',
        alt: 'Tomas Abbar photo',
      },
    },
    {
      name: {
        content: 'Linda Gomez',
        type: 'heading',
      },
      position: {
        content: 'Jan 06, 2017',
        type: 'caption',
      },
      description: {
        content: 'I booked the skydive for my girlfriend for her 25th birthday and it was the best day ever for her! The staff was amazing, welcoming, and smiling. They explained that it was nothing to worry about and guaranteed the safest experience. After a little shock, my girlfriend agreed to make her first skydiving with the instructor and that was the right choice. The experience was unforgettable!',
        type: 'text',
      },
      picture: {
        resourceRef: 'team-img-4.png',
        alt: 'Tomas Abbar photo',
      },
    },
    {
      name: {
        content: 'Norman Peters',
        type: 'heading',
      },
      position: {
        content: 'Mar 18, 2017',
        type: 'caption',
      },
      description: {
        content: 'The experience was wonderful! The weather was fine. The two professional instructors, Tom and Andrew, were very friendly and supportive and made me feel at ease from start to finish! There is nothing to compare with the feeling of freefall. Thank you for making my day so amazing and special! I look forward to visiting your skydiving center again!',
        type: 'text',
      },
      picture: {
        resourceRef: 'team-img-5.png',
        alt: 'Tomas Abbar photo',
      },
    },
    {
      name: {
        content: 'Richard Rose',
        type: 'heading',
      },
      position: {
        content: 'Apr 18, 2017',
        type: 'caption',
      },
      description: {
        content: 'Just the best thing I have ever done in my whole life and would love to do it again! Everything was thought out and well-organized, the staff was very friendly and professional. I am lucky to have a video of my freefall - it\'s something great and makes me feel excited every time I watch it. Thanks guys for your great work and for making people happier!',
        type: 'text',
      },
      picture: {
        resourceRef: 'team-img-6.png',
        alt: 'Tomas Abbar photo',
      },
    },
  ],
  title: {
    content: 'Reviews',
    type: 'blockTitle',
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
    textValue: 'show more',
    type: 'secondary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'member-desc': {defaultValue: true, label: 'Team member bio', type: 'checkbox'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'checkbox'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'checkbox'},
  'member-social': {defaultValue: false, label: 'Team social buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Team description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
