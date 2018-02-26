import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      description: {
        content: 'Episode 9: How to overcome a fear of starting a business with Jeff Tyler',
        type: 'text',
      },
      picture: {
        resourceRef: 'services01.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
    {
      description: {
        content:
          'Episode 8: How the community is important to build your private practice with Jason Green',
        type: 'text',
      },
      picture: {
        resourceRef: 'services02.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
    {
      description: {
        content: 'Episode 7: How to create a six-figure business with Thomas Perry',
        type: 'text',
      },
      picture: {
        resourceRef: 'services03.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
    {
      description: {
        content: 'Episode 6: Building a tribe, finding your message, changing the world.',
        type: 'text',
      },
      picture: {
        resourceRef: 'services04.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
    {
      description: {
        content: 'Episode 5: Can’t find a pain point? There’s another way to find it.',
        type: 'text',
      },
      picture: {
        resourceRef: 'services05.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
    {
      description: {
        content: 'Episode 4: Create products people want (by building in increments).',
        type: 'text',
      },
      picture: {
        resourceRef: 'services06.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
    {
      description: {
        content: 'Episode 3: How did a global company grow without systemization?',
        type: 'text',
      },
      picture: {
        resourceRef: 'services07.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
    {
      description: {
        content: 'Episode 2: Why sell a profitable company to take a risk on a new one?',
        type: 'text',
      },
      picture: {
        resourceRef: 'services08.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
    {
      description: {
        content: 'Episode 1: How can a startup gain the trust of potential customers?',
        type: 'text',
      },
      picture: {
        resourceRef: 'services09.jpg',
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
        textValue: 'go to episode',
        type: 'link',
      },
    },
  ],
  title: {
    content: '“Kickstart Your Business Today” podcast',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'Podcast for entrepreneurs who need some tips and strategies to strengthen their businesses.',
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: true, label: 'Link', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Services description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
