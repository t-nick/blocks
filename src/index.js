import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  numbers: [
    {
      title: {
        content: 'Increase profits by',
        type: 'subtitle',
      },
      label: {
        content: 'Increase in conversion for a redesigned financial services website',
        type: 'text',
      },
      value: {
        content: '128',
        type: 'blockTitle',
        color: '#1e252f',
      },
    },
    {
      title: {
        content: 'Expand market reach for',
        type: 'subtitle',
      },
      label: {
        content: "Boost in sales with a redesigned tile manufacturer's website",
        type: 'text',
      },
      value: {
        content: '527',
        type: 'blockTitle',
        color: '#1e252f',
      },
    },
    {
      title: {
        content: 'Improve customer satisfaction for',
        type: 'subtitle',
      },
      label: {
        content: "Customer satisfaction rating for an insurance provider's website",
        type: 'text',
      },
      value: {
        content: '92',
        type: 'blockTitle',
        color: '#1e252f',
      },
    },
  ],
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Our Results in Numbers',
    type: 'blockTitle',
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
  body: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'number-title': {
    defaultValue: false,
    label: 'Additional information on numbers',
    type: 'checkbox',
  },
  title: {defaultValue: false, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
