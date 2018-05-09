import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Testimonials',
    type: 'blockTitle',
  },
  partners: [
    {
      logo: {
        image: {
          resourceRef: 'img-1.png',
          width: 193,
          height: 193,
        },
      },
      title: {
        content: 'Mary',
        type: 'heading',
      },
      desc: {
        content: '“I have no words to describe this company and its professionals! I am completely satisfied with the quality of work. The electricians were friendly, attentive to details, and very knowledgeable. They have consulted with me prior to repairing my issue. Our ventilation fan was replaced very quickly. Thanks, guys, for saving my time and money!"',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'img-2.png',
          width: 193,
          height: 193,
        },
      },
      title: {
        content: 'Jack',
        type: 'heading',
      },
      desc: {
        content: '«Considering that any given hospitality business wholly depends on the quality of its services, we were panicked when the lights went out at our restaurant. Luckily, we were able to get that whole situation under control in a matter of 40 minutes - all thanks to the team of pros!»',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'img-3.png',
          width: 193,
          height: 193,
        },
      },
      title: {
        content: 'Michael',
        type: 'heading',
      },
      desc: {
        content: '“I was extremely impressed by their work. They corresponded to the high praise without any doubt. They installed a high-power car charging outlet for me. Everyone who sees my replaced panel is touched by the organization and accuracy. Anthony was also really helpful in explaining all the details. Thanks a lot!"',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'img-4.png',
          width: 193,
          height: 193,
        },
      },
      title: {
        content: 'Jane',
        type: 'heading',
      },
      desc: {
        content: '“I just want to say that all the guys from this company do a great job for our electrical needs every year. They are always friendly, very knowledgeable, professional, attentive to details, and get the job done quickly and efficiently. Recently, they have repaired our ceiling fan in the bathroom and replaced a few electrical outlets in no time. Thank you for the excellent job and wish you good luck!"',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'img-5.png',
          width: 193,
          height: 193,
        },
      },
      title: {
        content: 'Carol',
        type: 'heading',
      },
      desc: {
        content: '"The technicians have done a great job for our electrical needs for the last two years.  Their service is always friendly, safe, trustworthy, and is performed on time. Last week they have provided us with repairing our fixtures in the basement. We are fully satisfied with such a professional work. Everything looks great again!"',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
  ],
  button: {
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
    textValue: 'Show more',
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: true, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: false, label: 'Partner link', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
