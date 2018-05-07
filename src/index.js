import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Why choose us',
    type: 'blockTitle',
  },
  background: {
    type: 'gradient',
    gradient: {
      angle: -45,
      firstColor: '#5051b4',
      secondColor: '#598eb6',
    },
  },
  why: [
    {
      title: {
        content: 'First Reason',
        type: 'heading',
      },
      description: {
        content: 'As a business owner or manager, the decision to opt for offshore software development can be difficult. As anyone who has experience knows.',
        type: 'text',
      },
      icon: {
        svg:
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g transform="translate(0,-960.36218)"><path style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:1;fill-opacity:1;stroke:none;stroke-width:2;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" d="M 45 23 C 34.402388 23 25.582514 30.8726 24.15625 41.09375 C 14.604712 41.5439 7 49.3354 7 59 C 7 68.9547 15.045297 77 25 77 L 75 77 C 84.954703 77 93 68.9547 93 59 C 93 51.4676 88.44786 45.05891 81.875 42.375 C 80.622696 34.20729 73.494549 28 65 28 C 63.102848 28 61.078358 28.32029 59.28125 28.90625 C 55.536026 25.24441 50.683505 23 45 23 z M 45 25 C 50.358233 25 54.809673 27.11542 58.28125 30.6875 A 1.0001 1.0001 0 0 0 59.34375 30.9375 C 60.94817 30.32834 63.11049 30 65 30 C 72.680544 30 79.099426 35.6812 80 43.09375 A 1.0001 1.0001 0 0 0 80.65625 43.9375 C 86.762817 46.17924 91 52.063 91 59 C 91 67.8813 83.881297 75 75 75 L 25 75 C 16.118703 75 9 67.8813 9 59 C 9 50.1187 16.118705 43 25 43 A 1.0001 1.0001 0 0 0 26 42.09375 C 26.958761 32.50303 35.141972 25 45 25 z M 37.8125 37 A 1.0001 1.0001 0 0 0 37 38 L 37 68 A 1.0001 1.0001 0 0 0 38 69 L 62 69 A 1.0001 1.0001 0 0 0 63 68 L 63 48 A 1.0001 1.0001 0 0 0 62.71875 47.28125 L 52.71875 37.28125 A 1.0001 1.0001 0 0 0 52 37 L 38 37 A 1.0001 1.0001 0 0 0 37.8125 37 z M 39 39 L 51 39 L 51 48 A 1.0000999 1.0000999 0 0 0 52 49 L 61 49 L 61 67 L 39 67 L 39 39 z M 53 40.40625 L 59.59375 47 L 53 47 L 53 40.40625 z " transform="translate(0,952.36218)"/></g></svg>',
        fill: '#fff',
      },
    },
    {
      title: {
        content: 'Second Reason',
        type: 'heading',
      },
      description: {
        content: 'As a business owner or manager, the decision to opt for offshore software development can be difficult. As anyone who has experience knows.',
        type: 'text',
      },
      icon: {
        svg:
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 115"><g transform="translate(-5,-952.36218)"><path style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:1;fill-opacity:1;stroke:none;stroke-width:1.99999988000000010;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" d="M 7.8125 7 A 1.0000999 1.0000999 0 0 0 7 8 L 7 20 A 1.0000999 1.0000999 0 1 0 9 20 L 9 10.40625 L 19.28125 20.6875 A 1.0054782 1.0054782 0 1 0 20.71875 19.28125 L 10.4375 9 L 20 9 A 1.0000999 1.0000999 0 1 0 20 7 L 8 7 A 1.0000999 1.0000999 0 0 0 7.8125 7 z M 79.8125 7 A 1.0043849 1.0043849 0 0 0 80 9 L 89.5625 9 L 79.28125 19.28125 A 1.0054782 1.0054782 0 1 0 80.71875 20.6875 L 91 10.40625 L 91 20 A 1.0000999 1.0000999 0 1 0 93 20 L 93 8 A 1.0000999 1.0000999 0 0 0 92 7 L 80 7 A 1.0000999 1.0000999 0 0 0 79.8125 7 z M 27.8125 27 A 1.0000999 1.0000999 0 0 0 27 28 L 27 72 A 1.0000999 1.0000999 0 0 0 28 73 L 72 73 A 1.0000999 1.0000999 0 0 0 73 72 L 73 28 A 1.0000999 1.0000999 0 0 0 72 27 L 28 27 A 1.0000999 1.0000999 0 0 0 27.8125 27 z M 29 29 L 71 29 L 71 71 L 29 71 L 29 29 z M 7.875 78.96875 A 1.0000999 1.0000999 0 0 0 7 80 L 7 92 A 1.0000999 1.0000999 0 0 0 8 93 L 20 93 A 1.0000999 1.0000999 0 1 0 20 91 L 10.40625 91 L 20.71875 80.6875 A 1.0000999 1.0000999 0 0 0 19.96875 78.96875 A 1.0000999 1.0000999 0 0 0 19.28125 79.28125 L 9 89.5625 L 9 80 A 1.0000999 1.0000999 0 0 0 7.875 78.96875 z M 79.78125 78.96875 A 1.0000999 1.0000999 0 0 0 79.28125 80.6875 L 89.59375 91 L 80 91 A 1.0000999 1.0000999 0 1 0 80 93 L 92 93 A 1.0000999 1.0000999 0 0 0 93 92 L 93 80 A 1.0000999 1.0000999 0 0 0 91.875 78.96875 A 1.0000999 1.0000999 0 0 0 91 80 L 91 89.5625 L 80.71875 79.28125 A 1.0000999 1.0000999 0 0 0 79.875 78.96875 A 1.0000999 1.0000999 0 0 0 79.78125 78.96875 z " transform="translate(0,952.36218)"/></g></svg>',
        fill: '#fff',
      },
    },
    {
      title: {
        content: 'Third Reason',
        type: 'heading',
      },
      description: {
        content: 'As a business owner or manager, the decision to opt for offshore software development can be difficult. As anyone who has experience knows.',
        type: 'text',
      },
      icon: {
        svg:
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 115"><g transform="translate(0,-962.36218)"><path style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:1;fill-opacity:1;stroke:none;stroke-width:2.49999976000000010;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" d="M 32 22 C 24.832143 22 19 27.83214 19 35 C 19 42.16786 24.832143 48 32 48 C 39.167857 48 45 42.16786 45 35 C 45 27.83214 39.167857 22 32 22 z M 85 22 C 80.593566 22 77 25.59357 77 30 C 77 31.270665 77.313771 32.463438 77.84375 33.53125 L 54.4375 49.15625 A 1.0000999 1.0000999 0 0 0 54.4375 50.8125 L 77.84375 66.4375 C 77.306127 67.511423 77 68.719573 77 70 C 77 74.4064 80.593566 78 85 78 C 89.406434 78 93 74.4064 93 70 C 93 65.5935 89.406434 62 85 62 C 82.594505 62 80.435118 63.062781 78.96875 64.75 L 56.8125 49.96875 L 78.9375 35.21875 C 80.404306 36.925632 82.578361 38 85 38 C 89.406434 38 93 34.40644 93 30 C 93 25.59357 89.406434 22 85 22 z M 32 24 C 38.086977 24 43 28.91302 43 35 C 43 41.08698 38.086977 46 32 46 C 25.913023 46 21 41.08698 21 35 C 21 28.91302 25.913023 24 32 24 z M 85 24 C 88.325553 24 91 26.67445 91 30 C 91 33.32556 88.325553 36 85 36 C 81.674446 36 79 33.32556 79 30 C 79 26.67445 81.674446 24 85 24 z M 32 52 C 18.204725 52 7 63.2048 7 77 A 1.0001001 1.0001001 0 0 0 8 78 L 56 78 A 1.0001001 1.0001001 0 0 0 57 77 C 57 63.2048 45.795277 52 32 52 z M 32 54 C 44.373303 54 54.374691 63.759 54.90625 76 L 9.09375 76 C 9.6253087 63.759 19.626699 54 32 54 z M 85 64 C 88.325553 64 91 66.6744 91 70 C 91 73.3255 88.325553 76 85 76 C 81.674446 76 79 73.3255 79 70 C 79 66.6744 81.674446 64 85 64 z " transform="translate(0,952.36218)"/></g></svg>',
        fill: '#fff',
      },
    },
    {
      title: {
        content: 'Fourth Reason',
        type: 'heading',
      },
      description: {
        content: 'As a business owner or manager, the decision to opt for offshore software development can be difficult. As anyone who has experience knows.',
        type: 'text',
      },
      icon: {
        svg:
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" transform="translate(-10,-10)" viewBox="0 0 100 105" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M30.154,43.008h-8c-0.552,0-1,0.448-1,1s0.448,1,1,1h8c0.552,0,1-0.448,1-1S30.707,43.008,30.154,43.008z M26.154,76.6  c-1.053,0-1.91,0.856-1.91,1.91s0.857,1.91,1.91,1.91s1.91-0.856,1.91-1.91S27.208,76.6,26.154,76.6z M87.889,15.407H17.056  c-1.654,0-3,1.346-3,3v21.52h-1.944c-1.654,0-3,1.346-3,3v38.667c0,1.654,1.346,3,3,3h28.086c1.182,0,2.196-0.692,2.685-1.688  h23.331c0.553,0,1-0.447,1-1s-0.447-1-1-1c-6.697,0-6.992-3.879-7.004-4.093l-0.629-6.741h29.309c1.654,0,3-1.346,3-3V18.407  C90.889,16.752,89.543,15.407,87.889,15.407z M41.197,81.594c0,0.552-0.449,1-1,1H12.111c-0.551,0-1-0.448-1-1V42.926  c0-0.551,0.449-1,1-1h28.086c0.551,0,1,0.449,1,1V81.594z M43.197,80.066v-9.994h3.168l-0.633,6.801  C45.732,76.896,45.629,78.894,43.197,80.066z M59.385,80.906H45.594c2.031-1.687,2.133-3.83,2.134-3.907l0.646-6.927h8.197  l0.643,6.867C57.215,76.976,57.325,79.187,59.385,80.906z M88.889,67.072c0,0.552-0.448,1-1,1H43.197v-6.936h45.691V67.072z   M88.889,59.137H43.197v-16.21c0-1.654-1.346-3-3-3H16.056v-21.52c0-0.551,0.449-1,1-1h70.833c0.552,0,1,0.449,1,1V59.137z"/></svg>',
        fill: '#fff',
      },
    },
  ],
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
    textValue: 'More Info',
    type: 'secondary-alt',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
