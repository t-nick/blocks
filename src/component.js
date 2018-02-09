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
            <Text tagName="p" className={style.item} bind="heroTitle" />
            <Text tagName="p" className={style.item} bind="blockTitle" />
            <Text tagName="p" className={style.item} bind="subTitle" />
            <Text tagName="p" className={style.item} bind="headingLg" />
            <Text tagName="p" className={style.item} bind="heading" />
            <Text tagName="p" className={style.item} bind="subHeading" />
            <Text tagName="p" className={style.item} bind="text" />
            <Text tagName="p" className={style.item} bind="linkText" />
            <Text tagName="p" className={style.item} bind="smallText" />
            <Text tagName="p" className={style.item} bind="quote" />
            <Text tagName="p" className={style.item} bind="caption" />
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
            <Text tagName="p" className={style.item} bind="heroTitle" />
            <Text tagName="p" className={style.item} bind="blockTitle" />
            <Text tagName="p" className={style.item} bind="subTitle" />
            <Text tagName="p" className={style.item} bind="headingLg" />
            <Text tagName="p" className={style.item} bind="heading" />
            <Text tagName="p" className={style.item} bind="subHeading" />
            <Text tagName="p" className={style.item} bind="text" />
            <Text tagName="p" className={style.item} bind="linkText" />
            <Text tagName="p" className={style.item} bind="smallText" />
            <Text tagName="p" className={style.item} bind="quote" />
            <Text tagName="p" className={style.item} bind="caption" />
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
  heroTitle: {
    content: 'HEROTITLE',
    type: 'heroTitle',
  },
  blockTitle: {
    content: 'BLOCKTITLE',
    type: 'blockTitle',
  },
  subTitle: {
    content: 'SUBTITLE',
    type: 'subtitle',
  },
  headingLg: {
    content: 'HEADING LARGE',
    type: 'headingLg',
  },
  heading: {
    content: 'HEADING',
    type: 'heading',
  },
  subHeading: {
    content: 'SUB HEADING',
    type: 'subheading',
  },
  text: {
    content: 'TEXT',
    type: 'text',
  },
  linkText: {
    content: 'Lorem ipsum <a href="https://google.com">dolor sit amet,</a> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    type: 'text',
  },
  smallText: {
    content: 'SMALL TEXT',
    type: 'small',
  },
  quote: {
    content: 'QUOTE',
    type: 'quote',
  },
  caption: {
    content: 'CAPTION',
    type: 'caption',
  },
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
