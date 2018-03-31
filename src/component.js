import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text}, style, $block} = this.props

    return (
      <div>
        {_.get(['modifier', 'title'], $block) && (
          <Text bind="title" className={style.title} tagName="h1" />
        )}
      </div>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'About us',
    type: 'blockTitle',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Title', type: 'checkbox'},
}

export default Wireframe
