import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
  }

  render() {
    const {components: {RawHTML}} = this.props
    return (
      <section>
        <RawHTML bind="rawHtml" />
      </section>
    )
  }
}

Wireframe.components = _.pick(['RawHTML'])($editor.components)

Wireframe.defaultContent = {
  rawHtml: {
    html:
      '<!-- Here you can add your custom html code -->\n\n<div class="my-custom-block-9B8B8E4">Hello there!</div>\n',
    css:
      '/* Here you can add your custom css code */\n\n.my-custom-block-9B8B8E4 {\n  text-align: center;\n  font-size: 50px;\n}\n',
    js:
      "// Here you can add your custom js code\n// Note: For security reasons this code will execute only on published site\n\n// setTimeout(function() {\n//  document.querySelector('.my-custom-block-9B8B8E4').innerHTML = 'General Kenobi'\n// }, 2000)\n",
  },
}

export default Wireframe
