import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text, Button}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text bind="title" className={style.title} tagName="h1" />
          <Text bind="description" className={style.description} tagName="p" />
          <div className={style['btns-group']}>
            <Button
              bind="button"
              className={style['action-control']}
              buttonClassName={style.button}
            />
            {_.get(['modifier', 'additionalButton'], $block) && (
              <Button
                bind="additionalButton"
                className={style['action-control']}
                buttonClassName={style.button}
              />
            )}
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button'])($editor.components)

Wireframe.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  title: {
    content: 'About us',
    type: 'blockTitle',
  },
  description: {
    content: 'We provide a whole bulk of services to ensure stable growth of the company. The profound expertise of our team, deep understanding of all business aspects, ideal knowledge of processes will help to deal with various issues.',
    type: 'text',
  },
  button: {
    textValue: 'Main button (M)',
    type: 'primary',
  },
  additionalButton: {
    textValue: 'Additional button (M)',
    type: 'secondary',
  },
}

Wireframe.modifierScheme = {
  additionalButton: {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default Wireframe
