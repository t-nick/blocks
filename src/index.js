import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '55% 50%',
    },
    resourceRef: 'bg.png',
  },
  why: [
    {
      ...Component.defaultContent.why[0],
      title: {
        ...Component.defaultContent.why[0].title,
        content: '100% Fresh Organic Food',
      },
      description: {
        ...Component.defaultContent.why[0].description,
        content: 'We cooperate with more than 60 farms around the country and provide our clients with the freshest 100% organic food from our farm to your table.',
      },
      icon: {
        svg: '<svg enable-background="new 0 0 57.2 60.8" version="1.1" viewBox="0 0 57.2 60.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m56.5 47.8l-10.6-15c2.3-3.3 3.7-7.4 3.7-11.8-0.1-11.5-9.4-20.7-20.9-20.7s-20.8 9.2-20.8 20.7c0 4.4 1.4 8.4 3.7 11.8l-10.6 15c-0.5 0.6-0.5 1.5-0.1 2.2s1.2 1.1 2 1l9-1.2 1.9 8.9c0.2 0.8 0.8 1.4 1.6 1.5 0.8 0.2 1.6-0.2 2-0.8l11.3-16.1 11.4 16.1c0.4 0.5 1 0.8 1.6 0.8h0.4c0.8-0.2 1.4-0.8 1.6-1.5l1.9-8.9 9 1.2c0.8 0.1 1.6-0.3 2-1s0.3-1.6-0.1-2.2zm-39.8 5.5l-1.3-6.2c-0.2-1-1.2-1.7-2.2-1.6l-6.3 0.8 7.4-10.3c2.9 2.8 6.7 4.8 10.8 5.5l-8.4 11.8zm-4.8-32.3c0-9.3 7.5-16.8 16.8-16.8s16.8 7.6 16.8 16.8-7.5 16.8-16.8 16.8-16.8-7.5-16.8-16.8zm32.4 24.6c-1-0.1-2 0.5-2.2 1.6l-1.4 6.2-8.4-11.9c4.2-0.7 7.9-2.7 10.8-5.5l7.4 10.4-6.2-0.8z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.why[1],
      title: {
        ...Component.defaultContent.why[1].title,
        content: 'Fast & Secure Delivery',
      },
      description: {
        ...Component.defaultContent.why[1].description,
        content: 'We are proud to offer a fast and effective delivery network to supply the highest quality products to your home or office within 48 hours.',
      },
      icon: {
        svg: '<svg enable-background="new 0 0 94.3 72" version="1.1" viewBox="0 0 94.3 72" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m94.5 0.3h-56v13.7h-20.7l-9.1 20-8.2 7v22.8h10.2c1.7 6.1 8 9.8 14.1 8.1 3.9-1.1 7-4.1 8.1-8.1h25.8c1.7 6.1 8 9.8 14.1 8.1 3.9-1.1 7-4.1 8.1-8.1h13.6v-63.5zm-72.8 19.7h16.8v12.7h-22.7l5.9-12.7zm0.2 46.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm48 0c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm18.6-8.5h-7.5c-1.6-6.2-7.8-9.9-14-8.3-4.1 1-7.3 4.2-8.3 8.3h-25.7c-1.6-6.2-7.8-9.9-14-8.3-4.1 1-7.3 4.2-8.3 8.3h-4.2v-14.1l5.7-4.9h76.3v19zm0-25h-44v-26.5h44v26.5z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.why[2],
      title: {
        ...Component.defaultContent.why[2].title,
        content: 'Farming Experience',
      },
      description: {
        ...Component.defaultContent.why[2].description,
        content: 'We are a leading farm with over 14 years of experience in growing high-quality produce and livestock using profitable and healthy organic farming methods.',
      },
      icon: {
        svg: '<svg enable-background="new 0 0 42 44.6" version="1.1" viewBox="0 0 42 44.6" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m32.8 19.4c7.2-1.8 8.9-9.8 8.7-14 0-0.8-0.7-1.4-1.5-1.4h-6.8v-2.3c0-0.8-0.7-1.5-1.5-1.5h-21.4c-0.8 0-1.5 0.7-1.5 1.5v2.3h-6.8c-0.8 0-1.4 0.6-1.5 1.4-0.2 4.2 1.5 12.2 8.7 14 1.3 5 5.2 9.6 10.3 10.3v11.5h-5.9c-0.8 0-1.5 0.7-1.5 1.5s0.7 1.5 1.5 1.5h14.7c0.8 0 1.5-0.7 1.5-1.5s-0.7-1.5-1.5-1.5h-5.9v-11.5c5.2-0.7 9.2-5.4 10.4-10.3zm5.7-12.4c-0.2 2.5-1.1 7.4-5.2 9.1v-9.1h5.2zm-34.9 0h5.2v9.1c-4.2-1.7-5.1-6.7-5.2-9.1zm8.2 9.1v-12.9h18.5v12.9c0 5-4 10.8-9.3 10.8s-9.2-5.8-9.2-10.8z"/></svg>',
        fill: 'brand-color',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
