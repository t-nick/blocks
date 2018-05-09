import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'services-bg.jpg',
    overlay: {
      type: 'color',
      color: 'light-accent-color',
      opacity: 0.97,
    },
  },
  services: [
    {
      title: {
        content: '24-hour emergency<br> service',
        type: 'heading',
      },
      picture: {
        src: 'service-01.jpg',
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
        textValue: 'From $50',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Interior and exterior lighting',
        type: 'heading',
      },
      picture: {
        src: 'service-02.jpg',
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
        textValue: 'From $30',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Data network and telephone installations',
        type: 'heading',
      },
      picture: {
        src: 'service-03.jpg',
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
        textValue: 'From $50',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Power meter and electrical panel service',
        type: 'heading',
      },
      picture: {
        src: 'service-04.jpg',
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
        textValue: 'From $25',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Lightning protection system installations',
        type: 'heading',
      },
      picture: {
        src: 'service-05.jpg',
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
        textValue: 'From $30',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Residential and commercial wiring',
        type: 'heading',
      },
      picture: {
        src: 'service-06.jpg',
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
        textValue: 'From $50',
        type: 'link',
      },
    },
  ],

  title: {
    content: 'Our services',
    type: 'blockTitle',
  },
  'button-1': {
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
    textValue: 'Request a quote',
    type: 'primary',
  },
  'button-2': {
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
  body: {defaultValue: false, label: 'Service main text', type: 'checkbox'},
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: true, label: 'Link', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
