import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    image: {
      resourceRef: 'Logo.png',
      alt: 'Монстроид',
      width: 180, // ширина
      height: 40, // высота
    },
  },
  map: {
    preset: 'dafault',
    height: '100%',
    center: {
      lat: 51.509572,
      lng: -0.134223,
    },
    zoom: 15,
    activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
    disableDefaultUI: true,
    allowZoomOnScroll: false,
    markers: [
      {
        position: {
          lat: 51.509572,
          lng: -0.134223,
        },
        name: 'Address',
        description: 'This is marker description',
        address: 'Head office in London - 36 Regent St.',
        id: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
      },
    ],
  },
  'address-content': {
    content: '1204 Allen Drive  </br> Grand Island, NE 68803',
    type: 'text',
  },
  'phone-link': {
    content: '<a href="tel:+10845532465">+1 084 553 24 65</a>',
    type: 'text',
  },
  'email-link': {
    content: '<a href="mailto:monstroid2@a.weblium.com">monstroid2@a.weblium.com</a>',
    type: 'text',
  },
  socialIcons: {
    networks: [
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    target: '_blank',
    design: {
      border: null,
      innerFill: true,
      preset: 'preset001',
      offset: 8,
      color: 'var(--ui-dark-shade-color)',
      sizes: [20, 30, 40],
      size: 40,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
