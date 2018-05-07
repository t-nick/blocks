import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-team/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  title: {
    content: 'team',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.',
    type: 'subtitlte',
  },
  team: [
    {
      name: {
        content: 'Glen Riley',
        type: 'heading',
      },
      position: {
        content: 'Baker',
        type: 'caption',
      },
      description: {
        content:
          'As a global, growing company, we’re able to offer rewarding careers that let you make a positive impact on our customers and communities. ',
        type: 'text',
        color: '#716f6f',
      },
      picture: {
        resourceRef: 'cook-1.png',
        alt: 'Glen Riley photo',
      },
      more: {
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
      email: {
        content: '<a href="mailto:glen.riley@gmail.com">glen.riley@gmail.com</a>',
        type: 'caption',
        color: '#716f6f',
      },
      socialIcons: {
        networks: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'http://instagram.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          offset: 6,
          color: '#ac8670',
          sizes: [34, 68],
          size: 34,
        },
      },
    },
    {
      name: {
        content: 'Anna Doe',
        type: 'heading',
      },
      position: {
        content: 'Baker',
        type: 'caption',
      },
      description: {
        content:
          'As a global, growing company, we’re able to offer rewarding careers that let you make a positive impact on our customers and communities.',
        type: 'text',
      },
      picture: {
        resourceRef: 'cook-2.png',
        alt: 'Anna Doe photo',
      },
      more: {
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
      email: {
        content: '<a href="mailto:glen.riley@gmail.com">glen.riley@gmail.com</a>',
        type: 'caption',
      },
      socialIcons: {
        networks: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'http://instagram.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          color: '#ac8670',
          offset: 6,
          sizes: [34, 68],
          size: 34,
        },
      },
      target: '_blank',
      design: {
        border: null,
        innerFill: true,
        preset: 'preset001',
        offset: 6,
        sizes: [34, 68],
        size: 34,
      },
    },
    {
      name: {
        content: 'John Doe',
        type: 'heading',
      },
      position: {
        content: 'Baker',
        type: 'caption',
      },
      description: {
        content:
          'As a global, growing company, we’re able to offer rewarding careers that let you make a positive impact on our customers and communities.',
        type: 'text',
      },
      picture: {
        resourceRef: 'cook-3.png',
        alt: 'Tomas Abbar photo',
      },
      more: {
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
      email: {
        content: '<a href="mailto:glen.riley@gmail.com">glen.riley@gmail.com</a>',
        type: 'caption',
      },
      socialIcons: {
        networks: [
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'http://instagram.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          offset: 6,
          color: '#ac8670',
          sizes: [34, 68],
          size: 34,
        },
      },
    },
  ],
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
    textValue: 'All Team',
    type: 'secondary',
  },
  background: {
    type: 'gradient',
    gradient: {
      angle: 90,
      firstColor: '#978175',
      secondColor: '#978175',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,

}

export default ExtendedWireframe
