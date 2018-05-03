import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  // background: {
  //   type: 'image',
  //   position: {
  //     type: 'cover',
  //     cover: '55% 50%',
  //   },
  //   resourceRef: 'bg.png',
  // },
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
        ...Component.defaultContent.why[0].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M77.8,67.6l-10.6-15c2.3-3.3,3.7-7.4,3.7-11.8C70.8,29.3,61.5,20,50,20c-11.5,0-20.8,9.3-20.8,20.8c0,4.4,1.4,8.4,3.7,11.8  l-10.6,15c-0.5,0.6-0.5,1.5-0.1,2.2c0.4,0.7,1.2,1.1,2,1l9-1.2l1.9,8.9c0.2,0.8,0.8,1.4,1.6,1.5c0.8,0.2,1.6-0.2,2-0.8L50,63.1  l11.4,16.1c0.4,0.5,1,0.8,1.6,0.8c0.1,0,0.3,0,0.4,0c0.8-0.2,1.4-0.8,1.6-1.5l1.9-8.9l9,1.2c0.8,0.1,1.6-0.3,2-1  C78.3,69.1,78.2,68.2,77.8,67.6z M38,73.1l-1.3-6.2c-0.2-1-1.2-1.7-2.2-1.6l-6.3,0.8l7.4-10.4c2.9,2.8,6.7,4.8,10.8,5.5L38,73.1z   M33.2,40.8C33.2,31.5,40.7,24,50,24s16.8,7.5,16.8,16.8c0,9.3-7.5,16.8-16.8,16.8S33.2,50.1,33.2,40.8z M65.6,65.3  c-1-0.1-2,0.5-2.2,1.6L62,73.1l-8.4-11.9c4.2-0.7,7.9-2.7,10.8-5.5l7.4,10.4L65.6,65.3z"/></svg>',
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
        ...Component.defaultContent.why[1].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px"><path data-name="Compound Path" d="M97,14H41V27.8H20.3L11.2,47.7,3,54.7V77.5H13.2a11.5,11.5,0,0,0,22.2,0H61.2a11.5,11.5,0,0,0,22.2,0H97ZM24.2,33.8H41V46.5H18.3ZM24.4,80a5.5,5.5,0,1,1,5.5-5.5A5.5,5.5,0,0,1,24.4,80Zm48,0a5.5,5.5,0,1,1,5.5-5.5A5.5,5.5,0,0,1,72.4,80ZM91,71.5H83.5a11.5,11.5,0,0,0-22.3,0H35.5a11.5,11.5,0,0,0-22.3,0H9V57.4l5.7-4.9H91Zm0-25H47V20H91Z"/></svg>',
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
        ...Component.defaultContent.why[2].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="tiny" x="0px" y="0px" viewBox="0 0 100 125" xml:space="preserve"><path d="M61.813,47.178c7.246-1.791,8.872-9.826,8.685-13.979c-0.035-0.802-0.696-1.433-1.498-1.433h-6.75v-2.291  c0-0.828-0.672-1.5-1.5-1.5h-21.5c-0.828,0-1.5,0.672-1.5,1.5v2.291H31c-0.802,0-1.463,0.631-1.498,1.433  c-0.188,4.152,1.438,12.188,8.685,13.979c1.26,4.955,5.198,9.569,10.313,10.341v11.506h-5.875c-0.828,0-1.5,0.672-1.5,1.5  s0.672,1.5,1.5,1.5h14.75c0.828,0,1.5-0.672,1.5-1.5s-0.672-1.5-1.5-1.5H51.5V57.519C56.615,56.747,60.554,52.133,61.813,47.178z   M67.457,34.767c-0.188,2.455-1.095,7.363-5.207,9.126v-0.001v-9.125H67.457z M32.533,34.767h5.217v9.125c0,0.002,0,0.003,0,0.005  C33.591,42.136,32.706,37.229,32.533,34.767z M40.75,43.892V30.976h18.5v12.916c0,4.972-4.041,10.75-9.25,10.75  S40.75,48.863,40.75,43.892z"/></svg>',
        fill: 'brand-color',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
