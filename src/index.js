import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      title: {
        ...Component.defaultContent.services[0].title,
        content: 'Transportation Management',
        type: 'heading',
      },
      description: {
        ...Component.defaultContent.services[0].description,
        content:
          'We offer Full Truckload (FTL), Flatbed, Intermodal and Specialty freight shipping opportunities to both international and domestic clients.',
        type: 'text',
      },
      link: {
        ...Component.defaultContent.services[0].link,
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.services[1],
      title: {
        ...Component.defaultContent.services[1].title,
        content: 'Supply Chain Analysis',
        type: 'heading',
      },
      description: {
        ...Component.defaultContent.services[1].description,
        content:
          'Our logistics engineers and analysts evaluate shipping timelines and routes to design and model a custom logistics plan to meet your unique supply chain needs.',
        type: 'text',
      },
      link: {
        ...Component.defaultContent.services[1].link,
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.services[2],
      title: {
        ...Component.defaultContent.services[2].title,
        content: 'Freight Forwarding',
        type: 'heading',
      },
      description: {
        ...Component.defaultContent.services[2].description,
        content:
          'Our highly trained transportation professionals can offer expedited and standard ocean and air freight services for all your international shipping needs.',
        type: 'text',
      },
      link: {
        ...Component.defaultContent.services[2].link,
        textValue: 'Read more',
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.services[3],
      title: {
        ...Component.defaultContent.services[3].title,
        content: 'Freight Audit & Payment',
        type: 'heading',
      },
      description: {
        ...Component.defaultContent.services[3].description,
        content:
          'We are a licensed Forwarder and NVOCC. Our global network and full-service experienced team of ocean forwarding, airfreight, and expedited freight experts are ready to help.',
        type: 'text',
      },
      link: {
        ...Component.defaultContent.services[3].link,
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
  title: {
    ...Component.defaultContent.title,
    content: 'Logistics Solutions',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-secondary': {
    defaultValue: false,
    label: 'Button',
    type: 'hidden',
  },
}

export default ExtendedWireframe
