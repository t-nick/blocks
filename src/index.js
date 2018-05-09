import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: [
    {
      title: {
        content: 'Samsung',
        type: 'heading',
      },
      desc: {
        content:
          'Powered by Shopify, we built Arrive to help reduce the pain felt by millions of online shoppers who currently have to manually track their packages after checkout.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'bellycard.jpg',
          alt: 'logo',
        },
      },
      picture: {
        alt: 'Samsung logo',
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Ford',
        type: 'heading',
      },
      desc: {
        content:
          'Powered by Shopify, we built Arrive to help reduce the pain felt by millions of online shoppers who currently have to manually track their packages after checkout.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'cribspot.jpg',
          alt: 'logo',
        },
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Medical Family',
        type: 'heading',
      },
      desc: {
        content:
          'Powered by Shopify, we built Arrive to help reduce the pain felt by millions of online shoppers who currently have to manually track their packages after checkout.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'riddicks.jpg',
          alt: 'logo',
        },
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content:
          'Powered by Shopify, we built Arrive to help reduce the pain felt by millions of online shoppers who currently have to manually track their packages after checkout.',
        type: 'text',
      },
      logo: {
        image: {
          resourceRef: 'spry.jpg',
          alt: 'logo',
        },
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
        type: 'link',
      },
    },
  ],
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.',
    type: 'subtitle',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  'top-caption': {
    content: 'vitae sapien ut libero',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  logo: {
    defaultValue: true,
    label: 'Logo',
    type: 'checkbox',
  },
  subtitle: {
    defaultValue: true,
    label: 'Partner description',
    type: 'checkbox',
  },
  body: {defaultValue: true, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: true, label: 'Partner link', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
