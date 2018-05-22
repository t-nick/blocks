import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },
  articles: [
    {
      ...Component.defaultContent.articles[0],
      icon: {
        ...Component.defaultContent.articles[0].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 80 90" xml:space="preserve"><path d="M63,44c-1.8,0-3.6-0.7-4.9-2c-2.7-2.7-2.7-7.1,0-9.8c1.3-1.3,3-2,4.9-2c1.8,0,3.6,0.7,4.9,2c1.3,1.3,2,3,2,4.9  s-0.7,3.6-2,4.9l0,0C66.6,43.2,64.8,44,63,44z M63,33.1c-1,0-2,0.4-2.8,1.1c-1.5,1.5-1.5,4,0,5.5c1.5,1.5,4.1,1.5,5.5,0l0,0  c0.7-0.7,1.1-1.7,1.1-2.8s-0.4-2-1.1-2.8S64,33.1,63,33.1z M42.5,65.2c-3.2,3.2-4.2,3.7-10.7,6.7c-1.8,0.9-4.2,1.9-7.1,3.3  c1.4-3,2.5-5.3,3.4-7.1c3-6.5,3.5-7.5,6.7-10.7c0.7-0.7,1.6-1.2,2.5-1.4l-2.3-2.3c-0.8,0.4-1.6,1-2.3,1.6c-3.6,3.6-4.2,5-7.3,11.5  c-1.2,2.6-2.8,6.1-5.2,11c-0.3,0.6-0.2,1.3,0.3,1.7c0.3,0.3,0.7,0.4,1.1,0.4c0.2,0,0.4,0,0.7-0.2c4.8-2.4,8.4-4,11-5.2  c6.6-3.1,8-3.7,11.5-7.3c0.7-0.7,1.2-1.5,1.6-2.3l-2.3-2.3C43.7,63.6,43.2,64.5,42.5,65.2z M33.7,39l9.7-1.3l3.5-3.5l-16.6,2.2  c-0.6,0.1-1,0.5-1.2,1c-0.2,0.5,0,1.1,0.4,1.5l6.4,6.4l2.1-2.1L33.7,39z M61,66.4l-4.2-4.2l-2.1,2.1l6.4,6.4  c0.3,0.3,0.7,0.4,1.1,0.4c0.2,0,0.3,0,0.5-0.1c0.5-0.2,0.9-0.7,1-1.2l2.2-16.6l-3.5,3.5L61,66.4z M77.4,20.1L69,20.7  c-3.9,0.3-7.6,2-10.4,4.8L35.1,48.9c-0.3,0.3-0.4,0.7-0.4,1.1c0,0.4,0.2,0.8,0.4,1.1L49.1,65c0.3,0.3,0.7,0.4,1.1,0.4  s0.8-0.1,1.1-0.4l23.5-23.5c2.8-2.8,4.5-6.5,4.8-10.4l0.6-8.4c0-0.7-0.2-1.4-0.7-1.9C78.8,20.3,78.1,20,77.4,20.1z M76.4,30.8  c-0.2,3.2-1.6,6.3-3.9,8.5L50.1,61.8L38.3,49.9l22.4-22.4c2.3-2.3,5.3-3.7,8.5-3.9l7.7-0.5L76.4,30.8z"/></svg>',
        fill: 'brand-color',
      },
      title: {
        ...Component.defaultContent.articles[0].title,
        color: 'light-shade-color',
      },
    },
    {
      ...Component.defaultContent.articles[1],
      icon: {
        ...Component.defaultContent.articles[1].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 66.25" version="1.1" x="0px" y="0px"><title>Group 49</title><desc>Created with Sketch.</desc><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(-1073.000000, -1075.000000)" stroke="#000000" stroke-width="2"><g transform="translate(1074.000000, 1076.000000)"><polygon points="10 18.5 20.5 10 31 18.5 20.5 27"/><polyline points="9 25 21 35 33 25"/><polyline points="9 32 21 42 33 32"/><g transform="translate(31.000000, 1.000000)"><path d="M0,9 L7.5,1.5"/><polyline points="3 0 9 0 9 6"/></g><g transform="translate(5.500000, 5.500000) rotate(-92.000000) translate(-5.500000, -5.500000) translate(1.000000, 1.000000)"><path d="M0,9 L7.5,1.5"/><polyline points="3 0 9 0 9 6"/></g><g transform="translate(35.500000, 45.500000) scale(1, -1) translate(-35.500000, -45.500000) translate(31.000000, 41.000000)"><path d="M0,9 L7.5,1.5"/><polyline points="3 0 9 0 9 6"/></g><g transform="translate(5.500000, 45.500000) scale(1, -1) rotate(-92.000000) translate(-5.500000, -45.500000) translate(1.000000, 41.000000)"><path d="M0,9 L7.5,1.5"/><polyline points="3 0 9 0 9 6"/></g></g></g></g></svg>',
        fill: 'brand-color',
      },
      title: {
        ...Component.defaultContent.articles[1].title,
        color: 'light-shade-color',
      },
    },
    {
      ...Component.defaultContent.articles[2],
      icon: {
        ...Component.defaultContent.articles[2].icon,
        fill: 'brand-color',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M86.653,93.944H18.284c-0.035,0-0.07-0.001-0.104-0.003c-0.227-0.014-5.58-0.411-8.672-7.267  c-0.734-1.625-0.93-4.683-0.961-5.28L8.544,15.347c0-5.123,4.329-9.291,9.65-9.291h64.06c0.066,0,0.132,0.004,0.197,0.011  c2.809,0.319,4.695,2.245,4.695,4.791c0,0.249-0.053,0.495-0.155,0.722c-0.01,0.021-1.116,2.529-1.116,5.379  c0,2.313,0.347,3.758,0.621,4.539h0.157c2.738,0,4.803,2.064,4.803,4.802v62.484C91.456,91.629,89.302,93.944,86.653,93.944z   M27.024,90.444h59.629c0.779,0,1.303-0.859,1.303-1.661V26.299c0-0.815-0.487-1.302-1.303-1.302h-1c-0.15,0.02-0.303,0.019-0.449,0  h-58.18V90.444z M18.37,90.444h5.154V24.997h-5.33c-2.313,0-4.467-0.864-6.15-2.28v58.584c0.063,1.12,0.31,3.172,0.653,3.933  C14.774,89.838,17.941,90.39,18.37,90.444z M18.194,9.556c-3.392,0-6.15,2.598-6.15,5.791c0,3.276,2.874,6.15,6.15,6.15H82.85  c-0.269-1.118-0.475-2.606-0.475-4.539c0-2.868,0.855-5.384,1.242-6.376c-0.158-0.719-0.937-0.952-1.473-1.026H18.194z   M76.565,84.576c-0.827,0-1.622-0.377-2.37-1.126l-9.976-9.976c-0.18-0.179-0.318-0.396-0.405-0.634l-0.888-2.417l-4.094-4.006  c-2.673,1.498-5.735,2.256-9.124,2.256c-0.001,0-0.002,0-0.003,0c-5.161,0-10.02-2.009-13.682-5.656  c-3.666-3.653-5.686-8.504-5.686-13.662c0-5.167,2.012-10.024,5.665-13.677s8.511-5.665,13.676-5.665c0.001,0,0.001,0,0.002,0  c5.159,0,10.016,2.013,13.674,5.667c3.659,3.656,5.675,8.511,5.674,13.669c0.001,3.292-0.794,6.484-2.259,9.138l4.025,3.946  l2.571,0.915c0.244,0.087,0.467,0.228,0.65,0.412l9.934,9.934c1.117,1.117,1.702,3.197-1.858,6.757l-2.404,2.404  c-0.833,0.833-1.571,1.432-2.466,1.643C77.002,84.55,76.782,84.576,76.565,84.576z M66.967,71.272l9.656,9.656  c0.132-0.108,0.321-0.279,0.591-0.548l2.404-2.404c1.021-1.021,1.453-1.719,1.603-2.063l-9.398-9.398l-2.563-0.912  c-0.239-0.085-0.457-0.222-0.639-0.399l-4.016-3.938c-0.898,0.928-2.053,2.078-2.989,2.978l4.042,3.955  c0.187,0.182,0.329,0.403,0.419,0.648L66.967,71.272z M49.68,33.513c-4.23,0-8.209,1.648-11.201,4.64  c-2.992,2.993-4.64,6.971-4.64,11.203c0,4.22,1.653,8.191,4.655,11.182c3.002,2.99,6.983,4.636,11.212,4.636  c0.001,0,0.002,0,0.003,0c3.191,0,6.07-0.708,8.354-2.389c0.547-0.403,4.371-4.149,5.029-5.006c0.037-0.049,0.074-0.097,0.111-0.147  c1.628-2.187,2.327-5.21,2.326-8.281c0-4.224-1.65-8.199-4.647-11.194c-2.998-2.995-6.975-4.644-11.2-4.644  C49.682,33.513,49.681,33.513,49.68,33.513z M40.036,50.908c-0.967,0-1.75-0.784-1.75-1.75c0-5.958,4.848-10.806,10.807-10.806  c0.967,0,1.75,0.784,1.75,1.75s-0.783,1.75-1.75,1.75c-4.029,0-7.307,3.277-7.307,7.306C41.786,50.124,41.003,50.908,40.036,50.908z  "/></svg>',
      },
      title: {
        ...Component.defaultContent.articles[2].title,
        color: 'light-shade-color',
      },
    },
    {
      ...Component.defaultContent.articles[0],
      icon: {
        ...Component.defaultContent.articles[0].icon,
        fill: 'brand-color',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M54.959,50.083c-1.365-8.753-8.925-15.265-18.356-15.265c-10.429,0-18.599,7.954-18.599,18.108v0.914   c-0.005,0.059-0.018,0.115-0.018,0.176v17.924c-4.659-0.311-8.39-4.217-8.39-8.971c0-3.264,1.771-6.277,4.623-7.863   c0.965-0.537,1.313-1.754,0.775-2.721c-0.537-0.965-1.754-1.311-2.721-0.775c-4.119,2.293-6.678,6.645-6.678,11.359   c0,7.168,5.831,13,12.999,13c0.444,0,0.896-0.035,1.346-0.082c0.016,0,0.029,0.004,0.045,0.004c0.064,0,0.124-0.012,0.187-0.018   c0.004-0.002,0.008-0.002,0.012-0.002c0.001,0,0.003,0,0.004,0c1.008-0.104,1.798-0.945,1.798-1.98V56.203   c0.005-0.057,0.018-0.113,0.018-0.174v-3.104c0-8.042,6.276-14.108,14.599-14.108s14.598,6.065,14.598,14.108v0.828   c-0.012,0.086-0.025,0.172-0.025,0.262v19.318c-0.004,0.051-0.016,0.102-0.016,0.154v4.5c0,3.074-2.147,5.221-5.219,5.221h-2.694   c-0.02,0-0.037,0.004-0.057,0.006c-0.752-1.961-2.64-3.361-4.861-3.361h-3.426c-2.877,0-5.218,2.342-5.218,5.219   s2.341,5.219,5.218,5.219h3.426c2.121,0,3.943-1.277,4.759-3.1c0.054,0.006,0.104,0.018,0.159,0.018h2.694   c5.342,0,9.219-3.879,9.219-9.221v-1.955c6.891-0.314,12.404-6.004,12.404-12.971C67.564,56.027,61.943,50.294,54.959,50.083z    M38.329,86.291h-3.426c-0.66,0-1.218-0.559-1.218-1.219s0.558-1.219,1.218-1.219h3.426c0.66,0,1.219,0.559,1.219,1.219   S38.989,86.291,38.329,86.291z M55.176,72.031v-15.74c0.012-0.086,0.025-0.172,0.025-0.262v-1.934   c4.666,0.328,8.363,4.219,8.363,8.967C63.564,67.82,59.854,71.715,55.176,72.031z"/><path d="M63.902,9.709c-12.588,0-23.717,7.563-28.355,19.266c-0.407,1.026,0.096,2.188,1.123,2.596   c1.026,0.406,2.188-0.097,2.596-1.123c4.029-10.168,13.699-16.738,24.636-16.738c14.613,0,26.5,11.888,26.5,26.5   c0,10.951-6.879,20.912-17.121,24.787c-1.033,0.391-1.553,1.545-1.162,2.578c0.303,0.799,1.063,1.293,1.871,1.293   c0.234,0,0.475-0.043,0.707-0.131c11.787-4.459,19.705-15.924,19.705-28.527C94.402,23.392,80.721,9.709,63.902,9.709z"/><path d="M65.402,20.522c-1.104,0-2,0.896-2,2v16.499c0,0.092,0.016,0.179,0.027,0.268c-0.096,0.636,0.113,1.306,0.623,1.773   l9.436,8.691c0.385,0.354,0.869,0.529,1.354,0.529c0.541,0,1.078-0.217,1.473-0.646c0.748-0.813,0.695-2.077-0.117-2.825   l-8.795-8.101V22.522C67.402,21.417,66.508,20.522,65.402,20.522z"/></g></svg>',
      },
      title: {
        ...Component.defaultContent.articles[0].title,
        color: 'light-shade-color',
      },
    },
    {
      ...Component.defaultContent.articles[1],
      icon: {
        ...Component.defaultContent.articles[1].icon,
        fill: 'brand-color',
        svg: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 13.229167 16.53645875" version="1.1" x="0px" y="0px"><g transform="translate(0,-283.77083)"><path d="M 4 3 C 1.8032967 3 0 4.803263 0 7 L 0 33 C 0 35.197002 1.8029981 37 4 37 L 20 37 L 20 36.998047 C 20.563301 36.998047 21.001953 37.436699 21.001953 38 L 21 38 L 21 39 L 19 39 C 17.357432 39 16 40.35738 16 42 L 16 44 C 16 45.642583 17.357432 47 19 47 L 31 47 C 32.642594 47 34 45.642583 34 44 L 34 42 C 34 40.35738 32.642594 39 31 39 L 29 39 L 29 38 L 28.998047 38 C 28.998047 37.436699 29.436699 36.998047 30 36.998047 L 30 37 L 46 37 C 48.196892 37 50 35.196737 50 33 L 50 7 C 50 4.8027339 48.19727 3 46 3 L 4 3 z M 4 5 L 46 5 C 47.116397 5 48 5.8836032 48 7 L 48 28 L 45 28 L 45 22 C 45 19.803112 43.196775 18 41 18 C 41 15.803112 39.196785 14 37 14 C 37 11.803112 35.196774 10 33 10 L 9 10 C 6.8027226 10 5 11.802772 5 14 L 5 28 L 2 28 L 2 7 C 2 5.8838677 2.8838674 5 4 5 z M 9 12 L 33 12 C 34.116132 12 35 12.883792 35 14 L 35 28 L 7 28 L 7 14 C 7 12.883603 7.8835918 12 9 12 z M 37 16 C 38.116143 16 39 16.883792 39 18 L 39 28 L 37 28 L 37 16 z M 11 17 C 10.445959 17 10 17.445997 10 18 C 10 18.554003 10.445959 19 11 19 L 16 19 C 16.554003 19 17 18.554003 17 18 C 17 17.445997 16.554003 17 16 17 L 11 17 z M 20 17 C 19.445997 17 19 17.445997 19 18 C 19 18.554003 19.445997 19 20 19 L 31 19 C 31.554004 19 32 18.554003 32 18 C 32 17.445997 31.554004 17 31 17 L 20 17 z M 41 20 C 42.116174 20 43 20.883792 43 22 L 43 28 L 41 28 L 41 20 z M 11 21 C 10.445997 21 10 21.445997 10 22 C 10 22.554003 10.445997 23 11 23 L 20 23 C 20.554003 23 21 22.554003 21 22 C 21 21.445997 20.554003 21 20 21 L 11 21 z M 24 21 C 23.445959 21 23 21.445997 23 22 C 23 22.554003 23.445959 23 24 23 L 29 23 C 29.554003 23 30 22.554003 30 22 C 30 21.445997 29.554003 21 29 21 L 24 21 z M 2 30 L 48 30 L 48 33 C 48 34.116132 47.101018 35.183496 46 35 L 30 35 C 28.357455 35 27 36.357417 27 38 L 27 42 C 26.999913 42.552265 27.447622 43 28 43 C 28.552352 42.999887 29.000071 42.552265 29 42 L 29 41 L 31 41 C 31.5633 41 32 41.436699 32 42 L 32 44 C 32 44.563301 31.5633 45 31 45 L 19 45 C 18.436688 45 18 44.563301 18 44 L 18 42 C 18 41.436699 18.436688 41 19 41 L 21 41 L 21 42 C 20.999913 42.552265 21.447622 43 22 43 C 22.552351 42.999887 23.000072 42.552265 23 42 L 23 38 C 23 36.357417 21.642545 35 20 35 L 4 35 C 2.8837468 35 2 34.116283 2 33 L 2 30 z M 25 32 C 24.447755 31.999887 24.000008 32.44766 24 33 C 23.999985 33.552378 24.44774 34.000113 25 34 C 25.552265 34.000113 26.000015 33.552378 26 33 C 25.999993 32.44766 25.55225 31.999887 25 32 z " transform="matrix(0.26458334,0,0,0.26458334,0,283.77083)"/></g></svg>',
      },
      title: {
        ...Component.defaultContent.articles[1].title,
        color: 'light-shade-color',
      },
    },
    {
      ...Component.defaultContent.articles[2],
      icon: {
        ...Component.defaultContent.articles[2].icon,
        fill: 'brand-color',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M89.255,13.407H21.253c-3.168,0-5.744,2.577-5.744,5.745v4.764h-4.764C7.577,23.915,5,26.492,5,29.66V80.85  c0,3.168,2.577,5.744,5.745,5.744h68.002c3.168,0,5.744-2.576,5.744-5.744v-4.765h4.764c3.168,0,5.745-2.577,5.745-5.745V19.151  C95,15.983,92.423,13.407,89.255,13.407z M80.662,80.85c0,1.055-0.859,1.914-1.915,1.914H10.745c-1.056,0-1.915-0.859-1.915-1.914  V29.66c0-1.056,0.859-1.915,1.915-1.915h4.764V70.34c0,3.168,2.576,5.745,5.744,5.745h59.409V80.85z M91.169,70.341  c0,1.056-0.858,1.915-1.915,1.915H21.253v-0.001c-1.056,0-1.915-0.858-1.915-1.915v-1.73l17.44-19.024  c1.01-1.102,2.347-1.708,3.764-1.708c1.418,0,2.755,0.606,3.765,1.708l16.648,18.162c0.715,0.78,1.927,0.832,2.706,0.118  c0.78-0.715,0.833-1.926,0.118-2.706l-2.535-2.767l8.164-8.658c1.031-1.094,2.402-1.697,3.861-1.697c1.457,0,2.828,0.604,3.86,1.697  l14.039,14.891V70.341z M91.17,63.042L79.917,51.107c-1.763-1.872-4.124-2.901-6.647-2.901c-2.522,0-4.885,1.03-6.646,2.901  l-7.973,8.455l-11.52-12.566c-1.745-1.902-4.085-2.949-6.589-2.949s-4.843,1.047-6.588,2.949L19.338,62.939V19.151  c0-1.056,0.859-1.915,1.915-1.915h68.002c1.056,0,1.915,0.859,1.915,1.915V63.042z"/><path d="M75.432,23.496c-5.229,0-9.481,4.253-9.481,9.481c-0.001,5.227,4.253,9.481,9.481,9.481s9.48-4.253,9.48-9.481  C84.912,27.748,80.659,23.496,75.432,23.496z M75.432,38.628c-3.117,0-5.652-2.535-5.652-5.651c0-3.117,2.533-5.652,5.652-5.652  c3.115,0,5.65,2.535,5.65,5.652C81.082,36.093,78.547,38.628,75.432,38.628z"/></svg>',
      },
      title: {
        ...Component.defaultContent.articles[2].title,
        color: 'light-shade-color',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
}

export default ExtendedWireframe
