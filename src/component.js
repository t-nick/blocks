import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text}, style} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text bind="title" className={style.title} tagName="h1" />
          <Text bind="description" className={style.description} tagName="p" />

          <button type="button" className={style.button}>Main button (M)</button>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'About us',
    type: 'blockTitle',
  },
  description: {
    content: 'We provide a whole bulk of services to ensure stable growth of the company. The profound expertise of our team, deep understanding of all business aspects, ideal knowledge of processes will help to deal with various issues.',
    type: 'text',
  },
}

export default Wireframe
