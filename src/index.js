import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-events/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-events/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  events: [
    {
      title: {
        content: 'Making A New Trend In Poster',
        type: 'heading',
      },
      date: {
        content: '27 Aug 2018',
        type: 'text',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '6:30 pm - 7:30 pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events_01.jpg',
        alt: 'Digital marketing workshop illustration',
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Making A New Trend In Poster',
        type: 'heading',
      },
      date: {
        content: '27 Aug 2018',
        type: 'text',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '6:30 pm - 7:30 pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events_02.jpg',
        alt: 'Digital marketing workshop illustration',
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Making A New Trend In Poster',
        type: 'heading',
      },
      date: {
        content: '27 Aug 2018',
        type: 'text',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '6:30 pm - 7:30 pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events_03.jpg',
        alt: 'Digital marketing workshop illustration',
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Making A New Trend In Poster',
        type: 'heading',
      },
      date: {
        content: '27 Aug 2018',
        type: 'text',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '6:30 pm - 7:30 pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events_04.jpg',
        alt: 'Digital marketing workshop illustration',
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
  ],
  title: {
    content: '- Events -',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.',
    type: 'subtitle',
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
    textValue: '— All Questions —',
    type: 'primary',
  },
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: "Event's description", type: 'checkbox'},
}

export default ExtendedWireframe
