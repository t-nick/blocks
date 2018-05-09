import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '100% 10%',
    },
    resourceRef: 'header-bg.jpg',
  },
  logo: {
    text: {
      value: 'Atta',
      tagName: 'h2',
      fontSize: 40,
    },
  },
  menu: [
    {
      id: 'home',
      metadata: {
        displayName: 'Home',
        actionConfig: {
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
      id: 'for-beginners',
      metadata: {
        displayName: 'For Beginners',
        actionConfig: {
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
      id: 'about',
      metadata: {
        displayName: 'About',
        actionConfig: {
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
      id: 'classes',
      metadata: {
        displayName: 'Classes',
        actionConfig: {
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
      id: 'shedule',
      metadata: {
        displayName: 'Shedule',
        actionConfig: {
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
      id: 'teachers',
      metadata: {
        displayName: 'Teachers',
        actionConfig: {
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
      id: 'teacher-training',
      metadata: {
        displayName: 'Teacher Training',
        actionConfig: {
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
      id: 'pricing',
      metadata: {
        displayName: 'Pricing',
        actionConfig: {
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
      id: 'shop',
      metadata: {
        displayName: 'Shop',
        actionConfig: {
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
      id: 'events',
      metadata: {
        displayName: 'Events',
        actionConfig: {
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
      id: 'retreats',
      metadata: {
        displayName: 'Retreats',
        actionConfig: {
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
        actionConfig: {
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
      id: 'contacts',
      metadata: {
        displayName: 'Contacts',
        actionConfig: {
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
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'company-slogan': {defaultValue: false, label: 'Company slogan', type: 'checkbox'},
  'company-contacts': {defaultValue: false, label: 'Contact information', type: 'checkbox'},
}

export default ExtendedWireframe
