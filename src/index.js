import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Our Customers',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Nowadays, a huge number of companies, including even the top leaders of the main industry sectors, use a diverse range of services from Acrozz to extend the overall flow of funds, goods, and trade information from innovative materials planning, from the moment of order and every step of the process up to final payment. Buyers, sellers, financial institutions, logistics providers, agents, and customs brokers cooperate and automate hundreds of global supply chain processes using Acrozz as their exceptional, extended technology platform. Below are the companies that work with Acrozz today.',
    type: 'subtitle',
  },
  partners: [
    {
      ...Component.defaultContent.partners[0],
      logo: {
        image: {
          resourceRef: 'logo-1.jpg',
          width: 130,
          height: 137,
        },
      },
    },
    {
      ...Component.defaultContent.partners[1],
      logo: {
        image: {
          resourceRef: 'logo-2.jpg',
          width: 130,
          height: 137,
        },
      },
    },
    {
      ...Component.defaultContent.partners[2],
      logo: {
        image: {
          resourceRef: 'logo-3.jpg',
          width: 130,
          height: 137,
        },
      },
    },
    {
      ...Component.defaultContent.partners[3],
      logo: {
        image: {
          resourceRef: 'logo-4.jpg',
          width: 130,
          height: 137,
        },
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-5.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-6.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-7.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-8.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-9.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-10.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-11.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-12.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-13.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-14.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-15.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-16.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-17.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: 'logo-18.jpg',
          width: 130,
          height: 137,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: false, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: false, label: 'Partner link', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
