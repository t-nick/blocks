import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#fff',
  },
  articles: [
    {
      id: 'f822d787-b3e2-432d-a03e-689c58efb302',
      title: {
        content: 'Background checked',
        type: 'heading',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32.01 21"><defs><clipPath id="a"><path fill="none" d="M0 0h32.01v21H0z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#fff" fill-rule="evenodd" d="M31.91 19.58L26.35 7.66l-2.1 4.51 3.85 8.26a1.9 1.9 0 0 0 1.33.58h1.52a1 1 0 0 0 .48-.08 1 1 0 0 0 .48-1.33m-23.27-6L7 14.5l1.63.88.89 1.62.87-1.63L12 14.5l-1.62-.87L9.52 12zM15.49 7l1.22-2.28L19 3.5l-2.29-1.22L15.49 0l-1.23 2.28L12 3.5l2.28 1.22zm9.74-1.66v-.05l-.03-.11V5.1a1 1 0 0 0-.2-.28h-.07a.93.93 0 0 0-.16-.12h-.28a1 1 0 0 0-.23 0h-.18l-3.59.63-2 1.33-.66.98 4.71-.83L16.86 19h-14l2.47-3.8L4 14.5 6.7 13l2.53-3.84 4.31-.76-1-1.85-4.1.72a1 1 0 0 0-.61.42L.16 19.45a.77.77 0 0 0 0 .09 1 1 0 0 0-.07.17 1 1 0 0 0 0 .21L0 20v.1a1 1 0 0 0 0 .19.89.89 0 0 0 .08.19l.09.13a.94.94 0 0 0 .17.16l.06.06h.06a1 1 0 0 0 .23.09L.9 21h16.6a.94.94 0 0 0 .16 0 .93.93 0 0 0 .2 0 1 1 0 0 0 .22-.13l.1-.07a1 1 0 0 0 .21-.28l6.77-14.6a1 1 0 0 0 .06-.58"/></g></svg>',
        fill: '#5aafff',
      },
      iconText: {
        content: '01',
        type: 'text',
      },
      iconImage: {
        src: 'icon-1.png',
        alt: 'Picture instead icon',
      },
      description: {
        content: 'We have a considerable experience and already completed more than 10 000 projects.',
        type: 'text',
      },
    },
    {
      id: '18ce5632-46d1-4c9e-b249-ca0e37f665c2',
      title: {
        content: 'Professionally trained',
        type: 'heading',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 31.97 31.99"><defs><clipPath id="a"><path fill="#5aafff" d="M0 0h31.97v31.99H0z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#5aafff" d="M29 10.12c.73 1.17 2.14 3.7 1.84 5.28-.37 2-.52 3.17-.55 3.49a.56.56 0 0 0 .2-.18 19.86 19.86 0 0 0 1.43-5.09c.34-2.27-.87-2.68-2.92-3.51M.05 13.6a18.09 18.09 0 0 0 1.45 5.13.45.45 0 0 0 .19.16c0-.32-.18-1.52-.55-3.49-.31-1.58 1.1-4.11 1.86-5.28-2.09.83-3.28 1.24-2.95 3.48m16.28 9.53a.71.71 0 0 0 0-1.42h-.7a.71.71 0 0 0 0 1.42h.71zm-1.39 5a1.47 1.47 0 0 0 1 .65 1.52 1.52 0 0 0 1.06-.65 8.52 8.52 0 0 0 0-1.44 18.9 18.9 0 0 0-.49-2.78h-1.1a19 19 0 0 0-.49 2.78 8.57 8.57 0 0 0 0 1.48m1-7.89a3.87 3.87 0 0 0 3.88-3.86v-1.54a3.85 3.85 0 0 0-2.54-3.61 3.27 3.27 0 0 0-2.09-.18 3.86 3.86 0 0 0-3.14 3.78v1.54A3.87 3.87 0 0 0 16 20.28M12.81 15a3.29 3.29 0 0 1 .69-2 4 4 0 0 0 2.51.88A4.12 4.12 0 0 0 18.5 13a3.29 3.29 0 0 1 .66 2v1.3a3.18 3.18 0 1 1-6.36 0V15zm14.76-5.3c0 .13-.07.25-.11.37a8.33 8.33 0 0 1-1.13 2.57 1.12 1.12 0 0 1-1.69 0 8.18 8.18 0 0 1-1.13-2.57c0-.13-.08-.25-.11-.38l-.69.22a6.17 6.17 0 0 0-.24.67A11 11 0 0 1 23 14a1.15 1.15 0 0 0 .15.07 18.61 18.61 0 0 0 4.71 0c1.54-.36.92-3 .43-4.14l-.7-.23M7 29.69c0-.1 0 0 0 0m18-.29c-.1-2.17-.88-5.4-3.61-6.56a12.2 12.2 0 0 0-1.66-.52l-.51-.15a1.28 1.28 0 0 1 .68.78 6.22 6.22 0 0 1-.46 2.68 13.48 13.48 0 0 1-.66 1.78l-.13.26-.21.33-.18.31-.17.27-.2.28-.15.21-.22.25-.13.15-.23.22-.11.1-.24.21h-.06a1.56 1.56 0 0 1-.79.26 2.9 2.9 0 0 1-2.12-1.66v-.07c-.1-.16-.19-.32-.29-.51l-.09-.18c-.07-.14-.14-.27-.21-.42a14.47 14.47 0 0 1-.65-1.78 6.58 6.58 0 0 1-.46-2.7 1.11 1.11 0 0 1 .58-.72l-.37.1a10.46 10.46 0 0 0-1.69.53C7.91 24 7.12 27.21 7 29.37v.62c0 .61.79 1.13 2.31 1.49A39.09 39.09 0 0 0 16 32a37.14 37.14 0 0 0 6.66-.49c1.51-.37 2.34-.9 2.34-1.51a4.16 4.16 0 0 0 0-.59M6.49 8.29a3 3 0 0 0 1.95-.73 2.77 2.77 0 0 0 2.17.26c.59-.18 1-1.06.2-2.48a6.22 6.22 0 0 1-.66-2.39C10.08 1.2 8.45.12 7.32.59c-.53-1-2.24-.67-3.4.22a3.11 3.11 0 0 0-1.11 2.13 5.68 5.68 0 0 1-.67 2.4c-.82 1.45-.39 2.28.19 2.46a2.86 2.86 0 0 0 2.2-.25 3 3 0 0 0 2 .73M3.38 4.16zM3.94 4c3.1-.67 3-1.54 3.38-1.66A7.44 7.44 0 0 0 8.45 3a.94.94 0 0 0 .44 0 2.84 2.84 0 0 1 .11.89V5a2.63 2.63 0 0 1-2.51 2.69A2.63 2.63 0 0 1 3.94 5V4zM29.8 5.3a6.2 6.2 0 0 1-.66-2.39C29.08 1.2 27.45.12 26.32.59c-.53-1-2.24-.67-3.4.22a3.11 3.11 0 0 0-1.12 2.13 5.68 5.68 0 0 1-.67 2.4c-.82 1.45-.39 2.28.19 2.46a2.87 2.87 0 0 0 2.2-.25 3 3 0 0 0 3.9 0 2.77 2.77 0 0 0 2.17.26c.59-.18 1-1.06.2-2.48m-7.41-1.17zM28 5a2.55 2.55 0 1 1-5.08 0V4c3.1-.67 3-1.54 3.38-1.66a7.39 7.39 0 0 0 1.15.66.94.94 0 0 0 .43.07 2.84 2.84 0 0 1 .14.86V5zM9 14a11 11 0 0 1 .53-3.4 6.61 6.61 0 0 0-.24-.67l-.7-.23c0 .13-.07.25-.11.37a8.31 8.31 0 0 1-1.13 2.57 1.12 1.12 0 0 1-1.69 0 8.18 8.18 0 0 1-1.16-2.57c0-.13-.08-.25-.11-.38l-.69.22c-.5 1.11-1.12 3.82.43 4.16a18.61 18.61 0 0 0 4.71 0A1 1 0 0 0 9 14"/></g></svg>',
        fill: '#5aafff',
      },
      iconText: {
        content: '02',
        type: 'text',
      },
      iconImage: {
        src: 'icon-2.png',
        alt: 'Picture instead icon',
      },
      description: {
        content: 'We value each client and always respond to feedback throughout our cooperation.',
        type: 'text',
      },
    },
    {
      id: '7986b4e0-751f-48f6-8861-5ace080e284b',
      title: {
        content: 'Highly reviewed',
        type: 'heading',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.181 90.9"><path d="M60.2 87.6c-2.8-.5-5-1.5-7.1-3-.5-.4-1.3-.9-2.1-1.3-.7-.4-1.3-.8-1.9-1.2-1.5-1-3.1-1.9-4.6-2.7H7.4c-1.5 0-2.7-1.2-2.7-2.7V12.3c0-.8.4-1.5 1.1-2 .4-.2.8-.4 1.3-.4h50.4c.3 0 .7.1.9.3.7.4 1.2 1.2 1.2 2v34.1l2 2.5c.8-.2 1.7-.4 2.7-.7V7.3c0-3-1.8-5.6-4.5-6.7C58.9.2 58 0 57 0H7.4c-1 0-2 .2-2.8.6C1.8 1.9 0 4.5 0 7.5v76.3c0 3.9 3.2 7.1 7.1 7.1h49.8c2.2 0 4.2-1 5.5-2.5-1.2-.5-2-.7-2.2-.8zM35.6 87h-7c-.7 0-1.3-.4-1.7-1-.1-.3-.2-.6-.2-.9s.1-.6.2-.9c.3-.6.9-1 1.7-1h7c.5 0 1 .2 1.3.6l.3.3c.2.3.3.6.3 1 0 1.1-.8 1.9-1.9 1.9zm59.2-10c.7 1.2.4 2.7-.6 3.5l-12.1 9.8c-2 1.6-4.8 1.6-6.9.1-6.3-4.8-14.2-6.5-14.2-6.5-2-.4-3.8-1-5.6-2.3-1.2-.9-3-1.8-4.2-2.6-3.1-2.1-6.5-3.9-10.2-5.1-1.6-.5-2-1.5-1.4-3.1.3-.8 1.2-1.8 2-2.2 1.8-.9 3.7-.8 5.4-.5 1.1.1 5.9 2.4 8 3.3 1.9.7 2.2-1 2-3-.1-1-.4-1.9-.9-2.8-4.2-7.8-8.6-15.4-12.9-23.1-1-1.7-.6-3.5.9-4.5s3.5-.7 4.7.8c1.7 2.1 3.3 4.2 4.9 6.3 1.5 1.9 3 3.9 4.6 5.9l1.9 2.3S71.3 49 84 52c.7.2 1.3.6 1.6 1.3 1.4 2.6 5.1 9.8 6 16.7.5 1.8 1.2 3.3 1.6 4.3l1.6 2.7z"/></svg>',
        fill: '#5aafff',
      },
      iconText: {
        content: '03',
        type: 'text',
      },
      iconImage: {
        src: 'icon-3.png',
        alt: 'Picture instead icon',
      },
      description: {
        content: 'We create our products using the latest technologies to ensure the best experience.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Passionate & skilled',
        type: 'heading',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 31.99"><defs><clipPath id="a"><path fill="none" d="M0 0h32v31.99H0z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#fff" fill-rule="evenodd" d="M20.31 2.57c.58.17.69.84.69 1.67v5.82a1.58 1.58 0 0 0 1.44 1A1.56 1.56 0 0 0 24 9.93V3.34c0-1 .14-1.81 1-1.81s1 .84 1 1.81v5.43A1.5 1.5 0 0 0 27.45 10 1.46 1.46 0 0 0 29 8.77V6.42c0-1 .15-2.19 1.24-1.81.6.21.61.87.36 2 0 0-.28 1.17-.64 2.92A2.83 2.83 0 0 1 31 9.32C31.55 6.79 32 5 32 5a2 2 0 1 0-4 0v3.5a.5.5 0 0 1-1 0V2a2 2 0 1 0-4 0v7.5a.5.5 0 1 1-1 0V3a2 2 0 0 0-3.11-1.66 2.3 2.3 0 0 1 1.43 1.23M29.5 21v-.75a3.93 3.93 0 0 0-.93 2 18.31 18.31 0 0 0 .9 4c.26 1.35-.36 1.79-1.15 1.79h-2.06a1.94 1.94 0 0 1-.53.32L21.07 30H30c1 0 1.79-.5 1.46-2.05-.81-2.14-1.9-4.94-2-6.95m1.62-10a1.37 1.37 0 0 0-2 .58A6.08 6.08 0 0 1 27 13.71v1.5A18.12 18.12 0 0 0 29.44 13c.43-.5.93-.7 1.32-.11a1.43 1.43 0 0 1-.19 1.45 20.88 20.88 0 0 1-1.76 2.8C28 18.28 27 20 27 20v2.56a29 29 0 0 1 1.76-3.48C30 17.15 31.53 15.2 32 13.39a2.44 2.44 0 0 0-.88-2.39m-6.49 13.53c-1.06-2-2.89-4.36-3.54-6.14C19.38 13.68 18.83 7 18.69 5a1.76 1.76 0 0 0-.57-1.43 2 2 0 0 0-3.23 2.17L16.09 9a.5.5 0 1 1-.94.34l-2.57-7.06a2.006 2.006 0 1 0-3.77 1.37L11 9.78a.5.5 0 1 1-.94.34L7.53 3.05a2.003 2.003 0 1 0-3.76 1.38L6 10.55a.5.5 0 1 1-.94.34L3.85 7.6a2 2 0 0 0-2.56-1.2A2 2 0 0 0 0 8.41a2.84 2.84 0 0 0 .44 1.08c1.27 1.93 5.7 8.8 7.49 13.7A25.22 25.22 0 0 1 9 30.41c.22 1.57.61 1.77 1.54 1.43L23.71 27c.93-.34 1.82-.74.93-2.52"/></g></svg>',
        fill: '#5aafff',
      },
      iconText: {
        content: '03',
        type: 'text',
      },
      iconImage: {
        src: 'icon-4.png',
        alt: 'Picture instead icon',
      },
      description: {
        content: 'We create our products using the latest technologies to ensure the best experience.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'Our cleaners are dedicated professionals',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'item-description': {defaultValue: false, label: 'Advantages description', type: 'checkbox'},
  'item-heading': {defaultValue: true, label: 'Advantages title', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Advantages icon', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
