import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Bunkhouse',
        type: 'heading',
      },
      description: {
        content: 'The bunkhouse is conveniently located right on the dropzone, so you don\'t have to miss anything! <br />The bunkhouse is similar to a hostel. Linens (sheets, blankets, and a pillow) are available or you can bring your own bedclothes. <br /> There are refrigerators, dry food storage, a microwave, and a common room in the bunkhouse.There is a $50.00 cash deposit for key and the bed linen is issued on arrival.',
        type: 'text',
      },
      picture: {
        src: 'image-1.png',
        alt: 'Service illustration photo',
      },
    },
    {
      title: {
        content: 'Camping & RV Hookups',
        type: 'heading',
      },
      description: {
        content: 'You can use tent camping that is free all the year round. It is situated on the grass and has an easy access from the parking area. <br />We offer short-term RV parking (30 days or less). There are 10 full hookup and 9 electric only slots. Reservations in advance are highly recommended. <br />We also offer long-term RV parking on the dropzone. There are 24 full hookups and 14 electric only hookups.',
        type: 'text',
      },
      picture: {
        src: 'image-2.png',
        alt: 'Service illustration photo',
      },
    },
    {
      title: {
        content: 'Team Rooms',
        type: 'heading',
      },
      description: {
        content: 'The team rooms are placed on the west side of the dropzone, following the bunkhouse and Square 2. They accommodate bunk beds and a small fridge. Team rooms may be used as overnight lodging, for gear storage, and for debriefing. <br />Team rooms may accommodate 4 to 10 people. A $50.00 cash deposit for the key and the bed linen is issued on arrival.',
        type: 'text',
      },
      picture: {
        src: 'image-3.png',
        alt: 'Service illustration photo',
      },
    },
  ],
  title: {
    content: 'Accommodation',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'SkydiveBirds offers a few options for the traveling jumper. We highly recommend you to reserve in advance:',
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Services description', type: 'checkbox'},
}

export default ExtendedWireframe
