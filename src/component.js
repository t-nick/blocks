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
  align: {
    children: [
      {id: 'left2', label: 'Left'},
      {id: 'center2', label: 'Center'},
      {id: 'right2', label: 'Right'},
    ],
    defaultValue: 'left2',
    title: 'Aligning buttons',
    type: 'checkbox-group',
  },
  align2: {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'center', label: 'Center'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'left',
    name: 'Aligning',
    type: 'radio-button-group',
  },
  align3: {
    defaultValue: 'left',
    label: 'Aligning',
    type: 'checkbox',
  },
}

export default Wireframe
