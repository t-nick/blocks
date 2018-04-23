import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-pricing/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  products: [
    {
      title: {
        content: 'Basic',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      price: {
        content: 'Free',
        type: 'headingLg',
        color: 'var(--ui-heading-color)',
      },
      'price-info': {
        content: 'For all period',
        type: 'caption',
        brightness: 50,
      },
      body: {
        content: '100 max connections<br>unlimited channels<br>200k messages / day',
        type: 'text',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76" height="75" viewBox="0 0 76 75"><image id="box.svg" width="76" height="75" xlink:href="data:img/png;base64,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"/></svg>',
      },
      cta: {
        textValue: 'Main button (M)',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Semi',
        type: 'heading',
      },
      price: {
        content: '$50',
        type: 'headingLg',
        color: 'var(--ui-heading-color)',
      },
      'price-info': {
        content: 'per month',
        type: 'caption',
        brightness: 50,
      },
      body: {
        content: '100 max connections<br>unlimited channels<br>200k messages / day',
        type: 'text',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76" height="76" viewBox="0 0 76 76"><image id="gift.svg" width="76" height="76" xlink:href="data:img/png;base64,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"/></svg>',
      },
      cta: {
        textValue: 'Main button (M)',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Pro',
        type: 'heading',
      },
      price: {
        content: '$100',
        type: 'headingLg',
        color: 'var(--ui-heading-color)',
      },
      'price-info': {
        content: 'per month',
        type: 'caption',
        brightness: 50,
      },
      body: {
        content: '100 max connections<br>unlimited channels<br>200k messages / day',
        type: 'text',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76" height="76" viewBox="0 0 76 76"><image id="rocket.svg" width="76" height="76" xlink:href="data:img/png;base64,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"/></svg>',
      },
      cta: {
        textValue: 'Main button (M)',
        type: 'primary',
      },
    },
  ],
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of',
    color: 'var(--ui-dark-shade-color)',
  },
  button: {
    ...Component.defaultContent.button,
    textValue: 'Additional button (M)',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
