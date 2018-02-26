import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  title: 'Why Choose Us',
  articles: [
    {
      id: 'f822d787-b3e2-432d-a03e-689c58efb302',
      title: 'Experience',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><path d='M309.618 96.455c-19.229-18.964-44.714-29.208-71.73-28.824-26.001.362-50.549 10.737-69.122 29.213-18.574 18.478-29.075 42.971-29.568 68.969a100.186 100.186 0 0 0 32.834 76.098c8.175 7.419 12.863 18.059 12.863 29.19v13.297c0 8.577 4.053 16.221 10.338 21.133v30.505c0 13.899 11.306 25.204 25.203 25.204h37.75c13.897 0 25.203-11.306 25.203-25.203v-30.505c6.285-4.912 10.338-12.556 10.338-21.133v-13.297c0-11.1 4.744-21.79 13.016-29.329 20.782-18.94 32.701-45.919 32.701-74.019 0-27.01-10.592-52.332-29.826-71.299zM258.186 341.24h-37.75a5.209 5.209 0 0 1-5.203-5.203v-24.822h48.155v24.822h.001a5.209 5.209 0 0 1-5.203 5.203zm35.085-114.248c-12.421 11.32-19.544 27.397-19.544 44.111V284.4a6.822 6.822 0 0 1-6.814 6.815h-55.204c-3.757 0-6.814-3.058-6.814-6.815v-13.297c0-16.76-7.079-32.797-19.422-44a80.19 80.19 0 0 1-26.28-60.909c.811-42.725 36.237-77.968 78.972-78.563.386-.005.767-.008 1.152-.008 21.202 0 41.143 8.168 56.257 23.074 15.392 15.179 23.869 35.443 23.869 57.059 0 22.486-9.54 44.077-26.172 59.236z'/><path d='M437.431 263.396l-31.065-56.746v-38.896C406.366 75.254 331.112 0 238.612 0S70.859 75.254 70.859 167.754v28.807c0 35.785 10.757 70.015 31.144 99.213v82.576c0 5.522 4.477 10 10 10s10-4.478 10-10v-85.772a9.996 9.996 0 0 0-1.909-5.876c-19.125-26.335-29.235-57.505-29.235-90.141v-28.807C90.858 86.282 157.141 20 238.612 20s147.754 66.282 147.754 147.754v41.455a9.99 9.99 0 0 0 1.229 4.802L419.888 273c2.44 4.457.688 8.321-.178 9.775-.863 1.45-3.412 4.812-8.459 4.812h-.052l-14.787-.067c-2.702-.022-5.216 1.036-7.101 2.913a10 10 0 0 0-2.945 7.087v44.629c0 23.848-19.402 43.25-43.25 43.25h-30.021c-13.624 0-24.708 11.084-24.708 24.709v76.435L152.446 425.44c-5.039-2.267-10.957-.016-13.221 5.021s-.016 10.956 5.021 13.221l150.041 67.438a10 10 0 0 0 14.099-9.121v-91.893a4.714 4.714 0 0 1 4.708-4.709h30.021c34.876 0 63.25-28.374 63.25-63.25v-34.583l4.741.021h.143c10.623 0 20.201-5.44 25.643-14.575 5.466-9.174 5.668-20.245.539-29.614z'/><circle cx='112.909' cy='417.49' r='10'/></svg>",
        fill: 'var(--ui-brand-color)',
      },
      iconText: '01',
      iconImage: {
        resourceRef: 'icon-1.png',
        alt: 'Item icon',
      },
      description: 'Imaginative, experienced & skilled artists',
    },
    {
      id: '18ce5632-46d1-4c9e-b249-ca0e37f665c2',
      title: 'Support',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512.001 512.001'><path d='M441.307 0H70.694C47.697 0 28.987 18.71 28.987 41.707v172.577c0 22.997 18.709 41.706 41.706 41.706h15.173l41.001 54.995c4.46 5.981 11.164 9.272 18.232 9.272 2.396 0 4.834-.378 7.24-1.158 9.504-3.08 15.732-11.525 15.87-21.513l.572-41.595h45.994a60.661 60.661 0 0 0-4.469 22.881c0 19.472 9.181 36.828 23.427 48.005-45.824 16.272-78.624 59.078-78.624 109.194v55.919H95.204c-5.525 0-10.004 4.479-10.004 10.004 0 5.525 4.479 10.004 10.004 10.004h330.76c5.525 0 10.004-4.479 10.004-10.004 0-5.525-4.479-10.004-10.004-10.004H394.14v-55.917c0-51.816-35.067-95.815-83.336-110.755 13.151-11.198 21.515-27.859 21.515-46.445 0-33.638-27.367-61.005-61.005-61.005-16.933 0-32.272 6.939-43.335 18.116h-69.063c-5.471 0-9.928 4.396-10.003 9.866l-.708 51.461c-.024 1.741-1.118 2.459-2.033 2.756-.913.295-2.222.355-3.262-1.039l-44.001-59.019a10.002 10.002 0 0 0-8.02-4.025H70.694c-11.965 0-21.699-9.734-21.699-21.699V41.707c0-11.965 9.734-21.7 21.699-21.7h370.613c11.965 0 21.699 9.734 21.699 21.7v172.577c0 11.965-9.734 21.699-21.699 21.699h-38.228c-5.525 0-10.004 4.479-10.004 10.004 0 5.525 4.479 10.004 10.004 10.004h38.228c22.997 0 41.706-18.709 41.706-41.706V41.707C483.015 18.71 464.304 0 441.307 0zm-67.174 436.072v55.919h-32.981v-52.387c0-5.525-4.479-10.004-10.004-10.004s-10.004 4.479-10.004 10.004v52.387h-91.268v-52.387c0-5.525-4.479-10.004-10.004-10.004-5.525 0-10.004 4.479-10.004 10.004v52.387h-34.747v-55.919c0-53.042 44.639-96.194 99.506-96.194s99.506 43.152 99.506 96.194zM271.315 237.875c22.606 0 40.997 18.391 40.997 40.997s-18.391 40.997-40.997 40.997-40.997-18.391-40.997-40.997 18.391-40.997 40.997-40.997z'/><circle cx='468.886' cy='501.998' r='10.003'/><circle cx='170.838' cy='123.479' r='10.004'/><circle cx='229.201' cy='123.479' r='10.004'/><circle cx='281.412' cy='123.479' r='10.004'/><circle cx='338.545' cy='123.479' r='10.004'/><circle cx='360.333' cy='245.557' r='10.004'/></svg>",
        fill: 'var(--ui-brand-color)',
      },
      iconText: '02',
      iconImage: {
        resourceRef: 'icon-2.png',
        alt: 'Item icon',
      },
      description: 'Years upon years of successful operation',
    },
    {
      id: '7986b4e0-751f-48f6-8861-5ace080e284b',
      title: 'Technologies',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><circle cx='10.06' cy='500.446' r='10.06'/><circle cx='267.005' cy='245.308' r='10.04'/><path d='M398.479 118.032c-8.071-8.072-18.802-12.516-30.216-12.516-11.414 0-22.146 4.446-30.216 12.516-16.661 16.662-16.661 43.772 0 60.433 8.332 8.331 19.272 12.495 30.216 12.495 10.941 0 21.886-4.166 30.216-12.495 16.661-16.662 16.661-43.772 0-60.433zm-14.197 46.234c-8.833 8.832-23.206 8.832-32.037 0-8.833-8.832-8.833-23.204 0-32.037a22.503 22.503 0 0 1 16.018-6.635 22.503 22.503 0 0 1 16.018 6.635c8.833 8.833 8.833 23.205.001 32.037zM125.409 411.45c-4.964-2.472-10.99-.451-13.462 4.512l-11.958 24.015c-5.2 10.441-15.658 17.423-27.296 18.219l-13.908.952c-2.351.157-3.897-1.014-4.612-1.729s-1.889-2.264-1.729-4.613l.952-13.907c.797-11.637 7.779-22.096 18.219-27.296l24.014-11.958c4.964-2.472 6.984-8.499 4.512-13.462-2.471-4.963-8.498-6.984-13.462-4.512l-24.014 11.958c-16.792 8.362-28.02 25.182-29.302 43.898l-.952 13.907a26.021 26.021 0 0 0 7.562 20.183 26.024 26.024 0 0 0 20.183 7.563l13.908-.952c18.716-1.281 35.536-12.508 43.898-29.302l11.958-24.014c2.472-4.964.452-10.99-4.511-13.462z'/><path d='M505.07 8.18a23.246 23.246 0 0 0-17.793-6.639l-9.348.596c-83.819 5.351-162.262 45.81-215.215 111.004L240.71 140.23l-57.583-1.691a9.65 9.65 0 0 0-.294-.004c-45.668 0-88.603 17.784-120.896 50.076L2.959 247.59a10.04 10.04 0 0 0 6.584 17.125l124.844 6.414-5.09 6.267a10.039 10.039 0 0 0-1.026 11.127 233.734 233.734 0 0 0 6.144 10.617l-29.606 35.147a10.045 10.045 0 0 0-1.397 10.763c6.467 13.665 15.05 25.943 25.514 36.493 10.718 10.808 23.251 19.646 37.249 26.271a10.042 10.042 0 0 0 10.62-1.278c6.378-5.174 13.731-11.311 20.843-17.245 5.069-4.23 10.255-8.557 15.102-12.547a232.586 232.586 0 0 0 8.795 5.046 10.026 10.026 0 0 0 4.796 1.221c2.186 0 4.358-.712 6.156-2.108l6.843-5.31 6.442 125.37a10.041 10.041 0 0 0 10.023 9.526c2.615 0 5.183-1.023 7.101-2.942l58.979-58.979c32.293-32.293 50.076-75.227 50.076-120.896v-54.995l23.267-18.055c69.729-54.11 112.196-135.704 116.512-223.862l.239-4.886A23.262 23.262 0 0 0 505.07 8.18zM33.123 245.822l43.012-43.012c28.465-28.465 66.303-44.157 106.553-44.196l42.085 1.236-74.71 91.98-116.94-6.008zm151.651 128.052c-5.241 4.372-10.614 8.856-15.6 12.957-9.644-5.223-18.368-11.74-25.992-19.428-7.384-7.445-13.669-15.922-18.737-25.26l21.676-25.733a232.758 232.758 0 0 0 21.478 24.925l.018.017.006.007.009.008a232.765 232.765 0 0 0 27.641 23.761c-3.462 2.874-7.009 5.834-10.499 8.746zm167.101-46.202c0 40.305-15.695 78.197-44.196 106.698l-43.012 43.012-6.002-116.792 93.209-72.33v39.412zM491.678 29.779c-4.029 82.297-43.673 158.467-108.767 208.98l-157.46 122.189c-13.058-7.63-25.229-16.639-36.368-26.846l53.086-53.086c3.92-3.92 3.92-10.278 0-14.199-3.921-3.921-10.278-3.921-14.199 0l-53.036 53.036c-9.751-10.795-18.387-22.541-25.74-35.104L278.3 125.8c49.432-60.859 122.66-98.629 200.907-103.623l9.348-.596a3.151 3.151 0 0 1 2.423.904c.377.371 1 1.178.94 2.409l-.24 4.885z'/></svg>",
        fill: 'var(--ui-brand-color)',
      },
      iconText: '03',
      iconImage: {
        resourceRef: 'icon-3.png',
        alt: 'Item icon',
      },
      description: 'The most affordable tattoo & piercing parlor',
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'icon-replacer': {
    defaultValue: 'image',
    label: 'Image replacer',
    options: [
      {id: 'icon', label: 'Show icon'},
      {id: 'image', label: 'Show image'},
      {id: 'text', label: 'Show text'},
    ],
    type: 'select',
  },
  'item-description': {defaultValue: true, label: 'Advantages description', type: 'checkbox'},
  'item-heading': {defaultValue: false, label: 'Advantages title', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Advantages icon', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
