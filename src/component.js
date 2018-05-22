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

  collectionItem = ({index, modifier}) => {
    const {components: {Text, Button}, style} = this.props
    return (
      <article className={style.item}>
        <div className={style.item__inner}>
          <Text tagName="h2" className={style.item__title} bind={`collection[${index}].item_heading`} />
          {_.get('subtitle')(modifier) && <Text tagName="p" className={style.subtitle} bind={`collection[${index}].item_subheading`} />}
          {(_.get('item_button')(modifier) || _.get('item_button_additional')(modifier)) && (
            <div className={style['btns-group']}>
              {_.get('item_button')(modifier) && (
                <Button
                  buttonClassName={style.button}
                  linkClassName={style.link}
                  bind={`collection[${index}].item_button`}
                />
              )}
              {_.get('item_button_additional')(modifier) && (
                <Button
                  buttonClassName={style.button}
                  linkClassName={style.link}
                  bind={`collection[${index}].item_button_additional`}
                />
              )}
            </div>
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider, Icon}, style, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Slider
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            settings={{
              dots: this.getModifierValue('dots'),
              dotsClass: classNames('slick-dots', style['slider-dots']),
              arrows: this.getModifierValue('arrows'),
              responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    arrows: false,
                  },
                },
              ],
              ...customArrows,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Slider', 'Text', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  collection: {
    items: [
      {
        item_heading: {
          content: 'Quantum Company',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'We implement Innovative Projects',
          type: 'subtitle',
        },
        item_button: {
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
        item_button_additional: {
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
          textValue: 'Learn more',
          type: 'secondary',
        },
      },
      {
        item_heading: {
          content: 'Quantum Company',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'We implement Innovative Projects',
          type: 'subtitle',
        },
        item_button: {
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
        item_button_additional: {
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
          textValue: 'Learn more',
          type: 'secondary',
        },
      },
      {
        item_heading: {
          content: 'Quantum Company',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'We implement Innovative Projects',
          type: 'subtitle',
        },
        item_button: {
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
        item_button_additional: {
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
          textValue: 'Learn more',
          type: 'secondary',
        },
      },
    ],
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  arrows: {defaultValue: true, label: 'Navigation arrows', type: 'checkbox'},
  item_button: {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  item_button_additional: {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'checkbox'},
}

export default Block
