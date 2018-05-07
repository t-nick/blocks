import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    touchStart: 0,
    touchEnd: 0,
    currentValue: 0,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  handleTouchStart = (event) => {
    this.setState({
      touchStart: event.screenX,
    })
  }

  handleTouchEnd = (event) => {
    this.setState({
      touchEnd: event.screenX,
    })
  }

  nextSlide = () => {
    const nextValue = (this.state.currentValue === 300) ? 0 : this.state.currentValue + 100
    this.setState({
      currentValue: nextValue,
    })
  }

  prevSlide = () => {
    const nextValue = (this.state.currentValue === 0) ? 300 : this.state.currentValue - 100
    this.setState({
      currentValue: nextValue,
    })
  }

  handleTouchMove = () => {
    if (this.state.touchEnd > this.state.touchStart) {
      this.nexSlide()
    } else if (this.state.touchEnd < this.state.touchStart) {
      this.prevSlide()
    }
  }

  render() {
    const {components: {Text, SocialIcons, Image, Button}, style} = this.props
    const showButtons = this.getModifierValue('primary-button') || this.getModifierValue('secondary-button')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__content}>
            <Text bind="title" className={style.title} tagName="h2" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
            {this.getModifierValue('socialIcons') && (
              <div className={style['socials-wrapper']}>
                <SocialIcons bind="socialIcons" className={style.socials} />
              </div>
            )}
            {showButtons && (
              <div className={style['btns-group']}>
                {this.getModifierValue('primary-button') && (
                  <Button
                    linkClassName={style.link}
                    buttonClassName={style.button}
                    className={style.item__button}
                    bind="primary-button"
                  />
                )}
                {this.getModifierValue('secondary-button') && (
                  <Button
                    linkClassName={style.link}
                    buttonClassName={style.button}
                    className={style.item__button}
                    bind="secondary-button"
                  />
                )}
              </div>
            )}
          </div>
          <div className={style['images-wrapper']}>
            {_.map(n => (
              <Image
                wrapperClassName={style['picture-wrapper']}
                pictureClassName={style.picture}
                imageClassName={style.image}
                bind={`pictures[${n}]`}
                size={{
                  'min-width: 320px': 480,
                  'min-width: 480px': 768,
                  'min-width: 768px': 570,
                }}
                resize={{
                  disable: true,
                }}
                key={n}
              />
            ), 4)}
          </div>
          <div
            className={style['images-wrapper--mobile']}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
            style={{transform: `translateX(${this.state.currentValue}%)`}}
          >
            {_.map(n => (
              <Image
                wrapperClassName={style['picture-wrapper--mobile']}
                pictureClassName={style.picture}
                imageClassName={style.image}
                bind={`pictures[${n}]`}
                size={{
                  'min-width: 320px': 480,
                  'min-width: 480px': 768,
                }}
                resize={{
                  disable: true,
                }}
                key={n}
              />
            ), 4)}
            <button
              className={classNames(style['slider-controls'], style['slider-controls--prev'])}
              onClick={this.prevSlide}
            >
              <svg viewBox="0 0 451.85 451.85">
                <path d="M97.14 225.92c0-8.1 3.1-16.2 9.26-22.37L300.69 9.27a31.64 31.64 0 1 1 44.75 44.75l-171.91 171.9 171.9 171.9a31.64 31.64 0 0 1-44.75 44.75L106.4 248.3a31.57 31.57 0 0 1-9.25-22.37z" />
              </svg>
            </button>
            <button
              className={classNames(style['slider-controls'], style['slider-controls--next'])}
              onClick={this.nextSlide}
            >
              <svg viewBox="0 0 451.85 451.85" fill="currentColor">
                <path d="M345.44 248.3L151.15 442.56a31.64 31.64 0 0 1-44.75-44.74l171.92-171.91L106.4 54.02a31.65 31.65 0 0 1 44.75-44.75l194.29 194.28a31.53 31.53 0 0 1 9.26 22.37c0 8.1-3.1 16.2-9.27 22.37z" />
              </svg>
            </button>
          </div>
        </div>
      </section >
    )
  }
}

Wireframe.components = _.pick(['Text', 'SocialIcons', 'Image', 'Button'])($editor.components)

Wireframe.defaultContent = {
  pictures: [
    {
      src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
      alt: 'Picture about the company',
    },
    {
      src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
      alt: 'Picture about the company',
    },
    {
      src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
      alt: 'Picture about the company',
    },
    {
      src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
      alt: 'Picture about the company',
    },
  ],
  title: {
    content: 'About Us',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We provide a whole bulk of services to ensure stable growth of the company. The profound expertise of our team, deep understanding of all business aspects, ideal knowledge of processes will help to deal with various issues.<br><br>We create unique and innovative solutions for our customers along with the high-quality support services and personal approach to any case. Feel free to entrust your business to our experts, and you’ll see the difference!',
    type: 'subtitle',
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
  'primary-button': {
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
  'secondary-button': {
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
    type: 'secondary',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  socialIcons: {defaultValue: true, label: 'Social icons', type: 'checkbox'},
  'primary-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Wireframe
