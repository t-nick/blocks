import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }


  render() {
    const {components: {Text, Button}, style} = this.props

    return (
      <section className={style.section}>
        <h1 className={style.visuallyHidden}>UI Kit</h1>
        <div className={style.section__inner}>
          <section className={style.column}>
            <h1 className={style.visuallyHidden}>Light</h1>
            <p className={classNames(style.heroTitle, style.item)}>
              <Text bind="heroTitle" />
            </p>
            <p className={classNames(style.blockTitle, style.item)}>
              <Text bind="blockTitle" />
            </p>
            <p className={classNames(style.subTitle, style.item)}>
              <Text bind="subTitle" />
            </p>
            <p className={classNames(style.headingLg, style.item)}>
              <Text bind="headingLg" />
            </p>
            <p className={classNames(style.heading, style.item)}>
              <Text bind="heading" />
            </p>
            <p className={classNames(style.subHeading, style.item)}>
              <Text bind="subHeading" />
            </p>
            <p className={classNames(style.text, style.item)}>
              <Text bind="text" />
            </p>
            <p className={classNames(style.text, style.item)}>
              <Text bind="linkText" />
            </p>
            <p className={classNames(style.smallText, style.item)}>
              <Text bind="smallText" />
            </p>
            <p className={classNames(style.quote, style.item)}>
              <Text bind="quote" />
            </p>
            <p className={classNames(style.caption, style.item)}>
              <Text bind="caption" />
            </p>
            <Button className={style.item} bind="primary" />
            <br/>
            <Button className={style.item} bind="primaryAlt" />
            <br/>
            <Button className={style.item} bind="secondary" />
            <br/>
            <Button className={style.item} bind="secondaryAlt" />
            <br/>
            <Button className={style.item} bind="link" />
            <br/>
            <Button className={style.item} bind="primarySm" />
            <br/>
            <Button className={style.item} bind="primaryMd" />
            <br/>
            <Button className={style.item} bind="primaryLg" />
          </section>
          <section className={classNames(style.column, style.dark, 'ui-kit-dark')}>
            <h1 className={style.visuallyHidden}>Dark</h1>
            <p className={classNames(style.heroTitle, style.item)}>
              <Text bind="heroTitle" />
            </p>
            <p className={classNames(style.blockTitle, style.item)}>
              <Text bind="blockTitle" />
            </p>
            <p className={classNames(style.subTitle, style.item)}>
              <Text bind="subTitle" />
            </p>
            <p className={classNames(style.headingLg, style.item)}>
              <Text bind="headingLg" />
            </p>
            <p className={classNames(style.heading, style.item)}>
              <Text bind="heading" />
            </p>
            <p className={classNames(style.subHeading, style.item)}>
              <Text bind="subHeading" />
            </p>
            <p className={classNames(style.text, style.item)}>
              <Text bind="text" />
            </p>
            <p className={classNames(style.text, style.item)}>
              <Text bind="linkText" />
            </p>
            <p className={classNames(style.smallText, style.item)}>
              <Text bind="smallText" />
            </p>
            <p className={classNames(style.quote, style.item)}>
              <Text bind="quote" />
            </p>
            <p className={classNames(style.caption, style.item)}>
              <Text bind="caption" />
            </p>
            <Button className={style.item} bind="primary" />
            <br/>
            <Button className={style.item} bind="primaryAlt" />
            <br/>
            <Button className={style.item} bind="secondary" />
            <br/>
            <Button className={style.item} bind="secondaryAlt" />
            <br/>
            <Button className={style.item} bind="link" />
            <br/>
            <Button className={style.item} bind="primarySm" />
            <br/>
            <Button className={style.item} bind="primaryMd" />
            <br/>
            <Button className={style.item} bind="primaryLg" />
          </section>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button',])($editor.components)

Block.defaultContent = {
  heroTitle: 'HEROTITLE',
  blockTitle: 'BLOCKTITLE',
  subTitle: 'SUBTITLE',
  headingLg: 'HEADING LARGE',
  heading: 'HEADING',
  subHeading: 'SUB HEADING',
  text: 'TEXT',
  linkText: 'Lorem ipsum <a href="https://google.com">dolor sit amet,</a> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  smallText: 'SMALL TEXT',
  quote: 'QUOTE',
  caption: 'CAPTION',
  primary: {
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
    textValue: 'Primary',
    type: 'primary',
  },
  primaryAlt: {
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
    textValue: 'Primary Alternative',
    type: 'primary-alt',
  },
  secondary: {
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
    textValue: 'Secondary',
    type: 'secondary',
  },
  secondaryAlt: {
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
    textValue: 'Secondary Alternative',
    type: 'secondary-alt',
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
    textValue: 'Button link',
    type: 'link'
  },
  primarySm: {
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
    textValue: 'Primary',
    type: 'primary',
    size: 'sm',
  },
  primaryMd: {
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
    textValue: 'Primary',
    type: 'primary',
    size: 'md',
  },
  primaryLg: {
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
    textValue: 'Primary',
    type: 'primary',
    size: 'lg',
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
