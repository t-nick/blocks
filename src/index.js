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
        content: 'Transportation Management',
        type: 'heading',
      },
      description: {
        content: 'We offer Full Truckload (FTL), Flatbed, Intermodal and Specialty freight shipping opportunities to both international and domestic clients.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Supply Chain Analysis',
        type: 'heading',
      },
      description: {
        content: 'Our logistics engineers and analysts evaluate shipping timelines and routes to design and model a custom logistics plan to meet your unique supply chain needs.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Freight Forwarding',
        type: 'heading',
      },
      description: {
        content: 'Our highly trained transportation professionals can offer expedited and standard ocean and air freight services for all your international shipping needs.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Freight Audit & Payment',
        type: 'heading',
      },
      description: {
        content: 'We are a licensed Forwarder and NVOCC. Our global network and full-service experienced team of ocean forwarding, airfreight, and expedited freight experts are ready to help.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Flatbed Transportation',
        type: 'heading',
      },
      description: {
        content: 'We offer complete flatbed transportation opyions for both international and domestic clients with our huge fleet of company-owned flatbed trailers.',
        type: 'text',
      },
      // picture: {
      //   src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
      //   alt: 'Service illustration photo',
      // },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Warehousing',
        type: 'heading',
      },
      description: {
        content: 'Our chain of more then 700 warehousing locations in the US alone provides more then 23 million square feet of commercial storage space domestically.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Customs Brokerage',
        type: 'heading',
      },
      description: {
        content: 'As a governmentally licensed customs broker, Acrozz Logistics services all ports of entry across the United States and provides clients with custom `clearing` solutions.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Final Mile',
        type: 'heading',
      },
      description: {
        content: 'Final Mile service specializes in home delivery of non-transferable products with services ranging from drop-off to white glove deliveries.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Third-Party Logistics',
        type: 'heading',
      },
      description: {
        content: 'We provide third-party logistics (3PL) services to companies looking to source cost-effective procurement and distribution services.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        textValue: 'Read more',
        type: 'link',
      },
    },
  ],
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Logistics Solutions',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We deliver all kind of services that support small and micro businesses. Here are some of them:',
    type: 'subtitle',
  },
  'button-1': {
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
    textValue: 'Request a quote',
    type: 'primary',
  },
  'button-2': {
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
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: true, label: 'Link', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
