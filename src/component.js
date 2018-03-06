import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text, Button, ContactForm, Icon, Background}, style} = this.props

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
            <br />
            <Button className={style.item} bind="primaryAlt" />
            <br />
            <Button className={style.item} bind="secondary" />
            <br />
            <Button className={style.item} bind="secondaryAlt" />
            <br />
            <Button className={style.item} bind="link" />
            <br />
            <Button className={style.item} bind="primarySm" />
            <br />
            <Button className={style.item} bind="primaryMd" />
            <br />
            <Button className={style.item} bind="primaryLg" />
            <ContactForm
              bind="contactForm"
              className={style.form}
              labelClassName={style.form__item}
              fieldClassName={style.form__field}
              button={{
                type: 'primary',
                className: style.form__button,
              }}
            />
            <Icon bind="icon" className={style.icon} />
            <Text tagName="p" className={style.item} bind="textCutomColor" />
            <Text tagName="p" className={style.item} bind="textBrightness" />
            <Text tagName="p" className={style.item} bind="textBrightnessD" />
          </section>
          <Background className={style.column} bind="darkBg" tagName="section">
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
            <br />
            <Button className={style.item} bind="primaryAlt" />
            <br />
            <Button className={style.item} bind="secondary" />
            <br />
            <Button className={style.item} bind="secondaryAlt" />
            <br />
            <Button className={style.item} bind="link" />
            <br />
            <Button className={style.item} bind="primarySm" />
            <br />
            <Button className={style.item} bind="primaryMd" />
            <br />
            <Button className={style.item} bind="primaryLg" />
            <ContactForm
              bind="contactForm"
              className={style.form}
              labelClassName={style.form__item}
              fieldClassName={style.form__field}
              button={{
                type: 'secondary',
                className: style.form__button,
              }}
            />
            <Icon bind="icon" className={style.icon} />
            <Text tagName="p" className={style.item} bind="textCutomColor" />
            <Text tagName="p" className={style.item} bind="textBrightness" />
            <Text tagName="p" className={style.item} bind="textBrightnessD" />
          </Background>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'ContactForm', 'Icon', 'Background'])($editor.components)

Block.defaultContent = {
  theme: 'dark',
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
    type: 'link',
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
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: 'Name',
        placeholder: '',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: 'Phone number ',
        placeholder: '',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: 'Email',
        placeholder: '',
        required: true,
      },
    ],
    submitButton: {
      title: 'Request a quote',
      type: 'primary',
    },
    className: 'form',
  },
  icon: {
    svg: '<svg viewBox="0 0 25 16" id="icon-logo-ico" width="100%" height="100%"><path d="M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.256.274A1.162 1.162 0 0 0 11.75.28l-4.88 4.255-5.06-3.475a1.162 1.162 0 0 0-1.34.014c-.396.29-.563.801-.417 1.271l4.026 12.828a1.161 1.161 0 0 0 1.777.594L21.231 4.771l-2.103 8.179-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.701.262 1.056.131.354-.13.617-.428.715-.787L24.25 2.284c.118-.463-.07-.96-.465-1.23a1.18 1.18 0 0 0-1.305 0z"></path></svg>',
    fill: 'brand-color?spin=200',
  },
  textCutomColor: {
    content: 'TEXT WITH CUSTOM COLOR',
    type: 'headingLg',
    color: 'brand-color?spin=100',
  },
  textBrightness: {
    content: 'TEXT WITH Brightness 10',
    type: 'headingLg',
    brightness: 10,
  },
  textBrightnessD: {
    content: 'TEXT WITH Brightness -10',
    type: 'headingLg',
    brightness: -10,
  },
  darkBg: {
    type: 'color',
    color: 'dark-shade-color',
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
