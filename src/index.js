import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  // background: {
  //   type: 'image',
  //   position: {
  //     type: 'cover',
  //     cover: '50% 50%',
  //   },
  //   resourceRef: 'bg_projects.jpg',
  // },
  projects: [
    {
      ...Component.defaultContent.projects[0],
      picture: {
        ...Component.defaultContent.projects[0].picture,
        resourceRef: 'project_1.jpg',
      },
      link: {
        ...Component.defaultContent.projects[0].link,
        iconEnabled: true,
        iconAlignment: 'right',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#32bbcb" d="M6.7 12.6c.3-.3.3-.9 0-1.2L4.4 9.1c-.9-.9-2.4.5-1.4 1.4.3.3.2.5-.2.5H1c-.6 0-1 .4-1 1 0 .5.4 1 1 1h1.8c.4 0 .5.2.2.5-1 .9.5 2.4 1.4 1.4l2.3-2.3z"/></svg>',
        },
        iconClassName: 'link-decorator',
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.projects[1],
      picture: {
        ...Component.defaultContent.projects[1].picture,
        resourceRef: 'project_2.jpg',
      },
      link: {
        ...Component.defaultContent.projects[1].link,
        iconEnabled: true,
        iconAlignment: 'right',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#32bbcb" d="M6.7 12.6c.3-.3.3-.9 0-1.2L4.4 9.1c-.9-.9-2.4.5-1.4 1.4.3.3.2.5-.2.5H1c-.6 0-1 .4-1 1 0 .5.4 1 1 1h1.8c.4 0 .5.2.2.5-1 .9.5 2.4 1.4 1.4l2.3-2.3z"/></svg>',
        },
        type: 'link',
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.5024641,12.510924 L16.2502669,12.4859548 C15.793347,12.4859548 15.3601232,12.5795893 14.9556468,12.7294045 L7.26899384,5.04151951 C7.41880903,4.63704312 7.51244353,4.2038193 7.51244353,3.74689938 L7.48747433,3.49470226 C7.355154,1.54587269 5.74965092,0.00156057495 3.76714579,0.00156057495 C3.19034908,0.00156057495 2.64977413,0.142628337 2.16164271,0.376098563 L4.64977413,2.86422998 C4.78086242,2.99531828 4.87075975,3.15010267 4.93067762,3.31367556 C5.09420945,3.75560575 5.00558522,4.2724846 4.64977413,4.62952772 C4.40632444,4.87297741 4.08673511,4.99531828 3.76714579,4.99531828 C3.61983573,4.99531828 3.4737577,4.96287474 3.33392197,4.91043121 C3.17039014,4.84800821 3.01556468,4.76061602 2.88447639,4.62829569 L0.396386037,2.1413963 C0.162915811,2.62952772 0.0218480493,3.17010267 0.0218480493,3.74689938 C0.0218480493,5.72940452 1.56616016,7.3349076 3.51498973,7.46722793 L3.76718686,7.49219713 C4.22410678,7.49219713 4.6573306,7.39856263 5.06180698,7.25002053 L12.7471869,14.9366735 C12.5998768,15.3411499 12.5062423,15.7743737 12.5062423,16.2312936 L12.5324435,16.4834908 C12.6622998,18.4335524 14.2690349,19.9766324 16.25154,19.9766324 C16.8283368,19.9766324 17.3701437,19.8380698 17.8570431,19.6020945 L15.3689117,17.113963 C15.2390554,16.9841068 15.1479261,16.8280903 15.0855031,16.6657906 C14.9219713,16.2238604 15.0105955,15.7057495 15.3689117,15.3487064 C15.6098563,15.1052567 15.9319507,14.9829158 16.25154,14.9829158 C16.3988501,14.9829158 16.543655,15.0141273 16.6859959,15.0678029 C16.8495277,15.1289938 17.0055852,15.216386 17.1341684,15.3487064 L19.6222998,17.8368378 C19.8570021,17.3474333 19.9968378,16.8081314 19.9968378,16.2313347 C19.9956057,14.2487474 18.4512936,12.6432444 16.5024641,12.510924 Z"></path><polygon points="15.915729 5.4035729 18.5936345 4.01901437 19.9956057 1.3086653 18.688501 0.00156057495 15.979384 1.40480493 14.5923614 4.08020534 11.3351951 7.34110883 12.6560575 8.66447639"></polygon><path d="M0.548706366,16.7993018 C-0.182874743,17.530883 -0.182874743,18.7156468 0.548706366,19.4472279 C0.91449692,19.8130185 1.3938809,19.9952772 1.87330595,19.9952772 C2.35273101,19.9952772 2.83211499,19.8130185 3.19790554,19.4472279 L9.34644764,13.2974127 L6.69724846,10.6507187 L0.548706366,16.7993018 Z"></path></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Block button', type: 'checkbox'},
  'project-button': {defaultValue: true, label: 'Project button', type: 'checkbox'},
  'project-category': {defaultValue: true, label: 'Project category', type: 'checkbox'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}


export default ExtendedWireframe
