import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Logo, Text, Map, SocialIcons}, style} = this.props
    const arrangeElements = this.getModifierValue('swap')
    console.log(arrangeElements)

    return (
      <section className={style.section}>
        <div className={classNames(style.section__inner, arrangeElements && style['section__inner--reverse'])}>
          <div className={style.section__main}>
            <Text bind="title" className={style.title} tagName="h2" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
            {this.getModifierValue('logo') && (
              <div className={style['logo-wrapper']}>
                <Logo
                  bind="logo"
                  className={style.logo}
                  textClassName={style.logo__title}
                  maxWidth={this.getOptionValue('logo-max-width')}
                  maxHeight={this.getOptionValue('logo-max-height')}
                />
              </div>
            )}
            <ul className={style['contacts-list']}>
              {this.getModifierValue('address') && (
                <li className={style['contacts-list__item']}>
                  {!this.getOptionValue('hidden-address-title') && (
                    <Text bind="address-title" className={style.contacts__title} tagName="h3" />
                  )}
                  <Text bind="address-content" className={classNames(style.contacts__desc, style['contacts__desc--adress'])} tagName="p" />
                </li>
              )}
              {this.getModifierValue('phone') && (
                <li className={style['contacts-list__item']}>
                  {!this.getOptionValue('hidden-phone-title') && (
                    <Text bind="phone-title" className={style.contacts__title} tagName="h3" />
                  )}
                  <Text bind="phone-link" className={classNames(style.contacts__desc, style['contacts__desc--phone'])} tagName="p" />
                </li>
              )}
              {this.getModifierValue('email') && (
                <li className={style['contacts-list__item']}>
                  {!this.getOptionValue('hidden-email-title') && (
                    <Text bind="email-title" className={style.contacts__title} tagName="h3" />
                  )}
                  <Text bind="email-link" className={classNames(style.contacts__desc, style['contacts__desc--email'])} tagName="p" />
                </li>
              )}
            </ul>
            {this.getModifierValue('social') && (
              <SocialIcons className={style.socials} bind="socialIcons" />
            )}
          </div>
          <div className={style['map-wrapper']}>
            <div className={style.map}>
              <Map className={style.map__preview} bind="map" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Logo', 'Text', 'Map', 'SocialIcons'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Contacts',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Feel free to contact us for any business, media, or personal inquiries:',
    type: 'subtitle',
  },
  logo: {
    text: {
      value: 'Company Logo',
      tagName: 'h2',
      fontSize: 24,
    },
  },
  'address-title': {
    content: 'Address',
    type: 'heading',
  },
  'phone-title': {
    content: 'Phone',
    type: 'heading',
  },
  'email-title': {
    content: 'E-mail',
    type: 'heading',
  },
  'address-content': {
    content: 'Head office in London - 36 Regent St.',
    type: 'text',
  },
  'phone-link': {
    content: '<a href="tel:+1 (234) 567 89 00">+1 (234) 567 89 00</a>',
    type: 'text',
  },
  'email-link': {
    content: '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
    type: 'text',
  },
  map: {
    preset: 'silver',
    height: '100%',
    center: {
      lat: 51.509572,
      lng: -0.134223,
    },
    zoom: 18,
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
      offset: 15,
      color: '#9b9b9b',
      sizes: [20, 30, 40],
      size: 30,
    },
  },
}

Wireframe.modifierScheme = {
  swap: {
    type: 'swap',
    title: 'Arrange elements',
    defaultValue: 'false',
  },
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  logo: {defaultValue: true, label: 'Logo', type: 'checkbox'},
  address: {defaultValue: true, label: 'Address text block', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail text block', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone text block', type: 'checkbox'},
  social: {defaultValue: true, label: 'Social Media Buttons', type: 'checkbox'},
}

export default Wireframe
