import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }


  render() {
    const {components: {Text}, style} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <h1 className={style['hero-title']}>
            <Text bind="heroTitle" />
          </h1>
          <h2 className={style.title}>
            <Text bind="title" />
          </h2>
          <h3 className={style['heading-lg']}>
            <Text bind="headingLarge" />
          </h3>
          <h4 className={style.heading}>
            <Text bind="heading" />
          </h4>
          <p className={style.subtitle}>
            <Text bind="title" />
          </p>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  heroTitle: 'Hero title',
  title: 'Title',
  subtitle: 'Subtitle',
  headingLarge: 'Heading large',
  heading: 'Heading',
  text:
    'We are in it for the long haul—for our customers and for our world. Our customers can be found in virtually every corner of the earth, and we realize our success comes directly from helping our customers be successful. We take seriously our responsibility to give back to the communities in which we work and live.',
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Picture about the company',
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
    textValue: 'Contact us',
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
    textValue: 'More about us',
  },
  socialIcons: {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      padding: 20,
      color: '',
      sizes: [10, 20, 30, 40],
      size: '40px',
    },
  },
}

Block.modifierScheme = [
  {
    id: 'text',
    type: 'checkbox',
    label: 'Company main text',
    defaultValue: true,
  },
  {
    id: 'link',
    type: 'checkbox',
    label: 'About us link',
    defaultValue: false,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Contact us button',
    defaultValue: true,
  },
  {
    id: 'socialIcons',
    type: 'checkbox',
    label: 'Social media buttons',
    defaultValue: false,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: false,
  },
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
]

export default Block
