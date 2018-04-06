import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
  }

  render() {
    const {components: {RawHTML}} = this.props
    return (
      <section>
        <RawHTML bind="html" />
      </section>
    )
  }
}

Wireframe.components = _.pick(['RawHTML'])($editor.components)

Wireframe.defaultContent = {
  html: '<!-- Here you can add your custom html code -->\n<div class="my-custom-block-9B8B8E4">Hello there!</div>\n<style>\n  .my-custom-block-9B8B8E4 {\n    text-align: center;\n    font-size: 50px;\n  }\n</style>\n<script>\n  // Note that script will not execute in editor mode\n  setTimeout(function() {document.querySelector(\'.my-custom-block-9B8B8E4\').innerHTML = \'General Kenobi\'}, 2000)\n</script>',
}

export default Wireframe
