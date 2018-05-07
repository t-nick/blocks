import $editor from 'weblium/editor'
import Media from 'react-media'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({children, className, index}) => {
    const {components: {Image, Text, Button}, style} = this.props
    const showButtons = this.getModifierValue('primary-button') || this.getModifierValue('secondary-button')
    const onlyMedia = !this.getModifierValue('body') && !this.getModifierValue('heading') && !showButtons

    return (
      <div className={classNames(style.item, onlyMedia && style['item--only-media'])}>
        {children}
        <div className={style.item__inner}>
          <Image
            wrapperClassName={style['item__picture-wrapper']}
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`testimonials[${index}].image`}
            size={{
              'min-width: 992px': 1200,
              'min-width: 768px': 1000,
              'min-width: 480px': 800,
            }}
            resize={{disable: true}}
          />
          {!onlyMedia && (
            <div className={style.item__content}>
              {this.getModifierValue('heading') && (
                <Text tagName="h3" bind={`testimonials[${index}].heading`} className={style.item__heading} />
              )}
              {this.getModifierValue('body') && (
                <Text tagName="p" bind={`testimonials[${index}].body`} className={style.item__body} />
              )}
              {showButtons && (
                <div className={style['btns-group']}>
                  {this.getModifierValue('primary-button') && (
                    <Button
                      className={style.button}
                      linkClassName={style.link}
                      bind={`testimonials[${index}].primary-button`}
                    />
                  )}
                  {this.getModifierValue('secondary-button') && (
                    <Button
                      className={style.button}
                      linkClassName={style.link}
                      bind={`testimonials[${index}].secondary-button`}
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  render() {
    const {components: {Text, Slider, Collection}, style, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__header}>
            <Text bind="title" className={style.title} tagName="h2" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
          </div>
          <Media query="(min-width: 768px)">
            {matches =>
              matches ? (
                <Slider
                  className={style['items-wrapper']}
                  bind="testimonials"
                  Item={this.collectionItem}
                  settings={{
                    arrows: true,
                    ...customArrows,
                  }}
                  itemProps={{
                    modifier: $block.modifier,
                  }}
                />
              ) : (
                <Collection
                  className={style['items-wrapper']}
                  bind="testimonials"
                  Item={this.collectionItem}
                  itemProps={{
                    modifier: $block.modifier,
                  }}
                />
              )
            }
          </Media>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Image', 'Button', 'Slider', 'Collection'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Testimonials',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Find out why so many companies prefer us over others!',
    type: 'subtitle',
  },
  testimonials: {
    items: [
      {
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Gallery image',
        },
        heading: {
          type: 'heading',
          content: 'Amanda Peterson',
        },
        body: {
          type: 'text',
          content: '“I was happy to work with Quantum! Their efficient solutions helped us to improve a plenty of business processes. Now our clients receive their products faster so that they are more satisfied with our services. They deserve the highest grade!”',
        },
        'primary-button': {
          textValue: 'Request a quote',
          type: 'primary',
        },
        'secondary-button': {
          textValue: 'Learn more',
          type: 'secondary',
        },
      },
      {
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Gallery image',
        },
        heading: {
          type: 'heading',
          content: 'Jeff Gordons',
        },
        body: {
          type: 'text',
          content: '“Our company started to work with Quantum 4 years ago. We had only positive experience and implemented a lot of projects together. We’re totally satisfied and now we know that we can rely on Quantum experts any time.”',
        },
        'primary-button': {
          textValue: 'Request a quote',
          type: 'primary',
        },
        'secondary-button': {
          textValue: 'Learn more',
          type: 'secondary',
        },
      },
      {
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Gallery image',
        },
        heading: {
          type: 'heading',
          content: 'Elizabeth Smith',
        },
        body: {
          type: 'text',
          content: '“Quantum is a reliable and professional company that applies high technology and creates exclusive programs for the clients. We highly appreciate this approach and will definitely continue our fruitful cooperation with them.”',
        },
        'primary-button': {
          textValue: 'Request a quote',
          type: 'primary',
        },
        'secondary-button': {
          textValue: 'Learn more',
          type: 'secondary',
        },
      },
    ],
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Author name', type: 'checkbox'},
  body: {defaultValue: true, label: 'Author testimonial', type: 'checkbox'},
  'primary-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Wireframe
