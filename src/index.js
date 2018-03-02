import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Our services',
    type: 'blockTitle',
  },
  services: [
    {
      title: {
        content: 'Tandem skydiving',
        type: 'heading',
      },
      description: {
        content: 'Tandem skydiving is the ideal flight method for the beginners without previous skydiving experience. You don\'t have to worry because you will be strapped to our expert tandem coach.',
        type: 'text',
      },
      picture: {
        resourceRef: 'Depositphotos_18935439_original.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Become a skydiver',
        type: 'heading',
      },
      description: {
        content: 'We proudly offer Accelerated Freefall (AFF) and Instructor Assisted Deployment (IAD) that are our main methods of skydive training. In any case, we\'ll help you become a qualified licensed skydiver!',
        type: 'text',
      },
      picture: {
        resourceRef: 'Depositphotos_87875846_original.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Experienced skydivers',
        type: 'heading',
      },
      description: {
        content: 'Get to know why SkydiveBirds is a home to World Champions! Stay informed of services, events, facilities, FAQ, prices, accommodation, and much more.',
        type: 'text',
      },
      picture: {
        resourceRef: 'Depositphotos_116117114_original.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Indoor skydiving',
        type: 'heading',
      },
      description: {
        content: 'Indoor skydiving is the alternative analog designed to make you feel a real freefall. Our wind tunnel will turn your dream of flight to reality. Come try with us!',
        type: 'text',
      },
      picture: {
        resourceRef: 'Depositphotos_81587084_original.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Film production',
        type: 'heading',
      },
      description: {
        content: 'We offer film production services to help you capture all the beauty of the spectacular views of the area.',
        type: 'text',
      },
      picture: {
        resourceRef: 'Depositphotos_43608453_original.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
