import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-pricing/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-pricing/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  subtitle: {
    ...Component.defaultContent.subtitle,
    type: 'subtitle',
  },
  products: [
    {
      ...Component.defaultContent.products[0],
      price: {
        content: '$100',
        type: 'headingLg',
        brightness: -25,
      },
      'price-info': {
        type: 'caption',
        content: 'FOR ALL PERIOD',
        brightness: '-50',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="58" height="64"><path d="M39.632 16.218c-.69 0-1.25.559-1.25 1.25v.074a1.25 1.25 0 1 0 2.5 0v-.075c0-.69-.56-1.25-1.25-1.25z"/><path d="M55.902 26.065H51.81a23.736 23.736 0 0 0-3.376-8.152l2.894-2.893a1.25 1.25 0 0 0 0-1.768l-5.062-5.061a1.25 1.25 0 0 0-.383-.26V4.273C45.882 1.757 44.55 0 42.641 0h-6.017c-1.684 0-2.92 1.37-3.187 3.423a1.249 1.249 0 0 0-1.233-1.057h-7.158c-.69 0-1.25.56-1.25 1.25v4.089a23.74 23.74 0 0 0-8.151 3.379l-2.893-2.893a1.25 1.25 0 0 0-1.768 0l-5.062 5.061a1.25 1.25 0 0 0 0 1.768l2.894 2.893a23.737 23.737 0 0 0-3.377 8.152H1.348c-.69 0-1.25.559-1.25 1.25v7.157c0 .69.56 1.25 1.25 1.25H5.44a23.738 23.738 0 0 0 3.38 8.147l-2.899 2.897a1.25 1.25 0 0 0 0 1.767l5.062 5.062a1.25 1.25 0 0 0 1.767 0l2.9-2.899a23.748 23.748 0 0 0 8.145 3.376v4.098c0 .69.56 1.25 1.25 1.25h7.158c.69 0 1.25-.56 1.25-1.25v-4.098c.144-.03.287-.064.43-.097l4.63 9.33a1.25 1.25 0 0 0 2.238 0l4.636-9.344a1.25 1.25 0 0 0 .878-.366l5.061-5.062a1.25 1.25 0 0 0 0-1.767L48.43 43.87a23.746 23.746 0 0 0 3.379-8.147h4.094c.69 0 1.25-.56 1.25-1.25v-7.158c0-.69-.56-1.25-1.25-1.25zm-22.519-9.39a14.885 14.885 0 0 0-4.758-.772c-8.263 0-14.985 6.723-14.985 14.985 0 8.263 6.723 14.985 14.985 14.985 1.64 0 3.233-.26 4.758-.772v6.427a21.02 21.02 0 0 1-1.376.27 1.25 1.25 0 0 0-1.052 1.234v3.889h-4.66v-3.89a1.25 1.25 0 0 0-1.052-1.233 21.19 21.19 0 0 1-9.009-3.733 1.25 1.25 0 0 0-1.615.13l-2.752 2.75-3.294-3.295 2.75-2.75a1.25 1.25 0 0 0 .128-1.615 21.19 21.19 0 0 1-3.737-9.01 1.25 1.25 0 0 0-1.234-1.052H2.597v-4.66H6.48a1.25 1.25 0 0 0 1.234-1.051 21.184 21.184 0 0 1 3.735-9.015 1.25 1.25 0 0 0-.13-1.615l-2.745-2.746 3.295-3.295 2.745 2.745a1.25 1.25 0 0 0 1.616.13 21.191 21.191 0 0 1 9.015-3.737 1.25 1.25 0 0 0 1.051-1.234v-3.88h4.66v3.88a1.25 1.25 0 0 0 1.052 1.234c.46.074.92.165 1.376.27v6.426zm0 2.666v23.093c-1.506.624-3.103.94-4.758.94-6.885 0-12.486-5.601-12.486-12.486 0-6.885 5.601-12.486 12.486-12.486 1.655 0 3.252.316 4.758.94zm2.499-15.067c0-.979.333-1.775.742-1.775h6.017c.41 0 .742.796.742 1.775V7.75h-7.501V4.274zm3.75 55.665l-2.626-5.294a5.646 5.646 0 0 0 2.626-1.136 5.65 5.65 0 0 0 1.768.937c.291.093.578.158.86.199l-2.627 5.294zm3.751-7.978v.144c-.234.103-.525.1-.762.067-.903-.126-1.605-.689-1.74-.93V21.128a1.25 1.25 0 1 0-2.498 0v30.115c-.133.239-.835.804-1.74.93-.236.033-.527.036-.761-.067V15.249h7.501v36.712zm0-39.21h-7.501v-2.502h7.501v2.502zm2.5-1.41l2.794 2.795-2.746 2.746-.049.053v-5.593zm2.794 36.309l-2.795 2.794v-5.593l.045.05 2.75 2.749zm2.09-14.427a1.25 1.25 0 0 0-1.233 1.051 21.191 21.191 0 0 1-3.652 8.89V18.612a21.19 21.19 0 0 1 3.654 8.9 1.25 1.25 0 0 0 1.233 1.051h3.884v4.66h-3.885z"/><path d="M13.917 38.084l-.019-.04a1.244 1.244 0 0 0-1.674-.553 1.255 1.255 0 0 0-.556 1.682l.014.028a1.25 1.25 0 1 0 2.235-1.117zM12.851 22.94a1.25 1.25 0 0 0-1.635.67 18.76 18.76 0 0 0-1.457 7.283c0 1.786.25 3.555.742 5.257a1.25 1.25 0 0 0 2.4-.695 16.403 16.403 0 0 1-.643-4.562c0-2.19.425-4.315 1.263-6.318a1.25 1.25 0 0 0-.67-1.635z"/></svg>',
        fill: 'brand-color',
      },
      cta: {
        ...Component.defaultContent.products[0].cta,
        type: 'secondary',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.products[1],
      'price-info': {
        type: 'caption',
        content: 'PER MONTH',
      },
      price: {
        content: '$50',
        type: 'headingLg',
        brightness: -25,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="55"><path d="M33.931 16.72h-7.373a1.247 1.247 0 1 0 0 2.496h7.373a1.248 1.248 0 0 0 0-2.495zm3.387 0h-.044a1.247 1.247 0 1 0 0 2.496h.044a1.248 1.248 0 0 0 0-2.495z"/><path d="M60.37.11H3.506A3.509 3.509 0 0 0 0 3.613v36.188a3.508 3.508 0 0 0 3.505 3.504h17.388v4.015h-.157a3.434 3.434 0 0 0-3.43 3.43v2.785c0 .689.558 1.248 1.247 1.248h27.29c.69 0 1.248-.559 1.248-1.248V50.75a3.434 3.434 0 0 0-3.43-3.43h-.157v-4.015h16.867a3.509 3.509 0 0 0 3.504-3.504V3.614A3.509 3.509 0 0 0 60.371.109zM43.662 49.815c.516 0 .935.42.935.935v1.537H19.801V50.75c0-.515.42-.935.935-.935h22.925zM23.389 47.32v-4.015H41.01v4.015H23.388zM61.38 39.8a1.01 1.01 0 0 1-1.01 1.01H3.506a1.01 1.01 0 0 1-1.01-1.01V3.615c0-.557.453-1.01 1.01-1.01H60.37c.556 0 1.01.453 1.01 1.01v36.188z"/><path d="M57.636 5.1H6.239c-.689 0-1.247.56-1.247 1.248v30.719c0 .689.558 1.248 1.247 1.248h51.397c.69 0 1.248-.559 1.248-1.248V6.348c0-.688-.559-1.247-1.248-1.247zM7.486 7.597h48.902v5.07H7.487v-5.07zM56.388 35.82H7.487V15.161h48.901v20.658z"/><path d="M21.684 16.72h-10.76c-.69 0-1.248.56-1.248 1.248v13.88c0 .688.559 1.247 1.248 1.247h10.76c.69 0 1.248-.559 1.248-1.248V17.968c0-.689-.559-1.247-1.248-1.247zM20.437 30.6H12.17V19.216h8.266V30.6zm32.514-13.88h-10.76c-.69 0-1.248.56-1.248 1.248v13.88c0 .688.559 1.247 1.248 1.247h10.76c.69 0 1.248-.559 1.248-1.248V17.968c0-.689-.559-1.247-1.248-1.247zM51.704 30.6h-8.265V19.216h8.265V30.6zm-14.386-6.94h-.044a1.248 1.248 0 0 0 0 2.496h.044a1.248 1.248 0 1 0 0-2.495zm-3.387 0h-7.373a1.248 1.248 0 0 0 0 2.496h7.373a1.248 1.248 0 0 0 0-2.495zm0 6.94h-7.373a1.248 1.248 0 1 0 0 2.495h7.373a1.248 1.248 0 0 0 0-2.495zm3.387 0h-.044a1.248 1.248 0 1 0 0 2.495h.044a1.248 1.248 0 1 0 0-2.495z"/></svg>',
        fill: 'brand-color',
      },
      cta: {
        ...Component.defaultContent.products[1].cta,
        type: 'primary',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.products[2],
      price: {
        content: '$50',
        type: 'headingLg',
        brightness: -25,
      },
      'price-info': {
        type: 'caption',
        content: 'PER MONTH',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="60"><path d="M54.773 20.827a12.13 12.13 0 0 0-16.448-4.869c-5.877 3.193-8.062 10.571-4.87 16.448a12.13 12.13 0 0 0 10.668 6.342c2.008 0 4.006-.51 5.78-1.473a12.05 12.05 0 0 0 5.841-7.215 12.05 12.05 0 0 0-.971-9.233zm-1.421 8.525a9.57 9.57 0 0 1-4.64 5.73 9.646 9.646 0 0 1-4.588 1.171 9.637 9.637 0 0 1-8.476-5.038c-2.535-4.668-.8-10.528 3.867-13.064a9.646 9.646 0 0 1 4.59-1.17c3.54 0 6.787 1.93 8.475 5.037a9.57 9.57 0 0 1 .772 7.334z"/><path d="M47.07 18.768l-.06-.022a1.248 1.248 0 1 0-.862 2.34l.052.02a1.244 1.244 0 0 0 1.604-.734 1.247 1.247 0 0 0-.735-1.604zm4.414 3.845a8.43 8.43 0 0 0-.888-1.32 1.248 1.248 0 0 0-1.929 1.583 5.8 5.8 0 0 1 .624.929 5.847 5.847 0 0 1 .452 4.55 1.248 1.248 0 1 0 2.384.737 8.324 8.324 0 0 0-.643-6.479z"/><path d="M63.556 53.734L55.07 38.109a15.778 15.778 0 0 0 4.263-6.987 15.768 15.768 0 0 0-1.272-12.08 15.864 15.864 0 0 0-9.845-7.758A26.568 26.568 0 0 0 35.4 1.59a1.263 1.263 0 0 0-.246-.086A26.522 26.522 0 0 0 26.547.07C14.352.07 4.052 8.336.954 19.56a1.258 1.258 0 0 0-.055.201A26.499 26.499 0 0 0 0 26.617c0 7.99 3.548 15.166 9.15 20.037.08.09.172.168.273.232a26.429 26.429 0 0 0 17.124 6.278c8.466 0 16.392-4.03 21.392-10.826l8.337 15.35a2.652 2.652 0 0 0 2.322 1.378c.433 0 .861-.108 1.251-.32l2.65-1.44a2.638 2.638 0 0 0 1.057-3.572zM44.624 10.75a15.896 15.896 0 0 0-8.085 1.918 15.769 15.769 0 0 0-7.644 9.442 15.768 15.768 0 0 0 1.272 12.082 15.86 15.86 0 0 0 3.986 4.78l-3.59 2.817-2.465-1.052-1.824-7.62a1.248 1.248 0 0 0-.514-.743l-3.33-2.254-2.21-5.05 5.915-10.056c.112-.192.172-.41.172-.632v-4.036L35.05 4.12a24.065 24.065 0 0 1 9.574 6.632zm-34.36 24.976l-2.074 2.38a1.248 1.248 0 0 0-.295.991l.445 3.219a23.949 23.949 0 0 1-5.845-15.7c0-1.022.065-2.029.189-3.017L6.5 30.576c.116.211.29.385.503.5l3.37 1.814-.11 2.837zM26.546 50.67a23.943 23.943 0 0 1-15.293-5.501l-.81-5.85 1.99-2.284c.187-.215.295-.487.305-.771l.157-4.055a1.248 1.248 0 0 0-.656-1.146L8.51 29.055l-5.041-9.217C6.404 9.865 15.639 2.565 26.547 2.565c1.87 0 3.71.22 5.49.637l-7.7 5.486a1.247 1.247 0 0 0-.524 1.016v4.339l-6.066 10.311a1.247 1.247 0 0 0-.067 1.133l2.61 5.965c.095.215.249.4.444.532l3.226 2.185 1.857 7.76c.092.384.36.702.724.857l3.72 1.589a1.245 1.245 0 0 0 1.26-.166l4.8-3.765a15.882 15.882 0 0 0 8.303 2.04 24.049 24.049 0 0 1-18.077 8.185zm17.58-10.673a13.38 13.38 0 0 1-11.768-6.995 13.29 13.29 0 0 1-1.072-10.181 13.29 13.29 0 0 1 6.442-7.958 13.393 13.393 0 0 1 6.372-1.625c1.05 0 2.08.123 3.074.357.023.005.045.011.068.015a13.373 13.373 0 0 1 8.626 6.623 13.289 13.289 0 0 1 1.072 10.182 13.284 13.284 0 0 1-4.268 6.488 13.506 13.506 0 0 1-2.174 1.47 13.39 13.39 0 0 1-6.372 1.624zm17.181 15.118l-2.65 1.439a.137.137 0 0 1-.105.01.137.137 0 0 1-.084-.066L50.2 41.274a15.893 15.893 0 0 0 2.897-1.57l8.267 15.22a.143.143 0 0 1-.056.19z"/><path d="M9.296 14.837a1.247 1.247 0 0 0-1.684.526l-.053.102a1.248 1.248 0 0 0 2.221 1.137l.042-.08a1.249 1.249 0 0 0-.526-1.685zM19.988 6.62a1.247 1.247 0 0 0-1.602-.74 19.948 19.948 0 0 0-8.406 5.934 1.247 1.247 0 1 0 1.915 1.6A17.45 17.45 0 0 1 19.25 8.22a1.25 1.25 0 0 0 .74-1.602z"/></svg>',
        fill: 'brand-color',
      },
      cta: {
        ...Component.defaultContent.products[2].cta,
        type: 'secondary',
        size: 'lg',
      },
    },
  ],
  button: {
    ...Component.defaultContent.button,
    type: 'secondary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
