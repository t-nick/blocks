import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-team/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg_out-team.jpg',
  },
  team: [
    {
      ...Component.defaultContent.team[0],
      position: {
        ...Component.defaultContent.team[0].position,
        content: 'CEO',
      },
      picture: {
        ...Component.defaultContent.team[0].picture,
        resourceRef: 'foto-1.jpg',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          offset: 10,
          color: 'brand-color',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      ...Component.defaultContent.team[1],
      picture: {
        ...Component.defaultContent.team[1].picture,
        resourceRef: 'foto-2.jpg',
      },
      position: {
        ...Component.defaultContent.team[1].position,
        content: 'MARKETING DIRECTOR',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          offset: 10,
          color: 'brand-color',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      ...Component.defaultContent.team[2],
      picture: {
        ...Component.defaultContent.team[2].picture,
        resourceRef: 'foto-3.jpg',
      },
      position: {
        ...Component.defaultContent.team[2].position,
        content: 'PRODUCT MANAGER',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          offset: 10,
          color: 'brand-color',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><g stroke-width="0"><circle cx="3.171" cy="1.984" r="1.967"/><path d="M.976 10.845h.195v3.903c0 .537.439.975.975.975h2.05a.978.978 0 0 0 .975-.975v-.228a2.466 2.466 0 0 1-.293-1.138V8.276c0-.991.602-1.853 1.463-2.227v-.39a.978.978 0 0 0-.975-.976H.976A.978.978 0 0 0 0 5.659v4.21c0 .538.423.976.976.976z"/><circle cx="16.797" cy="1.984" r="1.967"/><path d="M13.61 5.642v.39a2.433 2.433 0 0 1 1.463 2.228v5.09c0 .406-.098.796-.293 1.138v.227c0 .537.44.976.976.976h2.049a.978.978 0 0 0 .975-.976v-3.902h.195a.978.978 0 0 0 .976-.976V5.642a.978.978 0 0 0-.976-.975h-4.39a.978.978 0 0 0-.975.975zM6.358 8.276v5.106c0 .537.439.976.975.976h.374v4.601c0 .537.44.976.976.976H11.3a.978.978 0 0 0 .975-.976v-4.618h.374a.978.978 0 0 0 .976-.975v-5.09a.978.978 0 0 0-.976-.975H7.333a.968.968 0 0 0-.975.975z"/><circle cx="9.984" cy="4.228" r="2.26"/></g></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'member-desc': {defaultValue: false, label: 'Team member bio', type: 'hidden'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'hidden'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'hidden'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
