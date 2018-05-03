import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#f7f7f7',
  },
  title: {
    content: 'Why Choose Us',
    type: 'blockTitle',
  },
  why: [
    {
      title: {
        content: 'First Reason',
        type: 'heading',
      },
      description: {
        content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning ',
        type: 'text',
        brightness: 40,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.989 511.989"><path d="M255.994 213.336c-5.906 0-10.672-4.781-10.672-10.672v-42.663c0-5.891 4.766-10.664 10.672-10.664 5.874 0 10.655 4.773 10.655 10.664v42.663c0 5.891-4.781 10.672-10.655 10.672z" fill="#f6bb42"/><path d="M309.321 192h-106.67c-5.891 0-10.656 4.773-10.656 10.664v42.671c0 5.891 4.765 10.664 10.656 10.664h106.67c5.891 0 10.672-4.773 10.672-10.664v-42.671c0-5.89-4.781-10.664-10.672-10.664z" fill="#434a54"/><path d="M479.989 362.653H330.648c-5.891 0-10.655 4.781-10.655 10.688v106.652a10.648 10.648 0 0 0 10.655 10.656h149.341c5.875 0 10.656-4.766 10.656-10.656V373.341c0-5.907-4.781-10.688-10.656-10.688zm-298.665-42.656H31.999c-5.906 0-10.671 4.781-10.671 10.656v149.34c0 5.891 4.765 10.656 10.671 10.656h149.325c5.891 0 10.672-4.766 10.672-10.656v-149.34c-.001-5.875-4.782-10.656-10.672-10.656z" fill="#fc6e51"/><path d="M330.648 234.663H181.324c-5.891 0-10.671 4.781-10.671 10.672v234.658c0 5.891 4.781 10.656 10.671 10.656h149.325c5.891 0 10.672-4.766 10.672-10.656V245.335c-.001-5.89-4.782-10.672-10.673-10.672z" fill="#ffce54"/><path d="M501.316 490.649H10.656C4.765 490.649 0 485.883 0 479.993s4.765-10.654 10.656-10.654h490.661c5.891 0 10.672 4.764 10.672 10.654s-4.782 10.656-10.673 10.656z" fill="#434a54"/><path d="M200.542 138.674c-1.234 0-2.5-.219-3.734-.688-46.717-17.515-57.577-80.256-58.014-82.912-.5-3.094.375-6.25 2.391-8.641 2.031-2.382 5-3.765 8.141-3.765h42.671c5.875 0 10.656 4.781 10.656 10.671s-4.781 10.664-10.656 10.664h-29.046c5.016 16.555 16.921 44.851 41.343 54.015 5.516 2.062 8.312 8.211 6.25 13.727a10.692 10.692 0 0 1-10.002 6.929zm110.873 0a10.68 10.68 0 0 1-9.984-6.929c-2.062-5.516.734-11.664 6.25-13.727 24.546-9.211 36.404-37.476 41.373-54.015h-29.061c-5.906 0-10.672-4.773-10.672-10.664s4.766-10.671 10.672-10.671h42.654c3.141 0 6.109 1.383 8.141 3.765a10.747 10.747 0 0 1 2.391 8.641c-.438 2.656-11.297 65.397-58.014 82.912-1.234.469-2.5.688-3.75.688z" fill="#f6bb42"/><path d="M319.993 21.34H191.995c-5.906 0-10.672 4.773-10.672 10.664v63.999c0 41.171 33.483 74.663 74.67 74.663 41.155 0 74.654-33.492 74.654-74.663V32.004c.001-5.89-4.78-10.664-10.654-10.664z" fill="#ffce54"/><path d="M255.994 117.338c-5.906 0-10.672-4.781-10.672-10.672V74.667c0-5.891 4.766-10.664 10.672-10.664 5.874 0 10.655 4.773 10.655 10.664v31.999c0 5.891-4.781 10.672-10.655 10.672z" fill="#e8aa3d"/></svg>',
      },
    },
    {
      title: {
        content: 'Second Reason',
        type: 'heading',
      },
      description: {
        content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning ',
        type: 'text',
        brightness: 40,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path d="M423.724 282.483h-17.655v-52.966h17.655a8.829 8.829 0 0 1 8.828 8.828v35.31a8.829 8.829 0 0 1-8.828 8.828zM171.359 52.966l-6.751 64.701-49.849 41.23 32.292-96.877a13.24 13.24 0 0 1 12.562-9.054h11.746zm151.627 0l6.751 64.701 49.849 41.23-32.292-96.877a13.24 13.24 0 0 0-12.562-9.054h-11.746zm0 406.068l6.751-64.701 49.849-41.23-32.292 96.877a13.24 13.24 0 0 1-12.562 9.054h-11.746zm-151.627 0l-6.751-64.701-49.849-41.23 32.292 96.877a13.24 13.24 0 0 0 12.562 9.054h11.746z" fill="#d5dcec"/><path d="M316.866 88.276H177.479c-5.223 0-9.303-4.51-8.783-9.706l6.268-62.671C175.864 6.873 183.459 0 192.53 0h109.286c9.07 0 16.665 6.873 17.568 15.898l6.268 62.671c.517 5.197-3.563 9.707-8.786 9.707z" fill="#aa6455"/><path d="M300.138 70.621H194.207a8.829 8.829 0 0 1 0-17.656h105.931a8.829 8.829 0 0 1 0 17.656z" fill="#9b5a50"/><path d="M177.479 423.724h139.388c5.223 0 9.303 4.51 8.783 9.706l-6.268 62.671c-.902 9.025-8.497 15.898-17.567 15.898H192.53c-9.07 0-16.665-6.873-17.568-15.898l-6.268-62.671c-.519-5.197 3.562-9.706 8.785-9.706z" fill="#aa6455"/><path d="M194.207 441.379h105.931a8.829 8.829 0 0 1 0 17.656H194.207a8.829 8.829 0 0 1 0-17.656z" fill="#9b5a50"/><circle cx="247.172" cy="256" r="167.724" fill="#e4eaf6"/><circle cx="247.172" cy="256" r="150.069" fill="#c7cfe2"/><circle cx="247.172" cy="256" r="132.414" fill="#fff"/><path d="M317.793 249.379h-64v-55.172a6.622 6.622 0 0 0-13.242 0v55.172h-11.034a6.621 6.621 0 0 0 0 13.242h11.034v11.034a6.622 6.622 0 0 0 13.242 0v-11.034h64a6.621 6.621 0 0 0 0-13.242z" fill="#5b5d6e"/><circle cx="247.172" cy="256" r="13.241" fill="#c7cfe2"/><path d="M141.241 262.621h-8.828a6.621 6.621 0 0 1 0-13.242h8.828a6.621 6.621 0 0 1 0 13.242zm220.69 0h-8.828a6.621 6.621 0 0 1 0-13.242h8.828a6.621 6.621 0 0 1 0 13.242zM247.172 377.379a6.621 6.621 0 0 1-6.621-6.621v-8.828a6.622 6.622 0 0 1 13.242 0v8.828a6.622 6.622 0 0 1-6.621 6.621zm0-220.689a6.621 6.621 0 0 1-6.621-6.621v-8.828a6.622 6.622 0 0 1 13.242 0v8.828a6.622 6.622 0 0 1-6.621 6.621z" fill="#5b5d6e"/><path d="M195.602 358.676c-1.827 3.166-5.9 4.288-9.066 2.461-3.166-1.827-4.273-5.842-2.445-9.006l.043-.075a6.621 6.621 0 0 1 11.468 6.62zM310.36 159.907c-1.827 3.166-5.9 4.288-9.066 2.461s-4.273-5.842-2.445-9.006l.043-.075a6.622 6.622 0 0 1 9.044-2.423 6.62 6.62 0 0 1 2.424 9.043zm-11.504 198.769c1.827 3.166 5.9 4.288 9.066 2.461 3.166-1.827 4.273-5.842 2.445-9.006l-.043-.075a6.622 6.622 0 0 0-9.044-2.423 6.62 6.62 0 0 0-2.424 9.043zM184.097 159.907c1.827 3.166 5.9 4.288 9.066 2.461 3.166-1.827 4.273-5.842 2.445-9.006l-.043-.075a6.621 6.621 0 0 0-11.468 6.62zm-39.549 44.462c-3.166-1.827-4.288-5.9-2.461-9.066 1.827-3.166 5.842-4.273 9.006-2.445l.075.043a6.622 6.622 0 0 1-6.62 11.468zm198.769 114.758c-3.166-1.827-4.288-5.9-2.461-9.066 1.827-3.166 5.842-4.273 9.006-2.445l.075.043a6.621 6.621 0 0 1-6.62 11.468zm-198.769-11.505c-3.166 1.827-4.288 5.9-2.461 9.066s5.842 4.273 9.006 2.445l.075-.043a6.622 6.622 0 0 0 2.423-9.044 6.62 6.62 0 0 0-9.043-2.424zm198.769-114.759c-3.166 1.827-4.288 5.9-2.461 9.066 1.827 3.166 5.842 4.273 9.006 2.445l.075-.043a6.622 6.622 0 0 0-6.62-11.468z" fill="#959cb3"/></svg>',
      },
    },
    {
      title: {
        content: 'Third Reason',
        type: 'heading',
      },
      description: {
        content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning ',
        type: 'text',
        brightness: 40,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.999 511.999"><path d="M469.592 161.546s-84.75-77.878-127.125-121.398S255.999.064 255.999.064s-44.093-3.437-86.468 40.084S42.406 161.546 42.406 161.546L32.099 199.34v312.659H479.9V199.34l-10.308-37.794z" fill="#d89932"/><path d="M443.251 346.352c0 7.18-5.82 13-13 13H90.909c-7.18 0-13-5.82-13-13V108.12c0-7.18 5.82-13 13-13h339.342c7.18 0 13 5.82 13 13v238.232z" fill="#e2e5e7"/><path opacity=".07" fill="#2d404e" d="M189.383 330.665l15.647-.763L71.42 204.685l-39.321-5.345zm133.138 0l-15.647-.763 133.61-125.217 39.321-5.345z"/><path fill="#f2b643" d="M32.099 199.34v312.658l157.412-181.526L69.893 207.739zm447.706 0v312.658L322.394 330.472l119.617-122.733z"/><path opacity=".54" fill="#d89932" d="M32.099 511.998v-37.793l151.985-149.301 5.427 5.568zm447.706 0v-37.793L327.821 324.904l-5.427 5.568z"/><path d="M468.685 475.922S347.826 349.371 336.889 339.064c-10.938-10.307-19.688-9.161-19.688-9.161H194.702s-8.75-1.146-19.688 9.161C164.076 349.372 43.219 475.922 43.219 475.922l-10.392 36.076h446.249l-10.391-36.076z" fill="#f2b643"/><g fill="#d1d5d5"><path d="M132.133 226.84l29.855-55.562 12.741 30.735s-.289-13.965 9.309-13.743 16.927 38.57 16.927 38.57h-68.832z"/><circle cx="180.515" cy="177.364" r="6.087"/></g><path d="M373.652 183.307a5.727 5.727 0 0 1-5.727 5.727H255.376a5.727 5.727 0 0 1-5.727-5.727v-.216a5.728 5.728 0 0 1 5.727-5.727h112.549a5.727 5.727 0 0 1 5.727 5.727v.216zm0 21.975a5.727 5.727 0 0 1-5.727 5.727H255.376a5.727 5.727 0 0 1-5.727-5.727v-.216a5.728 5.728 0 0 1 5.727-5.727h112.549a5.727 5.727 0 0 1 5.727 5.727v.216zm0 21.977a5.726 5.726 0 0 1-5.727 5.726H255.376a5.726 5.726 0 0 1-5.727-5.726v-.216a5.727 5.727 0 0 1 5.727-5.727h112.549a5.726 5.726 0 0 1 5.727 5.727v.216z" fill="#d1d5d5"/><path fill="#df584c" d="M166.55 95.12l-13.923 25.578h22.102l13.923-25.578z"/><path fill="#e2e5e7" d="M144.447 95.12l-13.922 25.578h22.102L166.55 95.12zm44.205 0l-13.923 25.578h22.103l13.922-25.578zm44.205 0l-13.923 25.578h22.103l13.922-25.578z"/><path fill="#df584c" d="M77.91 95.12v25.578h8.41l13.923-25.578z"/><path fill="#e2e5e7" d="M100.243 95.12L86.32 120.698h22.102l13.923-25.578zm265.228 0l-13.922 25.578h22.103l13.922-25.578zm44.205 0l-13.923 25.578h22.103l13.923-25.578z"/><path fill="#df584c" d="M254.959 95.12l-13.922 25.578h22.102l13.923-25.578zm176.82 0l-13.923 25.578h25.395V95.12zm-88.41 0l-13.922 25.578h22.102l13.922-25.578z"/><path fill="#e2e5e7" d="M277.062 95.12l-13.923 25.578h22.103l13.922-25.578z"/><path d="M210.754 95.12l-13.922 25.578h22.102l13.923-25.578zm-88.409 0l-13.923 25.578h22.103l13.922-25.578zm265.229 0l-13.922 25.578h22.101l13.923-25.578zm-88.41 0l-13.922 25.578h22.102l13.922-25.578z" fill="#2d404e"/><path fill="#e2e5e7" d="M321.266 95.12l-13.922 25.578h22.103l13.922-25.578z"/></svg>',
      },
    },
    {
      title: {
        content: 'Fourth Reason',
        type: 'heading',
      },
      description: {
        content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning ',
        type: 'text',
        brightness: 40,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path fill="#c6cbcb" d="M0 28.912l331.169 419.483 29.438-99.878z"/><path fill="#d672ad" d="M231.47 234.064l-22.733 59.249 122.432 155.082 29.438-99.878z"/><path fill="#d1d5d5" d="M331.169 448.395l-30.488-74.646L0 28.912l267.039 366.915z"/><path fill="#e2e5e7" d="M300.681 373.749L128.262 483.087 0 28.912zm59.926-25.232L0 28.912l512 253.371z"/><path fill="#ea8ebc" d="M182.646 238.382l-58.893 228.742 4.509 15.963 172.583-109.469zm308.281 33.474L231.47 234.064 360.482 348.94 512 282.283z"/><path fill="#d672ad" d="M182.646 238.382l-58.893 228.742 67.548-218.839zm48.824-4.318l11.506 10.246 247.951 27.546z"/><path fill="#c6cbcb" d="M300.845 373.618l-34.187 21.686 26.163 21.656z"/><path fill="#ea8ebc" d="M12.714 73.934l10.292-18.638L0 28.912zM27.91 53.648l23.231.572L0 28.912z"/></svg>',
      },
    },
  ],
  button: {
    ...Component.defaultContent.button,
    textValue: 'Main button (L)',
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'hidden'},
}

export default ExtendedWireframe
