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
      title: 'Experience',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 60 75'><path d='M30 60C13.458 60 0 46.542 0 30S13.458 0 30 0s30 13.458 30 30-13.458 30-30 30zm0-58C14.561 2 2 14.561 2 30s12.561 28 28 28 28-12.561 28-28S45.439 2 30 2z'/><path fill='#000000' d='M30 32c-.52 0-1.04-.21-1.41-.59-.38-.37-.59-.89-.59-1.41 0-.53.21-1.04.58-1.41.75-.75 2.09-.75 2.83-.01a2.006 2.006 0 0 1 .01 2.83c-.38.38-.9.59-1.42.59z'/><path fill='#000000' d='M30 31a1 1 0 0 1-1-1V15a1 1 0 0 1 2 0v12.485l15.273-16.171a1.001 1.001 0 0 1 1.455 1.373l-17 18A1.003 1.003 0 0 1 30 31z'/></svg>",
        fill: 'dark-shade-color',
      },
      description:
        'We have a considerable experience and already completed more than 10 000 projects.',
    },
    {
      title: 'Support',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 24 30'><path d='M1.63 21.903l5.265 1.97c.044.016.181.041.228.041a.39.39 0 0 0 .083-.009l7.928-1.691c.762 1.065 2.039 1.7 3.472 1.7 2.39 0 4.191-1.703 4.191-3.961 0-.131-.027-.254-.039-.382.003-.021.012-.039.012-.061v-3.358c0-2.533-.408-4.474-.841-6.528-.438-2.083-.89-4.235-.981-7.251h.515a.4.4 0 0 0 .4-.4v-.43c0-.803-.654-1.456-1.457-1.456H16.37c-.803 0-1.456.653-1.456 1.456v.43c0 .221.18.4.4.4h.598c-.076 2.451-.398 4.35-.774 6.172l-1.385-1.661V4.583a.66.66 0 0 0-.738-.651l-7.071.86a.659.659 0 0 0-.575.652v2.475l-3.875 2.529c-.002.001-.005.001-.007.003l-.004.005-.006.004a.386.386 0 0 0-.128.148.642.642 0 0 0-.145.384V21.29c0 .271.172.518.426.613zm13.091-.419l-7.287 1.554.034-10.006 8.712-1.864v5.367a4.18 4.18 0 0 0-1.767 3.418c0 .536.108 1.055.308 1.531zm3.883 1.63c-1.239 0-2.334-.564-2.928-1.51a3.043 3.043 0 0 1-.463-1.651c0-1.263.694-2.414 1.813-3.002a3.395 3.395 0 0 1 4.968 3.002c.001 1.802-1.456 3.161-3.39 3.161zm.364-8.716a1.74 1.74 0 0 0-.258.522.844.844 0 0 0-.373-.23.4.4 0 0 0-.228.767c.055.016.093.158.106.328a4.19 4.19 0 0 0-1.234.31v-5.104c0-.016-.009-.03-.01-.046.109-.271.221-.536.347-.773h2.169c.237.474.803 1.762 1.009 3.466-.699.077-1.203.325-1.528.76zm1.997.004l.171.003c-.053.582-.632 1.006-1.729 1.264-.011-.239.02-.551.205-.796.236-.312.691-.471 1.353-.471zm1.004 1.75v1.325c-.408-.553-.947-1-1.573-1.298 1.05-.431 1.425-1.04 1.512-1.579.035.498.061 1.008.061 1.552zM15.715 1.573v-.03c0-.362.294-.656.655-.656h4.035c.362 0 .656.294.656.656l-5.346.03zm.998.8h3.434c.092 3.099.554 5.292 1 7.416.275 1.311.529 2.589.681 3.988a.403.403 0 0 0-.265-.142c-.098-.01-.174-.002-.267-.008-.268-2.373-1.182-3.986-1.223-4.056a.4.4 0 0 0-.346-.198h-2.645a.4.4 0 0 0-.346.199c-.1.172-.195.357-.286.547l-.659-.79c.439-2.06.838-4.15.922-6.956zm-3.525 5.084l2.501 2.999L7.35 12.24 6.279 8.466l6.909-1.009zM6.17 5.571l6.782-.826v1.938l-6.782.99V5.571zm-.637 3.197l.932 3.282-3.758-1.438 2.826-1.844zM2.005 11.2l4.662 1.783-.009 2.817-4.653-1.55V11.2zm0 3.893l4.65 1.549-.009 2.746-4.641-1.621v-2.674zm0 3.521l4.638 1.62-.009 2.687-4.629-1.732v-2.575z'/><path d='M13.683 13.94l-4.004.857c-.013.003-.022.011-.035.015a.367.367 0 0 0-.073.032.393.393 0 0 0-.185.229.415.415 0 0 0-.016.078c-.001.013-.007.024-.008.037l-.0164.695.003.015c.001.028.01.054.016.081.006.024.009.048.018.07.01.023.027.042.042.063.015.021.027.043.046.061.016.016.037.025.056.038.025.016.048.034.076.045l.012.007a.651.651 0 0 0 .17.029.39.39 0 0 0 .083-.009l4.029-.859a.509.509 0 0 0 .403-.5v-4.481a.508.508 0 0 0-.192-.4.636.636 0 0 0-.425-.103zm-.182 4.749l-3.352.715.013-3.892 3.339-.715v3.892z'/></svg>",
        fill: 'dark-shade-color',
      },
      description:
        'We value each client and always respond to feedback throughout our cooperation.',
    },
    {
      title: 'Technologies',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 100 125'><g><path d='M68.106 88.13h-38.17V65.014c-10.44-.407-18.81-9.027-18.81-19.564 0-10.797 8.784-19.581 19.58-19.581 2.903 0 5.778.657 8.404 1.911 4.078-9.101 13.235-15.11 23.275-15.11 14.072 0 25.52 11.448 25.52 25.52a25.476 25.476 0 0 1-19.799 24.854V88.13zm-35.309-2.862h32.448V60.68l1.177-.212a22.615 22.615 0 0 0 18.622-22.277c0-12.495-10.165-22.659-22.659-22.659-9.394 0-17.918 5.928-21.21 14.75l-.594 1.593-1.468-.858a16.696 16.696 0 0 0-8.407-2.286c-9.219 0-16.719 7.5-16.719 16.719 0 9.218 7.5 16.718 16.719 16.718.101 0 .199-.008.298-.015l1.793-.074v23.189z'/><path d='M18.58 45.137h-2.146c0-7.438 6.052-13.491 13.491-13.491v2.146c-6.255 0-11.345 5.09-11.345 11.345zm19.303 25.392h2.146v9.431h-2.146zm9.57 0h2.146v9.431h-2.146zm9.57 0h2.146v9.431h-2.146z'/><path d='M31.696 78.696h35.199v2.146H31.696z'/></g></svg>",
        fill: 'dark-shade-color',
      },
      description:
        'We create our products using the latest technologies to ensure the best experience.',
    },
    {
      title: 'Technologies',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 100 125'><path d='M40.6 46.2c-9.6 2.6-17 10.6-18.7 20.4-.1.5.3 1.1.8 1.2h.2c.5 0 .9-.3 1-.8 1.6-9 8.4-16.4 17.3-18.9.5-.1.8-.7.7-1.2-.2-.6-.8-.9-1.3-.7z'/><path d='M11.4 87.6h76.2c.6 0 1-.4 1-1v-7.1c0-.6-.4-1-1-1h-1.4v-4.4c0-19.5-15.4-35.6-34.6-36.6 1.8-.8 3-2.6 3-4.6 0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1c0 2.1 1.2 3.8 3 4.6-19.3 1.1-34.6 17.1-34.6 36.6v4.4h-1.4c-.6 0-1 .4-1 1v7.1c0 .6.5 1 1 1zm35.1-54.8c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1-3.1-1.4-3.1-3.1zM14.8 74.1c0-19.1 15.6-34.7 34.7-34.7S84.2 55 84.2 74.1v4.4H14.8v-4.4zm-2.4 6.4h74.2v5.1H12.4v-5.1zm34-60.6c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7c-.6 0-1 .4-1 1s.4 1 1 1c.9 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7c-2 0-3.7 1.7-3.7 3.7s1.7 3.7 3.7 3.7c.6 0 1-.4 1-1s-.4-1-1-1c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7zm7.9 0c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7c-.6 0-1 .4-1 1s.4 1 1 1c.9 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7c-2 0-3.7 1.7-3.7 3.7s1.7 3.7 3.7 3.7c.6 0 1-.4 1-1s-.4-1-1-1c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7z'/></svg>",
        fill: 'dark-shade-color',
      },
      description:
        'We create our products using the latest technologies to ensure the best experience.',
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
}

export default ExtendedWireframe
