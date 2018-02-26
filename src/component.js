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
          <div className={css.counter}>
            <Counter bind="counter">
              {date => ['days', 'hours', 'minutes', 'seconds'].map((type, index) => (
                <div key={type} className={css.counter__item}>
                  <Text tagName="strong" className={css.counter__number} value={{content: `${date[type]}`, type: 'blockTitle'}} />
                  <Text tagName="p" className={css.counter__text} bind={`items[${index}].text`} />
                </div>))}
            </Counter>
          </div>
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
  title: {
    type: 'blockTitle',
    content: 'SPECIAL OFFER',
  },
  heading: {
    type: 'largeHeading',
    content: 'Get Pro Plan at the Price of Standard',
  },
  subtitle: {
    type: 'subtitle',
    content: 'Deal expires December, 13',
  },
  counter: {
    futureDate: new Date(2018, 1, 28),
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
    type: 'primary',
    size: 'lg',
    textValue: 'Request a quote',
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
