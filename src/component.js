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

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image, Resizer}, style} = this.props
    const hiddenBodyClass = !this.getModifierValue('item-body') && style['item--hidden-body']
    const hiddenItemText = !this.getModifierValue('item-heading') && !this.getModifierValue('item-body')

    return (
      <Resizer
        styleProp="minHeight"
        bindToModifier={`resizer.items${index}`}
        min={this.getOptionValue('min-resize')}
        max={this.getOptionValue('max-resize')}
        disable={this.getOptionValue('disable-resizer')}
      >
        <article className={classNames(style.item, hiddenBodyClass, className)}>
          {children}
          <div className={style.item__inner}>
            <Image
              pictureClassName={style.item__picture}
              imgClassName={style.item__image}
              bind={`items[${index}].image`}
              resize={{disable: true}}
            />
            {!hiddenItemText && (
              <div className={style.item__text}>
                {this.getModifierValue('item-heading') && (
                  <Text tagName="h2" className={style.item__heading} bind={`items[${index}].heading`} />
                )}
                {this.getModifierValue('item-body') && (
                  <Text tagName="p" className={style.item__description} bind={`items[${index}].text`} />
                )}
              </div>
            )}
          </div>
        </article>
      </Resizer>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props
    const showButtonGroups = this.getModifierValue('main-button') || this.getModifierValue('additional-button')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text tagName="h1" className={style.title} bind="title" />
          {this.getModifierValue('subtitle') && (
            <Text tagName="p" className={style.subtitle} bind="subtitle" />
          )}
          <Collection
            className={style['items-wrapper']}
            bind="items"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {showButtonGroups &&
            <div className={style['btns-group']}>
              {this.getModifierValue('main-button') && (
                <Button
                  buttonClassName={style['btns-group__button']}
                  linkClassName={style['btns-group__link']}
                  bind="mainButton"
                />
              )}
              {this.getModifierValue('additional-button') && (
                <Button
                  buttonClassName={style['btns-group__button']}
                  linkClassName={style['btns-group__link']}
                  bind="additionalButton"
                />
              )}
            </div>
          }
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'Collection', 'Resizer'])($editor.components)

Block.defaultContent = {
  title: {
    type: 'blockTitle',
    content: 'Why Choose Us',
  },
  subtitle: {
    type: 'subtitle',
    content: 'Still have some hesitations whether cooperation with us is worth the trouble? Check the reasons why you should choose us among other companies!',
  },
  items: [
    {
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      heading: {
        type: 'heading',
        content: 'Open-minded',
      },
      text: {
        type: 'text',
        content: 'We always look for new ideas, explore various spheres, and apply a positive approach',
      },
    },
    {
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      heading: {
        type: 'heading',
        content: 'Long-term cooperation',
      },
      text: {
        type: 'text',
        content: 'We believe that effective cooperation should last for ages',
      },
    },
    {
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      heading: {
        type: 'heading',
        content: 'Turnkey solutions',
      },
      text: {
        type: 'text',
        content: 'Every good or service we provide is empowered with the top-notch features to deliver the best result to our customers',
      },
    },
  ],
  mainButton: {
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
    textValue: 'Learn more',
  },
  additionalButton: {
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
    type: 'secondary',
    textValue: 'Learn more',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Why us description', type: 'checkbox'},
  'item-heading': {defaultValue: true, label: 'Advantage title', type: 'checkbox'},
  'item-body': {defaultValue: true, label: 'Advantage description', type: 'checkbox'},
  'main-button': {defaultValue: false, label: 'Primary button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default Block
