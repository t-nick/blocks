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
      title: {
        content: 'Basic',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      price: {
        content: 'Free',
        type: 'headingLg',
      },
      'price-info': {
        content: 'For all period',
        type: 'caption',
        brightness: 50,
      },
      body: {
        content: '100 max connections<br>unlimited channels<br>200k messages / day',
        type: 'text',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.124 504.124"><path d="M0 126.622L252.062 1.378l252.062 125.243v16.542L252.062 268.406 0 143.558v-16.936z" fill="#efc75e"/><path d="M0 126.622l252.062 125.243 252.062-125.243v250.88l-252.85 125.243L0 377.503V126.622z" fill="#e7bf55"/><path d="M252.062 502.352V251.866L1.575 127.409H0v250.092l251.274 125.243.788-.392z" fill="#dbb551"/><path d="M102.794 75.815l251.668 125.243 51.2-25.206L153.206 50.61l-50.412 25.205z" fill="#f7e3af"/><path d="M354.462 201.059l51.2-25.206v78.769l-13.785-2.363-14.572 17.723-22.843-1.575v-67.348z" fill="#f1d999"/><path d="M200.074 351.902l-85.071-42.535c-4.726-2.363-8.665.394-8.665 6.302v57.108c0 5.908 3.938 12.603 8.665 14.966l85.465 42.535c4.726 2.363 8.665-.394 8.665-6.302v-57.502c-.395-5.908-4.333-12.208-9.059-14.572zm-19.299 46.868l-54.351-27.175c-2.363-1.182-4.332-4.726-4.332-7.877s1.969-4.726 4.332-3.545l54.351 27.175c2.363 1.182 4.332 4.726 4.332 7.877s-1.969 4.726-4.332 3.545zm7.877-19.693l-62.228-31.508c-2.363-1.182-4.332-4.726-4.332-7.877s1.969-4.726 4.332-3.545l62.228 31.508c2.363 1.182 4.332 4.726 4.332 7.877.001 3.545-1.969 4.726-4.332 3.545z" fill="#f2f2f2"/></svg>',
      },
      cta: {
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
        textValue: 'Main button',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Semi',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      price: {
        content: '$50',
        type: 'headingLg',
      },
      'price-info': {
        content: 'per month',
        type: 'caption',
        brightness: 50,
      },
      body: {
        content: '100 max connections<br>unlimited channels<br>200k messages / day',
        type: 'text',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.124 504.124"><path d="M15.754 133.909l236.308 118.154L488.37 133.909v252.062L252.062 504.123 15.754 385.969v-252.06z" fill="#db5449"/><path d="M15.754 157.538v73.649l235.52 115.397 237.095-115.791v-73.255L252.062 273.33 15.754 157.538z" fill="#c54b42"/><path d="M252.062 504.123v-252.06L31.508 141.786H15.754v244.185l236.308 118.152z" fill="#d05045"/><path d="M15.754 157.538v73.649l235.52 115.397.788-.394v-73.255.394L15.754 157.538z" fill="#bb483e"/><path d="M0 125.638L252.062.001l252.062 125.637v16.542L252.062 267.815 0 142.573v-16.935z" fill="#eb6258"/><path d="M396.603 39.779c-8.271-14.966-25.994-24.025-46.868-24.025-47.655 0-81.132 44.505-97.674 72.862-16.542-28.357-50.412-72.468-97.674-72.468-30.326 0-51.988 18.511-51.988 43.717 0 44.898 49.231 74.043 148.086 74.043s151.237-37.415 151.237-73.649c.001-7.089-1.574-14.178-5.119-20.48zM164.628 88.223c-11.028-7.483-14.966-15.754-14.966-21.268 0-6.695 6.302-11.815 15.36-11.815 21.268 0 38.203 27.963 47.655 47.262-24.812-1.97-39.385-8.666-48.049-14.179zm174.867 0c-8.665 5.514-23.237 12.209-48.049 14.178 9.058-19.298 25.994-47.262 47.655-47.262 9.058 0 15.36 5.12 15.36 11.815.001 5.515-3.938 13.785-14.966 21.269z" fill="#efefef"/><path d="M0 126.032l252.062 123.274 252.062-123.274v81.526l-252.85 123.274L0 207.558v-81.526z" fill="#e2574c"/><path d="M346.585 213.859v-9.058l-94.523-51.2-94.523 51.2v9.058L94.524 186.29v-12.603l154.387-81.526 3.151 1.575 3.151-1.575L409.6 173.293v12.603l-63.015 27.963z" fill="#efefef"/><path d="M346.585 204.801v251.668l63.015-31.508V173.293l-63.015 31.508z" fill="#dcdcdc"/><path d="M94.523 425.354l63.015 31.508V205.195l-63.015-31.902v252.061z" fill="#d1d1d1"/></svg>',
      },
      cta: {
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
        textValue: 'Main button',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Pro',
        type: 'heading',
        color: 'var(--ui-heading-color)',
      },
      price: {
        content: '$100',
        type: 'headingLg',
      },
      'price-info': {
        content: 'per month',
        type: 'caption',
        brightness: 50,
      },
      body: {
        content: '100 max connections<br>unlimited channels<br>200k messages / day',
        type: 'text',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.947 503.947"><path d="M156.762 355.214c22.055 22.055 22.055 58.289 0 80.345-22.055 22.055-87.04 50.806-109.095 28.751s6.695-87.04 28.751-109.095c22.055-22.056 57.895-22.056 80.344-.001z" fill="#efc75e"/><path d="M90.99 344.58v2.363c0 40.96 33.477 74.437 74.437 74.437h1.575c11.028-21.268 7.483-48.049-10.634-66.166-17.329-17.723-44.11-21.268-65.378-10.634z" fill="#deb957"/><path d="M272.553 231.546c67.348 67.348 80.738 163.052 16.935 226.855l-30.326 30.326c-63.803 63.803-19.692-89.403-87.04-156.751s-220.948-22.843-156.751-87.04l30.326-30.326c63.804-63.802 159.508-50.411 226.856 16.936z" fill="#f26c4f"/><path d="M495.47 8.629c20.48 20.48 11.422 150.449-114.215 276.48-81.92 81.526-133.514 110.277-133.514 110.277-54.745 37.022-81.132 11.815-115.791-22.843s-60.258-61.046-22.843-115.791c0 0 29.145-51.988 110.671-133.908C345.414-2.792 474.99-12.244 495.47 8.629z" fill="#f4f0d3"/><path d="M269.402 377.663c-57.108 38.203-84.677 12.209-120.517-23.631-36.234-36.234-62.622-63.409-23.631-120.517l5.908-9.452c-15.36 20.874-22.055 32.689-22.055 32.689-37.415 54.745-11.815 81.132 22.843 115.791s61.046 59.471 115.791 22.843c0 0 24.418-13.785 66.56-48.837-28.751 22.056-44.899 31.114-44.899 31.114z" fill="#e8e4c8"/><path d="M363.531 140.568c19.298 19.298 19.298 50.412 0 69.711-19.298 19.298-50.412 19.298-69.711 0-19.298-19.298-19.298-50.412 0-69.711s50.807-19.299 69.711 0z" fill="#8ba0ab"/><path d="M249.71 262.66c9.846 9.846-9.058 44.898-57.108 92.948s-77.194 61.046-87.04 50.806c-9.846-9.846 2.757-38.991 50.806-87.04 48.443-48.049 83.102-66.954 93.342-56.714z" fill="#f26c4f"/><path d="M328.873 137.811c9.846 0 19.298 3.938 26.388 11.028 7.089 7.089 11.028 16.542 11.028 26.388s-3.938 19.298-11.028 26.388c-7.089 7.089-16.542 11.028-26.388 11.028s-19.298-3.938-26.388-11.028c-7.089-7.089-11.028-16.542-11.028-26.388s3.938-19.298 11.028-26.388c7.089-7.09 16.542-11.028 26.388-11.028m0-11.815c-12.603 0-25.206 4.726-34.658 14.572-19.298 19.298-19.298 50.412 0 69.711 9.452 9.452 22.055 14.572 34.658 14.572s25.206-4.726 34.658-14.572c19.298-19.298 19.298-50.412 0-69.711-9.452-9.846-22.055-14.572-34.658-14.572z" fill="#324d5b"/><path d="M374.953 18.476c3.545 26.388 17.723 54.351 40.96 77.588 20.48 20.086 44.111 33.477 67.348 38.991C509.254 70.463 507.285 20.839 495.47 8.629c-11.422-11.815-58.683-13.784-120.517 9.847z" fill="#f26c4f"/></svg>',
      },
      cta: {
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
        textValue: 'Main button',
        type: 'primary',
      },
    },
  ],
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of',
    color: 'var(--ui-dark-shade-color)',
  },
  button: {
    ...Component.defaultContent.button,
    textValue: 'Additional button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
