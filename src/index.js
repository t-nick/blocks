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
      ...Component.defaultContent.products[0],
      title: {
        ...Component.defaultContent.products[0].title,
        color: 'light-shade-color',
      },
      icon: {
        ...Component.defaultContent.products[0].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" x="0px" y="0px" viewBox="0 0 128 160" overflow="visible" xml:space="preserve"><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M68,126h-6c0,0-4,0-4-4v-4"/><rect x="55" y="94" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="24" height="24"/><rect x="50" y="80" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="34" height="14"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="81" y1="79" x2="81" y2="73"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="53" y1="79" x2="53" y2="73"/><rect x="46" y="65" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="42" height="8"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M81,64l-4-4V24c0,0,0-4-4-4H61c-4,0-4,4-4,4v36l-4,4"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55" y1="100" x2="79" y2="100"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55" y1="106" x2="79" y2="106"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="55" y1="112" x2="79" y2="112"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57" y1="65" x2="57" y2="73"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="77" y1="65" x2="77" y2="73"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="58" y1="35" x2="76" y2="35"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57" y1="28" x2="76" y2="28"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M71,20V6c0,0-0.1-4-4.1-4H67c-4,0-4.1,4-4.1,4v14"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" x1="67" y1="119" x2="67" y2="120"/></svg>',
      },
    },
    {
      ...Component.defaultContent.products[1],
      title: {
        ...Component.defaultContent.products[1].title,
        color: 'light-shade-color',
      },
      icon: {
        ...Component.defaultContent.products[1].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" x="0px" y="0px" viewBox="0 0 128 160" xml:space="preserve"><g><g><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M105.2,77.3l15-17.8c3.7-5.2,6-11.6,6-18.5c0-17.7-14.3-32-32-32c-5.6,0-10.9,1.4-15.4,4"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M52.3,112.1l1.2,1.4c6.5,8,10.6,8,10.6,8s4.1,0,10.6-8l1.2-1.5"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M57.5,19.5C51.7,13,43.4,9,34,9C16.3,9,2,23.3,2,41c0,6.9,2.3,13.3,6,18.5l14.6,17.4"/></g></g><g><g><ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -32.2329 66.3706)" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="64" cy="72.1" rx="21.9" ry="21.9"/></g><g><ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -32.2329 66.3706)" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="64" cy="72.1" rx="13.6" ry="13.6"/></g><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M67.2,5.9c-2.1,2.1,0,4.3,0,4.3l-5.3,5.3L34.7,42.8c-16.2,16.2-16.2,42.5,0,58.7s42.5,16.2,58.7,0s16.2-42.5,0-58.7   c-2.4-2.4-4.6-4.1-7.3-5.8l3.6-4.4c0,0,2.1,2.1,4.3,0c2.1-2.1,0-4.3,0-4.3L71.5,5.9C71.5,5.9,69.3,3.8,67.2,5.9z"/></g><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="86" y1="37" x2="80" y2="45"/></svg>',
      },
    },
    {
      ...Component.defaultContent.products[2],
      title: {
        ...Component.defaultContent.products[2].title,
        color: 'light-shade-color',
      },
      icon: {
        ...Component.defaultContent.products[2].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" x="0px" y="0px" viewBox="0 0 128 160" xml:space="preserve"><g><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="   M71.5,56.3c2.1,2,3.4,4.8,3.4,7.9C74.9,70.2,70,75,64,75s-10.9-4.9-10.9-10.9S58,53.3,64,53.3c0.1,0,0.2,0,0.3,0"/></g><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M84.8,13.9L84.8,13.9c1.8,0.8,2.7,2.9,2,4.7L67.4,65.5c-0.8,1.8-2.9,2.7-4.7,2h0c-1.8-0.8-2.7-2.9-2-4.7l19.4-46.9  C80.9,14,83,13.1,84.8,13.9z"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M77.5,21.2c-4.3-1.3-8.8-2.1-13.5-2.1c-24.9,0-45,20.1-45,45c0,6.7,1.5,13.1,4.1,18.9"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M104.9,83c2.7-5.7,4.1-12.1,4.1-18.9c0-17.3-9.8-32.3-24.1-39.9"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M64,25"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M57.2,25.6"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="57.9" y1="29.8" x2="57.2" y2="25.6"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M50.6,27.3"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M44.4,30.2"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.5" y1="33.9" x2="44.4" y2="30.2"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M38.8,34.1"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="37.2" y1="41.7" x2="34" y2="39"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M97.9,83.7"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M27.2,50.7"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M100.8,77.6"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.2" y1="52.2" x2="27.2" y2="50.7"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="100.8" y1="77.6" x2="96.7" y2="76.1"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M25.4,57.3"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M102.6,71"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M24.8,64.2"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M103.2,64.2"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="29.1" y1="64.2" x2="24.8" y2="64.2"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="103.2" y1="64.2" x2="98.8" y2="64.2"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M102.6,57.3"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M100.8,50.7"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.2" y1="76.1" x2="27.2" y2="77.6"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="100.8" y1="50.7" x2="96.7" y2="52.2"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M97.9,44.6"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M94,39"/><line fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="94" y1="39" x2="90.7" y2="41.8"/><path fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M89.2,34.1"/><circle fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="64" cy="64" r="62"/></svg>',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
