import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  projects: [
    {
      title: {
        content: 'Winifred Coleman',
        type: 'heading',
      },
      subtitle: {
        content: 'Psychologist',
        type: 'caption',
      },
      text: {
        content:
          "Marketing SOS course highly exgeeded my expectations! I used to cringe at the idea of marketing which in my honesty. I felt that honesty and marketing were mutually exclusive. But the reality is that I had to get my business out there and I required help from someone who understood my mindset and my market. This program changed my whole vision and gave me the tools to get into the game. Through learning this program, I was able to realize that I could indeed keep my honesty and make some serious hustling. Marketing SOS took me sone unexpected places inside myself and I was able to clear out some worthless stuff that was holding me back from my business potential. Roy's enthusiasm creates an enjoyable buzz and energy of making! He's generous, supportive,and keeps it real. It was great to be capable to connect with Roy and the other 'Hustlers' online and to capable to share how we were going on our marketing journeys. Roy's real-life, personal examples of methods in action motivated me to overcome my fears and take action on things I'd been putting off.",
        type: 'text',
      },
      picture: {
        src: 'foto-1.jpg',
        alt: 'Project 1',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
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
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: {
        content: 'Cole Sims',
        type: 'heading',
      },
      subtitle: {
        content: 'The roofless shala',
        type: 'caption',
      },
      text: {
        content:
          "Roy is totaly committed to his students. His approach is original and always right to the point, allowing me to find solutions that are systematic and easy. The wealth of knowledge Roy shared was enormous and related to today's value-based business approach. The content shared during the program will keep me applying and learning during the next year. Thank you!",
        type: 'text',
      },
      picture: {
        src: 'foto-2.jpg',
        alt: 'Project 2',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
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
        content: 'Josephine Wade',
        type: 'heading',
      },
      subtitle: {
        content: 'Starlight inc.',
        type: 'caption',
      },
      text: {
        content:
          "This course is right for you if you're serious about growing your business and moving forward your best work. Roy is direct, passinate, enthusiastic, knowledgesable, and very generous. The content of the course is excellent and is delivered in a very user-friendly way. Roy,I cannot thank you enough for this course. The learning and implememting have only just begun. I highly recommend Marketing SOS!",
        type: 'text',
      },
      picture: {
        src: 'foto-3.jpg',
        alt: 'Project 3',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
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
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'What our participants say',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Each month, we usefully close our projects. Here is the list of our recent ones:',
    type: 'subtitle',
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
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'project-button': {defaultValue: false, label: 'Project button', type: 'checkbox'},
  'project-category': {defaultValue: true, label: 'Project category', type: 'checkbox'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
