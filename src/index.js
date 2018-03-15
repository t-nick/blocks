import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    text: {
      value: 'Goose',
      fontSize: 34,
    },
  },
  description: {
    type: 'text',
    content: 'Therefore, since the provider, not you, is paying the electricity bills, you can enter the monthly mining bill in place of the electricity cost.',
    color: 'var(--ui-heading-lg-color)',
  },
  menu: [
    {
      id: 'about',
      brightness: 100,
      metadata: {
        displayName: 'About',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'testimonials',
      metadata: {
        displayName: 'Testimonials',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'team',
      metadata: {
        displayName: 'Our team',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'services',
      metadata: {
        displayName: 'Services',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'blog',
      metadata: {
        displayName: 'Blog',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'resources',
      metadata: {
        displayName: 'Resources',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'careers',
      metadata: {
        displayName: 'Careers',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'approach',
      metadata: {
        displayName: 'Our approach',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'press',
      metadata: {
        displayName: 'Press',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'projects',
      metadata: {
        displayName: 'Projects',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'industries',
      metadata: {
        displayName: 'Industries',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'contacts-us',
      metadata: {
        displayName: 'Contact us',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
  ],
  copyright: {
    type: 'caption',
    content: 'Produced by Weblium.com.',
    color: 'var(--ui-heading-lg-color)',
  },
  additional: {
    type: 'caption',
    content: 'All rights Reserved',
    color: 'var(--ui-heading-lg-color)',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Company name', type: 'checkbox'},
  description: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  social: {defaultValue: false, label: 'Social media Icons', type: 'checkbox'},
}

export default ExtendedWireframe
