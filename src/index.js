import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  articles: [
    {
      ...Component.defaultContent.articles[0],
      title: {
        ...Component.defaultContent.articles[0].title,
        content: 'Products',
        type: 'heading',
      },
      icon: {
        svg: "<svg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns#' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' version='1.1' x='0px' y='0px' viewBox='0 0 100 125'><g transform='translate(0,-952.36218)'><path style='text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#58c56f;enable-background:accumulate;' d='m 8.0106173,963.36219 c -1.1046,0 -2,0.89543 -2,2 0,1.10457 0.8954,2 2,2 l 10.6561997,0 c 5.1117,12.63923 10.1269,25.30363 15.1876,37.96881 l -4.6876,11.2499 c -0.5137,1.2112 0.5282,2.7829 1.8438,2.7813 l 50,0 c 1.0566,0.015 2.0285,-0.9433 2.0285,-2 0,-1.0568 -0.9719,-2.015 -2.0285,-2 l -47,0 3.375,-8.125 48.7812,-3.9062 c 0.834,-0.069 1.5879,-0.7171 1.7813,-1.5313 l 6,-26.00001 c 0.2601,-1.16072 -0.748,-2.429 -1.9375,-2.4375 l -66.6562,0 -3.5,-8.75 c -0.2954,-0.73003 -1.0563,-1.24591 -1.8438,-1.25 z m 18.9374997,14 21.0625,0 0,11 -16.6562,0 z m 25.0625,0 14,0 0,11 -14,0 z m 18,0 19.5,0 -2.5625,11 -16.9375,0 z m -37.0625,15 15.0625,0 0,10.03131 -10.6875,0.8437 z m 19.0625,0 14,0 0,8.59381 -14,1.125 z m 18,0 16.0312,0 -1.6562,7.12499 -14.375,1.15632 z m -29,31.00001 c -4.9468,0 -9,4.0531 -9,9 0,4.9469 4.0532,9 9,9 4.9469,0 9,-4.0531 9,-9 0,-4.9469 -4.0531,-9 -9,-9 z m 30,0 c -4.9469,0 -9,4.0531 -9,9 0,4.9469 4.0531,9 9,9 4.9468,0 9,-4.0531 9,-9 0,-4.9469 -4.0532,-9 -9,-9 z m -30,4 c 2.7851,0 5,2.2149 5,5 0,2.7851 -2.2149,5 -5,5 -2.785,0 -5,-2.2149 -5,-5 0,-2.7851 2.215,-5 5,-5 z m 30,0 c 2.785,0 5,2.2149 5,5 0,2.7851 -2.215,5 -5,5 -2.7851,0 -5,-2.2149 -5,-5 0,-2.7851 2.2149,-5 5,-5 z' fill='#58c56f' fill-opacity='1' stroke='#58c56f' marker='none' visibility='visible' display='inline' overflow='visible'/></g><text x='0' y='115' fill='#58c56f' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'>Created by Alfa Design</text><text x='0' y='120' fill='#58c56f' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'>from the Noun Project</text></svg>",
        fill: '#58c56f',
      },
      description: {
        ...Component.defaultContent.articles[0].description,
        content: 'We offer a wide range of seasonal fruits,<br/>vegetables, grass-fed meats and poultry.',
        type: 'text',
      },
    },
    {
      ...Component.defaultContent.articles[1],
      title: {
        ...Component.defaultContent.articles[1].title,
        content: 'Order',
        type: 'heading',
      },
      icon: {
        ...Component.defaultContent.articles[1].icon,
        svg: "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' style='enable-background:new 0 0 100 100;' xml:space='preserve'><g><path d='M21,86.5h50c7.7,0,14-6.3,14-14v-3.1c3.4-0.5,6-3.4,6-6.9v-12c0-3.5-2.6-6.4-6-6.9v-3.1c0-7.7-6.3-14-14-14h-2.3l-0.9-5.7   c-0.3-2-1.4-3.7-3.1-4.8c-1.7-1.1-3.8-1.4-5.7-0.8L18.7,26.6c-0.2,0.1-0.4,0.2-0.6,0.3c-5.2,1.3-9.1,6-9.1,11.6v36   C9,81.1,14.4,86.5,21,86.5z M87,50.5v12c0,1.7-1.3,3-3,3H72c-5,0-9-4-9-9s4-9,9-9h12C85.7,47.5,87,48.8,87,50.5z M60.1,19   c0.8-0.2,1.7-0.1,2.4,0.4c0.7,0.5,1.2,1.2,1.3,2.1l0.8,5.1H33.6L60.1,19z M13,38.5c0-4.4,3.6-8,8-8h50c5.5,0,10,4.5,10,10v3h-9   c-7.2,0-13,5.8-13,13s5.8,13,13,13h9v3c0,5.5-4.5,10-10,10H21c-4.4,0-8-3.6-8-8V38.5z'/><path d='M74,50.5c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S77.3,50.5,74,50.5z M74,58.5c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2   S75.1,58.5,74,58.5z'/></g><text x='0' y='115' fill='#58c56f' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'>Created by Agni</text><text x='0' y='120' fill='#58c56f' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'>from the Noun Project</text></svg>",
        fill: '#58c56f',
      },
      description: {
        ...Component.defaultContent.articles[1].description,
        content: 'Choose the products and the box size you need<br/>and schedule the delivery time and location.',
        type: 'text',
      },
    },
    {
      ...Component.defaultContent.articles[2],
      title: {
        ...Component.defaultContent.articles[2].title,
        content: 'Delivery',
        type: 'heading',
      },
      icon: {
        ...Component.defaultContent.articles[2].icon,
        svg: "<svg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns#' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' version='1.1' x='0px' y='0px' viewBox='0 0 100 125'><g transform='translate(0,-952.36218)'><path style='text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#58c56f;enable-background:accumulate;' d='m 50,961.37766 c -14.2696,0 -26,11.1275 -26,27 0,5.7475 1.5329,11.90344 4.0312,16.53134 l 20.2188,37.4062 a 2.0001998,2.0001998 0 0 0 3.5,0 L 71.9688,1004.909 C 74.4672,1000.2809 76,994.12506 76,988.37766 c 0,-15.8725 -11.7304,-27 -26,-27 z m 0,4 c 12.24,0 22,9.0491 22,23 0,5.0012 -1.4578,10.7264 -3.5625,14.62504 L 50,1037.1589 31.5625,1003.0027 C 29.4579,999.10426 28,993.37876 28,988.37766 c 0,-13.9509 9.76,-23 22,-23 z m 0,9 c -7.156,0 -13,5.8441 -13,13 0,7.156 5.844,13.00004 13,13.00004 7.156,0 13,-5.84404 13,-13.00004 0,-7.1559 -5.844,-13 -13,-13 z m 0,4 c 4.9942,0 9,4.0059 9,9 0,4.9942 -4.0058,9 -9,9 -4.9942,0 -9,-4.0058 -9,-9 0,-4.9941 4.0058,-9 9,-9 z' fill='#58c56f' fill-opacity='1' stroke='none' marker='none' visibility='visible' display='inline' overflow='visible'/></g><text x='0' y='115' fill='#58c56f' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'>Created by Three Six Five</text><text x='0' y='120' fill='#58c56f' font-size='5px' font-weight='bold' font-family=''Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif'>from the Noun Project</text></svg>",
        fill: '#58c56f',
      },
      description: {
        ...Component.defaultContent.articles[2].description,
        content: 'We offer fast and safe delivery of our organic<br/>products from our farm to your home or office.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'What We Offer',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
