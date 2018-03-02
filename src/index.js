import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg-text.png',
  },
  title: {
    content: 'Tandem skydiving',
    type: 'headingLg',
  },
  heading: {
    content: 'Restrictions',
    type: 'heading',
  },
  subheading: {
    content: 'The official top weight limit is 15 stone / 95 kilos fully dressed. If you are between 15 and 18 stone, please call the office. The jumps are allowed to people from 16 years old with no upper limit. If the visitor is between 16 and 18 he must get a parent or guardians written compliance.',
    type: 'text',
  },
  text: {
    content: 'Tandem skydiving is the ideal flight method for the beginners without previous skydiving experience. You don\'t have to worry because you will be strapped to our expert tandem coach. <br> The experienced professional will instruct you about safety and teach you all the necessary things to get you ready to start skydiving. On your pre-boarding call, you will be met by the instructor who will equip you for your jump, fitting your headgear, jumpsuit, goggles (fit for contact lenses/glasses), harness, and gloves. <br> You will encounter speeds of about 120mph during the Freefall. While falling nearly 2 miles you will feel the air on your face. This is an unforgettable moment. Enjoy high adrenaline and the best experience of a lifetime! <br> Once the canopy opened you will experience the unexpected calmness because your speed drastically reduces. This gives you a possibility to speak with your instructor, immerse in surrounding scenery as you parachute ride nearly 5 minutes, and make a safe landing. Help your instructor direct the parachute around the sky before sailing back to the airdrome.',
    type: 'subheading',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
