import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Industrial',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_1.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Government',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_2.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Retail',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_3.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Office Buildings',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_4.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Hospitality',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_5.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Cafes & Restaurants',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_6.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Educational',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_7.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Entertainment & Sports',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_9.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Religious Facilities',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_10.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Healthcare',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'service_8.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: 'link',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Learn More',
        type: 'primary',
      },
    },
  ],
  title: {
    content: 'Industries we serve',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: false},
  button: {defaultValue: false},
}

export default ExtendedWireframe
