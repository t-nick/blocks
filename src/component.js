import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button}, style} = this.props

    return (
      <article className={classNames(style.article, className)}>
        {children}

        <Text className={style.article__date} tagName="time" bind={`events[${index}].date`} />
        <div className={style.article__content}>
          <Text className={style.article__title} tagName="h2" bind={`events[${index}].title`} />
          {_.get('icon')(modifier) && (
            <Button
              className={style.article__button}
              iconClassName={style['article__button-icon']}
              buttonClassName={style.button}
              linkClassName={style.link}
              bind={`events[${index}].button`}
            />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Image}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            <Text tagName="h1" className={style.title} bind="title" />
            {this.getModifierValue('subtitle') && (
              <Text tagName="p" className={style.subtitle} bind="subtitle" />
            )}
          </header>
          <div className={style.section__content}>
            <article className={style['main-article']}>
              <div className={style['main-article__content']}>
                <Text className={style['main-article__title']} tagName="h2" bind="main-article-title" />
                <Text className={style['main-article__date']} tagName="time" bind="main-article-date" />
                <Button
                  className={style['main-article__button']}
                  iconClassName={style['main-article__button-icon']}
                  linkClassName={style.link}
                  buttonClassName={style.button}
                  bind="main-article-button"
                />
                <Image
                  pictureClassName={style['main-article__picture']}
                  imgClassName={style['main-article__image']}
                  bind="main-article-image"
                  size={
                    {
                      'min-width: 992px': 300,
                      'min-width: 768px': 350,
                      'min-width: 480px': 780,
                      'min-width: 320px': 480,
                    }
                  }
                />
              </div>
            </article>
            <Collection
              className={style['articles-wrapper']}
              bind="events"
              Item={this.collectionItem}
              itemProps={{
                modifier: $block.modifier,
              }}
            />
          </div>
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                buttonClassName={style.button}
                linkClassName={style.link}
                bind="button"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  events: [
    {
      title: {
        content: 'UX workshop',
        type: 'heading',
      },
      date: {
        content: 'November 1',
        type: 'caption',
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
        textValue: '',
        type: 'link',
        iconEnabled: true,
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/></svg>',
        },
      },
    },
    {
      title: {
        content: 'Q&A with CEO',
        type: 'heading',
      },
      date: {
        content: 'November 3',
        type: 'caption',
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
        textValue: '',
        type: 'link',
        iconEnabled: true,
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/></svg>',
        },
      },
    },
    {
      title: {
        content: 'SEO workshop',
        type: 'heading',
      },
      date: {
        content: 'November 5',
        type: 'caption',
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
        textValue: '',
        type: 'link',
        iconEnabled: true,
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/></svg>',
        },
      },
    },
    {
      title: {
        content: 'Product release ',
        type: 'heading',
      },
      date: {
        content: 'November 15',
        type: 'caption',
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
        textValue: '',
        type: 'link',
        iconEnabled: true,
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/></svg>',
        },
      },
    },
  ],
  title: {
    content: 'Events',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Do you want to know more about our products or boost your knowledge of business planning? Feel free to join our events! Order tickets in advance not to miss the seminars and workshops that you want to visit.',
    type: 'subtitle',
  },
  'main-article-title': {
    content: 'Marketing conference',
    type: 'headingLg',
  },
  'main-article-date': {
    content: 'October 21',
    type: 'text',
  },
  'main-article-image': {
    alt: 'Marketing conference illustration',
  },
  'main-article-button': {
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
    type: 'link',
    iconEnabled: true,
    iconAlignment: 'right',
    icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M5.5.5l-.881.881 3.487 3.494H.5v1.25h7.606L4.62 9.619l.881.881 5-5z"/></svg>',
    },
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
    textValue: 'Learn more',
    type: 'secondary',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: "Event's description", type: 'checkbox'},
  icon: {defaultValue: true, label: 'Navigation icon', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default Block
