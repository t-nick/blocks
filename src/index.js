import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'First Service',
        type: 'heading',
        color: 'light-shade-color',
      },
      text: {
        content: 'The Emerald Buddha is a figurine sitting Budha, that is the is the palladium of the Kingdom of Thailand. The Buddha is made of green jade, suprisingly not of emerald, clothed in gold is approximately 45 cm tall.',
        type: 'text',
        color: 'light-shade-color',
      },
      picture: {
        resourceRef: 'depositphotos-10545110-original.png',
        alt: 'Quantum E-commerce illustration',
      },
      cta: {
        ...Component.defaultContent.services[0].cta,
        textValue: 'Main button (M)',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Second Service',
        type: 'heading',
        color: 'light-shade-color',
      },
      text: {
        content: 'The preservation of human life is the ultimate value, a pillar of ethics and the foundation of all morality. This held true in most cultures and societies throughout history. On first impression, the last sentence sounds',
        type: 'text',
        color: 'light-shade-color',
      },
      picture: {
        resourceRef: 'depositphotos-173481506-original.png',
        alt: 'Quantum Aftersales illustration',
      },
      cta: {
        ...Component.defaultContent.services[0].cta,
        textValue: 'Main button (M)',
        type: 'primary',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    textValue: 'Additional button (L)',
    type: 'secondary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
