import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  articles: [
    {
      id: 'f822d787-b3e2-432d-a03e-689c58efb302',
      title: {
        content: 'Road Transportation',
        type: 'heading',
      },
      icon: {
        svg:
          `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 30" style="enable-background:new 0 0 24 30;" xml:space="preserve">
            <path d="M22,22H2c-0.3,0-0.5-0.2-0.5-0.5v-2C1.5,19.2,1.7,19,2,19h20c0.3,0,0.5,0.2,0.5,0.5v2C22.5,21.8,22.3,22,22,22z M2.5,21 h19v-1h-19V21z"/>
            <path d="M21,20c-0.3,0-0.5-0.2-0.5-0.5v-2c0-0.8-0.7-1.5-1.5-1.5c-0.3,0-0.5-0.2-0.5-0.5v-8C18.5,6.7,17.8,6,17,6H7 C6.2,6,5.5,6.7,5.5,7.5v8C5.5,15.8,5.3,16,5,16c-0.8,0-1.5,0.7-1.5,1.5v2C3.5,19.8,3.3,20,3,20s-0.5-0.2-0.5-0.5v-2 c0-1.2,0.9-2.2,2-2.4V7.5C4.5,6.1,5.6,5,7,5h10c1.4,0,2.5,1.1,2.5,2.5v7.6c1.1,0.2,2,1.2,2,2.4v2C21.5,19.8,21.3,20,21,20z"/>
            <path d="M17,12H7c-0.3,0-0.5-0.2-0.5-0.5v-3C6.5,7.7,7.2,7,8,7h8c0.8,0,1.5,0.7,1.5,1.5v3C17.5,11.8,17.3,12,17,12z M7.5,11h9V8.5 C16.5,8.2,16.3,8,16,8H8C7.7,8,7.5,8.2,7.5,8.5V11z"/>
            <path d="M12,12c-0.3,0-0.5-0.2-0.5-0.5v-4C11.5,7.2,11.7,7,12,7s0.5,0.2,0.5,0.5v4C12.5,11.8,12.3,12,12,12z"/>
            <path d="M17,18H7c-0.3,0-0.5-0.2-0.5-0.5v-4C6.5,13.2,6.7,13,7,13h10c0.3,0,0.5,0.2,0.5,0.5v4C17.5,17.8,17.3,18,17,18z M7.5,17h9v-3h-9V17z"/>
            <path d="M21,20c-0.3,0-0.5-0.2-0.5-0.5v-18C20.5,1.2,20.3,1,20,1H4C3.7,1,3.5,1.2,3.5,1.5v18C3.5,19.8,3.3,20,3,20 s-0.5-0.2-0.5-0.5v-18C2.5,0.7,3.2,0,4,0h16c0.8,0,1.5,0.7,1.5,1.5v18C21.5,19.8,21.3,20,21,20z"/>
            <path d="M8,6C7.2,6,6.5,5.3,6.5,4.5S7.2,3,8,3s1.5,0.7,1.5,1.5S8.8,6,8,6z M8,4C7.7,4,7.5,4.2,7.5,4.5S7.7,5,8,5s0.5-0.2,0.5-0.5 S8.3,4,8,4z"/>
            <path d="M16,6c-0.8,0-1.5-0.7-1.5-1.5S15.2,3,16,3s1.5,0.7,1.5,1.5S16.8,6,16,6z M16,4c-0.3,0-0.5,0.2-0.5,0.5S15.7,5,16,5 c0.3,0,0.5-0.2,0.5-0.5S16.3,4,16,4z"/>
            <path d="M2,9C1.7,9,1.5,8.8,1.5,8.5v-1C1.5,6.7,2.2,6,3,6h2c0.3,0,0.5,0.2,0.5,0.5S5.3,7,5,7H3C2.7,7,2.5,7.2,2.5,7.5v1 C2.5,8.8,2.3,9,2,9z"/>
            <path d="M3,13H1c-0.3,0-0.5-0.2-0.5-0.5v-4C0.5,8.2,0.7,8,1,8h2c0.3,0,0.5,0.2,0.5,0.5v4C3.5,12.8,3.3,13,3,13z M1.5,12h1V9h-1V12 z"/>
            <path d="M22,9c-0.3,0-0.5-0.2-0.5-0.5v-1C21.5,7.2,21.3,7,21,7h-2c-0.3,0-0.5-0.2-0.5-0.5S18.7,6,19,6h2c0.8,0,1.5,0.7,1.5,1.5v1 C22.5,8.8,22.3,9,22,9z"/>
            <path d="M23,13h-2c-0.3,0-0.5-0.2-0.5-0.5v-4C20.5,8.2,20.7,8,21,8h2c0.3,0,0.5,0.2,0.5,0.5v4C23.5,12.8,23.3,13,23,13z M21.5,12 h1V9h-1V12z"/>
            <path d="M7,24H3c-0.3,0-0.5-0.2-0.5-0.5v-2C2.5,21.2,2.7,21,3,21s0.5,0.2,0.5,0.5V23h3v-1.5C6.5,21.2,6.7,21,7,21s0.5,0.2,0.5,0.5 v2C7.5,23.8,7.3,24,7,24z"/>
            <path d="M21,24h-4c-0.3,0-0.5-0.2-0.5-0.5v-2c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V23h3v-1.5c0-0.3,0.2-0.5,0.5-0.5 s0.5,0.2,0.5,0.5v2C21.5,23.8,21.3,24,21,24z"/><path d="M5,20c-1.4,0-2.5-1.1-2.5-2.5S3.6,15,5,15s2.5,1.1,2.5,2.5S6.4,20,5,20z M5,16c-0.8,0-1.5,0.7-1.5,1.5S4.2,19,5,19 s1.5-0.7,1.5-1.5S5.8,16,5,16z"/>
            <path d="M19,20c-1.4,0-2.5-1.1-2.5-2.5S17.6,15,19,15s2.5,1.1,2.5,2.5S20.4,20,19,20z M19,16c-0.8,0-1.5,0.7-1.5,1.5 S18.2,19,19,19s1.5-0.7,1.5-1.5S19.8,16,19,16z"/>
          </svg>`,
        fill: 'dark-accent-color',
      },
    },
    {
      id: '18ce5632-46d1-4c9e-b249-ca0e37f665c2',
      title: {
        content: 'Air Transportation',
        type: 'heading',
      },
      icon: {
        svg:
          `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 125;" xml:space="preserve">
            <path d="M42,52.1H9.8c-3.6,0-6.4-2.9-6.4-6.4c0-0.8,0.2-1.7,0.5-2.5l0.4-0.9h36.2l0,1.5c0,0.2,0,0.3,0,0.5c0,0.1,0,0.2,0,0.3 c0,1.9,0.3,3.8,1,5.6L42,52.1z M6.3,45.1c0,0.2,0,0.3,0,0.5c0,2,1.6,3.6,3.6,3.6H38c-0.3-1.4-0.5-2.7-0.6-4.1H6.3z"/>
            <path d="M90.2,52.1H58l0.7-1.9c0.7-1.8,1-3.7,1-5.6c0-0.1,0-0.2,0-0.3l-0.1-1.9h36.2l0.4,0.9c0.3,0.8,0.5,1.6,0.5,2.5 C96.6,49.2,93.7,52.1,90.2,52.1z M62,49.3h28.2c2,0,3.6-1.6,3.6-3.6c0-0.2,0-0.3,0-0.5H62.5C62.5,46.5,62.3,47.9,62,49.3z"/>
            <path d="M53.3,43.9H47c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5h6.3c1.9,0,3.5,1.6,3.5,3.5C56.8,42.3,55.2,43.9,53.3,43.9z  M47,39.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h6.3c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7H47z"/>
            <path d="M54.7,32.9l-2-0.8c-1.9-0.8-3.2-0.9-5.3-0.1l-1.9,0.7V20.4c0-2.5,2-4.6,4.6-4.6s4.6,2,4.6,4.6V32.9z M50,28.6 c0.6,0,1.2,0.1,1.9,0.2v-8.4c0-1-0.8-1.7-1.7-1.7c-1,0-1.7,0.8-1.7,1.7v8.3C49,28.7,49.5,28.6,50,28.6z"/>
            <path d="M50,60.5c-6.9,0-12.5-7.1-12.5-15.9S43.1,28.6,50,28.6c6.9,0,12.5,7.1,12.5,15.9S56.9,60.5,50,60.5z M50,31.5 c-5.4,0-9.7,5.9-9.7,13.1c0,7.2,4.4,13.1,9.7,13.1s9.7-5.9,9.7-13.1C59.7,37.3,55.4,31.5,50,31.5z"/>
            <path d="M64.2,38.6h-5.6l-0.4-0.8c-0.9-2.1-2.3-3.8-4-4.9l-3.9-2.6h19.3c0.8,0,1.5,0.3,2,0.8c0.9,0.9,0.9,2.1,0.8,3.2 C72.6,37.9,64.3,38.6,64.2,38.6z M60.4,35.8h3.8c1.4,0,4.8-0.9,5.6-1.6c0-0.5,0-1.1-0.1-1.2l-11,0.1C59.3,33.9,59.9,34.8,60.4,35.8 z"/>
            <path d="M41.3,38.6h-5.6c-0.1,0-8.4-0.7-8.4-4.2c0-1.3,0-2.5,0.9-3.4c0.5-0.5,1.2-0.8,2-0.8h19.3l-3.9,2.6c-1.7,1.1-3,2.8-4,4.9 L41.3,38.6z M30.2,34.2c0.8,0.7,4.2,1.6,5.6,1.6h3.8c0.5-1,1.1-1.9,1.8-2.7h-11C30.2,33.1,30.2,33.7,30.2,34.2z"/>
            <path d="M32.1,60.5c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6S35.2,60.5,32.1,60.5z M32.1,52.1 c-1.5,0-2.8,1.2-2.8,2.8c0,1.5,1.2,2.8,2.8,2.8c1.5,0,2.8-1.2,2.8-2.8C34.9,53.3,33.6,52.1,32.1,52.1z"/>
            <path d="M19.8,60.5c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6S22.8,60.5,19.8,60.5z M19.8,52.1 c-1.5,0-2.8,1.2-2.8,2.8c0,1.5,1.2,2.8,2.8,2.8c1.5,0,2.8-1.2,2.8-2.8C22.5,53.3,21.3,52.1,19.8,52.1z"/>
            <path d="M80.6,60.5c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6S83.7,60.5,80.6,60.5z M80.6,52.1 c-1.5,0-2.8,1.2-2.8,2.8c0,1.5,1.2,2.8,2.8,2.8c1.5,0,2.8-1.2,2.8-2.8C83.3,53.3,82.1,52.1,80.6,52.1z"/>
            <path d="M68.2,60.5c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6S71.3,60.5,68.2,60.5z M68.2,52.1 c-1.5,0-2.8,1.2-2.8,2.8c0,1.5,1.2,2.8,2.8,2.8c1.5,0,2.8-1.2,2.8-2.8C71,53.3,69.7,52.1,68.2,52.1z"/>
            <rect x="44.2" y="57.9" width="2.8" height="4.6"/>
            <rect x="53.6" y="57.9" width="2.8" height="4.6"/>
            <path d="M48.1,66.2c0,1.1-1.1,2-2.5,2l0,0c-1.4,0-2.5-0.9-2.5-2V63c0-1.1,1.1-2,2.5-2l0,0c1.4,0,2.5,0.9,2.5,2V66.2z"/>
            <path d="M57.5,66.2c0,1.1-1.1,2-2.5,2l0,0c-1.4,0-2.5-0.9-2.5-2V63c0-1.1,1.1-2,2.5-2l0,0c1.4,0,2.5,0.9,2.5,2V66.2z"/>
            <rect x="4.8" y="74.3" width="90.4" height="2.8"/>
            <rect x="20.8" y="81.3" width="44.5" height="2.8"/>
            <rect x="71.8" y="81.3" width="7.1" height="2.8"/>
          </svg>`,
        fill: 'dark-accent-color',
      },
    },
    {
      id: '7986b4e0-751f-48f6-8861-5ace080e284b',
      title: {
        content: 'Ocean Transportation',
        type: 'heading',
      },
      icon: {
        svg:
          `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160 200" style="enable-background:new 0 0 160 200;" xml:space="preserve">
            <path d="M125,147.2l12.8-26.3l0,0c0.3-0.5,0.4-1.1,0.4-1.7v-28V64c0-2.1-1.7-3.9-3.9-3.9H111V36.8c0-2.1-1.7-3.9-3.9-3.9h-9.4V22.6 h19.4v-7.8H93.9h-10V5h-7.8v9.9h-10H42.8v7.8h19.4V33h-9.4c-2.1,0-3.9,1.7-3.9,3.9v23.3H25.7c-2.1,0-3.9,1.7-3.9,3.9v27.2v28.1 c0,0.6,0.2,1.2,0.4,1.7l0,0L35,147.2H12.1v7.8h29.1h77.6h29.1v-7.8H125z M29.6,95h23.3H80h27.2h23.3v21.5c-32.6,11-68.2,11-100.9,0 C29.6,116.5,29.6,95,29.6,95z M56.7,67.9h19.4v19.4H56.7V67.9z M83.9,67.9h19.4v19.4H83.9V67.9z M130.4,67.9v19.4H111V67.9H130.4z M103.3,60.1H83.9V40.7h10h9.4V60.1z M70,22.6h20V33H80H70V22.6z M56.7,40.7h9.4h10v19.4H56.7V40.7z M29.6,67.9H49v19.4H29.6V67.9z M43.6,147.2l-10.5-21.5c15.3,4.5,31,6.8,46.8,6.8s31.6-2.3,46.8-6.8l-10.5,21.5H43.6z"/>
          </svg>`,
        fill: 'dark-accent-color',
      },
    },
  ],
  title: {
    content: 'Related Transportation Services',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'item-description': {defaultValue: false, label: 'Advantages description', type: 'hidden'},
}

export default ExtendedWireframe
