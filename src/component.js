import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Text, Counter, Button}, style: css} = this.props

    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <Text tagName="h1" className={css.title} bind="title" />
          <Counter bind="counter">
            {date => ['days', 'hours', 'seconds', 'minutes'].map((type, index) => (
              <div className={css.counter__item}>
                <Text tagName="strong" value={{content: date[type], type: 'blockTitle'}} />
                {/* <strong className={css.counter__number}>{date[type]}</strong> */}
                <Text tagName="p" className={css.counter__text} bind={`items[${index}].text`} />
              </div>))}
          </Counter>
          <div className="content">
            <div className="content__inner">
              <Text tagName="h2" className="content__title" bind="heading" />
              <Text tagName="p" className="content__text" bind="subtitle" />
              <Button
                buttonClassName="button"
                linkClassName="link"
                bind="cta"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Counter', 'Button'])($editor.components)


Block.defaultContent = {
  title: 'About The Company',
  'text-1': 'Follow us:',
  subtitle:
    'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.',
  text:
    'We are in it for the long haul—for our customers and for our world. Our customers can be found in virtually every corner of the earth, and we realize our success comes directly from helping our customers be successful. We take seriously our responsibility to give back to the communities in which we work and live.',
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Picture about the company',
  },
  counter: {
    futureDate: new Date(2018, 1, 28),
    type: 'blockTitle',
  },
  items: [
    {
      text: {
        type: 'text',
        content: 'days',
      },
    },
    {
      text: {
        type: 'text',
        content: 'hours',
      },
    },
    {
      text: {
        type: 'text',
        content: 'minutes',
      },
    },
    {
      text: {
        type: 'text',
        content: 'seconds',
      },
    },
  ],
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

Block.modifierScheme = {
  button: {defaultValue: true, label: 'Contact us button', type: 'checkbox'},
  link: {defaultValue: false, label: 'About us link', type: 'checkbox'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}


export default Block
