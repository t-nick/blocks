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
      price: {
        ...Component.defaultContent.products[0].price,
        color: 'dark-shade-color',
      },
      'price-info': {
        ...Component.defaultContent.products[0]['price-info'],
        brightness: 50,
      },
      icon: {
        ...Component.defaultContent.products[0].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.573 369.837c-1.951-5.285-7.815-7.988-13.1-6.038l-106.072 39.139c-5.285 1.95-7.988 7.815-6.038 13.1a10.204 10.204 0 0 0 9.57 6.671 10.2 10.2 0 0 0 3.53-.633l106.072-39.139c5.285-1.95 7.988-7.815 6.038-13.1zM335.337 419.738c-1.949-5.286-7.815-7.989-13.1-6.039l-4.492 1.657c-5.284 1.95-7.988 7.815-6.038 13.099a10.204 10.204 0 0 0 9.57 6.672 10.2 10.2 0 0 0 3.53-.633l4.492-1.657c5.284-1.95 7.988-7.814 6.038-13.099zM470.573 328.276c-1.951-5.285-7.815-7.986-13.1-6.038l-83.825 30.93c-5.285 1.95-7.988 7.815-6.038 13.1a10.204 10.204 0 0 0 9.57 6.671 10.2 10.2 0 0 0 3.53-.633l83.825-30.93c5.285-1.95 7.988-7.815 6.038-13.1zM470.573 287.147c-1.951-5.285-7.815-7.986-13.1-6.038l-83.825 30.93c-5.285 1.95-7.988 7.815-6.038 13.1a10.204 10.204 0 0 0 9.57 6.671 10.2 10.2 0 0 0 3.53-.633l83.825-30.93c5.285-1.95 7.988-7.815 6.038-13.1z"/><path d="M505.332 100.528L259.531 9.832a10.207 10.207 0 0 0-7.061 0L6.669 100.528l-.002.008c-.805.298-1.579.692-2.299 1.193A10.201 10.201 0 0 0 0 110.097v291.806a10.2 10.2 0 0 0 6.668 9.569l245.801 90.696c1.146.423 2.341.63 3.53.63 1.201 0 2.396-.218 3.528-.636l.004.006 245.801-90.696a10.2 10.2 0 0 0 6.668-9.569V110.097a10.2 10.2 0 0 0-6.668-9.569zM245.801 477.965l-225.403-83.17V124.732l45.896 16.936v123.578a10.2 10.2 0 0 0 6.668 9.569l110.151 40.645a10.2 10.2 0 0 0 13.73-9.569V189.838l48.956 18.064v270.063zm-69.355-295.654v108.943l-89.753-33.118V149.193l89.753 33.118zm-70.489-47.834l80.688-29.773 80.688 29.773-80.688 29.773-80.688-29.773zM256 189.922l-40.001-14.76 84.329-31.117a10.2 10.2 0 0 0 0-19.138L190.176 84.263a10.21 10.21 0 0 0-7.062 0L76.383 123.647l-36.72-13.55L256 30.273l216.337 79.825L256 189.922zm235.602 204.873L266.2 477.964V207.902l225.402-83.17v270.063z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.products[1],
      price: {
        ...Component.defaultContent.products[1].price,
        color: 'dark-shade-color',
      },
      'price-info': {
        ...Component.defaultContent.products[1]['price-info'],
        brightness: 50,
      },
      icon: {
        ...Component.defaultContent.products[1].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002"><path d="M502.001 128.15H394.872c12.188-22.37 12.735-49.754.355-73.151-19.96-37.721-66.884-52.17-104.604-32.21-11.839 6.264-23.25 19.656-34.638 40.72-11.361-20.896-22.961-34.558-34.606-40.72-18.273-9.669-39.215-11.644-58.973-5.56-19.757 6.084-35.962 19.497-45.631 37.77-12.38 23.396-11.833 50.78.355 73.151H10c-5.523 0-10 4.478-10 10v98.653c0 5.523 4.477 10 10 10h15.128v218.133c0 18.362 14.939 33.302 33.302 33.302h395.143c18.363 0 33.302-14.939 33.302-33.302V246.804h15.127c5.523 0 10-4.477 10-10v-98.653c-.001-5.523-4.478-10.001-10.001-10.001zM299.977 40.467c27.974-14.803 62.771-4.086 77.572 23.886 11.038 20.861 8.224 45.991-6.788 63.798h-87.943a495.708 495.708 0 0 0-4.952-14.478l-.021-.06c-2.829-7.869-6.382-17.132-10.513-26.641a248.836 248.836 0 0 0-.352-.807c11.425-24.289 23.072-40.447 32.997-45.698zM134.452 64.353c7.17-13.55 19.188-23.497 33.839-28.009 14.651-4.512 30.183-3.047 43.733 4.123 11.452 6.06 23.893 25.752 34.709 49.378.05.124.102.248.158.37 6.385 14.1 11.507 28.092 14.854 37.936H141.24c-15.013-17.807-17.826-42.937-6.788-63.798zM20 148.15h156.292v29.326H20V148.15zm0 78.654v-29.327h156.292v29.327H20zm166.935 251.435H58.429c-7.334-.001-13.301-5.968-13.301-13.302V246.804h141.807v231.435zm118.133 0h-39.067V311.67c0-5.522-4.477-10-10-10s-10 4.478-10 10v166.568h-39.066V246.804h98.133v231.435zm10.642-251.435H196.292v-78.653H315.71v78.653zm151.164 238.133c0 7.335-5.967 13.302-13.302 13.302H325.067V246.804h141.807v218.133zM335.71 226.804v-29.327h89.553c5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10H335.71v-29.326h156.291v78.653H335.71z"/><path d="M265.81 270.344a10.42 10.42 0 0 0-.58-1.88 9.457 9.457 0 0 0-.92-1.721 9.57 9.57 0 0 0-1.24-1.52c-.46-.46-.97-.88-1.52-1.25-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.87-.57a9.898 9.898 0 0 0-3.91 0c-.64.13-1.27.32-1.88.57-.6.25-1.18.56-1.72.92-.55.37-1.06.79-1.52 1.25-.46.46-.88.97-1.24 1.52-.36.54-.67 1.12-.92 1.721a9.647 9.647 0 0 0-.57 1.88c-.13.64-.2 1.3-.2 1.949 0 .65.07 1.31.2 1.95.12.641.32 1.27.57 1.87.25.61.56 1.19.92 1.73.36.55.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92a10.098 10.098 0 0 0 3.82.769c.65 0 1.31-.069 1.96-.199.63-.13 1.26-.32 1.87-.57.6-.25 1.18-.56 1.72-.92a9.57 9.57 0 0 0 1.52-1.24c.46-.46.88-.97 1.24-1.52.37-.54.67-1.12.92-1.73.25-.6.45-1.229.58-1.87.13-.64.19-1.3.19-1.95 0-.649-.06-1.31-.19-1.949zM474.44 185.524a10.098 10.098 0 0 0-1.49-3.599 9.533 9.533 0 0 0-1.24-1.521 9.57 9.57 0 0 0-1.52-1.24 10.096 10.096 0 0 0-3.6-1.489 9.86 9.86 0 0 0-3.91 0c-.63.13-1.26.319-1.87.569-.6.25-1.18.561-1.72.92-.55.36-1.06.78-1.52 1.24a9.86 9.86 0 0 0-2.17 3.25c-.25.601-.44 1.23-.57 1.87-.12.64-.19 1.3-.19 1.95 0 .649.07 1.309.19 1.96.131.629.33 1.259.58 1.87.25.6.55 1.18.91 1.72a10.092 10.092 0 0 0 2.77 2.77c.54.36 1.12.671 1.72.921.61.239 1.24.439 1.88.569s1.3.191 1.95.191 1.31-.061 1.95-.191c.64-.13 1.27-.33 1.87-.569a9.874 9.874 0 0 0 3.25-2.171c.46-.46.88-.97 1.24-1.52.36-.54.67-1.12.92-1.72.25-.61.44-1.24.57-1.87.13-.65.2-1.311.2-1.96 0-.65-.07-1.311-.2-1.95z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.products[2],
      price: {
        ...Component.defaultContent.products[2].price,
        color: 'dark-shade-color',
      },
      'price-info': {
        ...Component.defaultContent.products[2]['price-info'],
        brightness: 50,
      },
      icon: {
        ...Component.defaultContent.products[2].icon,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><circle cx="10.06" cy="500.446" r="10.06"/><circle cx="267.005" cy="245.308" r="10.04"/><path d="M398.479 118.032c-8.071-8.072-18.802-12.516-30.216-12.516-11.414 0-22.146 4.446-30.216 12.516-16.661 16.662-16.661 43.772 0 60.433 8.332 8.331 19.272 12.495 30.216 12.495 10.941 0 21.886-4.166 30.216-12.495 16.661-16.662 16.661-43.772 0-60.433zm-14.197 46.234c-8.833 8.832-23.206 8.832-32.037 0-8.833-8.832-8.833-23.204 0-32.037a22.503 22.503 0 0 1 16.018-6.635 22.503 22.503 0 0 1 16.018 6.635c8.833 8.833 8.833 23.205.001 32.037zM125.409 411.45c-4.964-2.472-10.99-.451-13.462 4.512l-11.958 24.015c-5.2 10.441-15.658 17.423-27.296 18.219l-13.908.952c-2.351.157-3.897-1.014-4.612-1.729s-1.889-2.264-1.729-4.613l.952-13.907c.797-11.637 7.779-22.096 18.219-27.296l24.014-11.958c4.964-2.472 6.984-8.499 4.512-13.462-2.471-4.963-8.498-6.984-13.462-4.512l-24.014 11.958c-16.792 8.362-28.02 25.182-29.302 43.898l-.952 13.907a26.021 26.021 0 0 0 7.562 20.183 26.024 26.024 0 0 0 20.183 7.563l13.908-.952c18.716-1.281 35.536-12.508 43.898-29.302l11.958-24.014c2.472-4.964.452-10.99-4.511-13.462z"/><path d="M505.07 8.18a23.246 23.246 0 0 0-17.793-6.639l-9.348.596c-83.819 5.351-162.262 45.81-215.215 111.004L240.71 140.23l-57.583-1.691a9.65 9.65 0 0 0-.294-.004c-45.668 0-88.603 17.784-120.896 50.076L2.959 247.59a10.04 10.04 0 0 0 6.584 17.125l124.844 6.414-5.09 6.267a10.039 10.039 0 0 0-1.026 11.127 233.734 233.734 0 0 0 6.144 10.617l-29.606 35.147a10.045 10.045 0 0 0-1.397 10.763c6.467 13.665 15.05 25.943 25.514 36.493 10.718 10.808 23.251 19.646 37.249 26.271a10.042 10.042 0 0 0 10.62-1.278c6.378-5.174 13.731-11.311 20.843-17.245 5.069-4.23 10.255-8.557 15.102-12.547a232.586 232.586 0 0 0 8.795 5.046 10.026 10.026 0 0 0 4.796 1.221c2.186 0 4.358-.712 6.156-2.108l6.843-5.31 6.442 125.37a10.041 10.041 0 0 0 10.023 9.526c2.615 0 5.183-1.023 7.101-2.942l58.979-58.979c32.293-32.293 50.076-75.227 50.076-120.896v-54.995l23.267-18.055c69.729-54.11 112.196-135.704 116.512-223.862l.239-4.886A23.262 23.262 0 0 0 505.07 8.18zM33.123 245.822l43.012-43.012c28.465-28.465 66.303-44.157 106.553-44.196l42.085 1.236-74.71 91.98-116.94-6.008zm151.651 128.052c-5.241 4.372-10.614 8.856-15.6 12.957-9.644-5.223-18.368-11.74-25.992-19.428-7.384-7.445-13.669-15.922-18.737-25.26l21.676-25.733a232.758 232.758 0 0 0 21.478 24.925l.018.017.006.007.009.008a232.765 232.765 0 0 0 27.641 23.761c-3.462 2.874-7.009 5.834-10.499 8.746zm167.101-46.202c0 40.305-15.695 78.197-44.196 106.698l-43.012 43.012-6.002-116.792 93.209-72.33v39.412zM491.678 29.779c-4.029 82.297-43.673 158.467-108.767 208.98l-157.46 122.189c-13.058-7.63-25.229-16.639-36.368-26.846l53.086-53.086c3.92-3.92 3.92-10.278 0-14.199-3.921-3.921-10.278-3.921-14.199 0l-53.036 53.036c-9.751-10.795-18.387-22.541-25.74-35.104L278.3 125.8c49.432-60.859 122.66-98.629 200.907-103.623l9.348-.596a3.151 3.151 0 0 1 2.423.904c.377.371 1 1.178.94 2.409l-.24 4.885z"/></svg>',
        fill: 'brand-color',
      },
    },
  ],
  subtitle: {
    ...Component.defaultContent.subtitle,
    color: 'dark-shade-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
