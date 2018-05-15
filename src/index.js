import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-careers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-careers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    src: 'careers-img.png',
    alt: 'Illustration',
  },
  careers: [
    {
      ...Component.defaultContent.careers[0],
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="20" viewBox="0 0 23 20"><image id="Layer.svg" width="23" height="20" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUCAMAAABRYFY8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABBVBMVEVYxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW8AAABoJEVqAAAAVXRSTlMAWKMDUqcCT/7DfaRNyhR5oErME3tI/c77zxdyaAzQGXWRsQlF+hoEoXaPu7I++dONacHx1QGfeotq2RyebawHXSabfGcIl3+wmIJrr4SWb6WShXCIPE/S4gAAAAFiS0dEVgoN6YkAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQMQEg1Xbp+pAAAA3klEQVQY022R51bCQBCFRyJNhISmKEV6QhVQVGqQ3vt9/1dhlxw4JGR+7Mz99p45sztExniwCGQSj4DVdo/tDucTXHcXz3B7SIRkaOV1+PwsBSDpcPDl1cOSTYKoc4fe3jm2IqyBSPTsDsU+OHYhruEEkimidCaWZUJWkNNwHgUU5VL5k7sF5dK7ggpVUfv65u76D34vTf7Y2UCzxVX7OkkHXZWl3j8XfQyu0w1RHGlVfYzJzdgNTNVzMcNc98wFlvxijJXhtzqYyrQ2uHlssN1hb7KNA3A02xKJeb0+AbWzHZxJ8GuSAAAAAElFTkSuQmCC"/></svg>',
      },
    },
    {
      ...Component.defaultContent.careers[1],
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="20" viewBox="0 0 23 20"><image id="Layer.svg" width="23" height="20" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUCAMAAABRYFY8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABBVBMVEVYxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW8AAABoJEVqAAAAVXRSTlMAWKMDUqcCT/7DfaRNyhR5oErME3tI/c77zxdyaAzQGXWRsQlF+hoEoXaPu7I++dONacHx1QGfeotq2RyebawHXSabfGcIl3+wmIJrr4SWb6WShXCIPE/S4gAAAAFiS0dEVgoN6YkAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQMQEg1Xbp+pAAAA3klEQVQY022R51bCQBCFRyJNhISmKEV6QhVQVGqQ3vt9/1dhlxw4JGR+7Mz99p45sztExniwCGQSj4DVdo/tDucTXHcXz3B7SIRkaOV1+PwsBSDpcPDl1cOSTYKoc4fe3jm2IqyBSPTsDsU+OHYhruEEkimidCaWZUJWkNNwHgUU5VL5k7sF5dK7ggpVUfv65u76D34vTf7Y2UCzxVX7OkkHXZWl3j8XfQyu0w1RHGlVfYzJzdgNTNVzMcNc98wFlvxijJXhtzqYyrQ2uHlssN1hb7KNA3A02xKJeb0+AbWzHZxJ8GuSAAAAAElFTkSuQmCC"/></svg>',
      },
    },
    {
      ...Component.defaultContent.careers[2],
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="20" viewBox="0 0 23 20"><image id="Layer.svg" width="23" height="20" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUCAMAAABRYFY8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABBVBMVEVYxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW9YxW8AAABoJEVqAAAAVXRSTlMAWKMDUqcCT/7DfaRNyhR5oErME3tI/c77zxdyaAzQGXWRsQlF+hoEoXaPu7I++dONacHx1QGfeotq2RyebawHXSabfGcIl3+wmIJrr4SWb6WShXCIPE/S4gAAAAFiS0dEVgoN6YkAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQMQEg1Xbp+pAAAA3klEQVQY022R51bCQBCFRyJNhISmKEV6QhVQVGqQ3vt9/1dhlxw4JGR+7Mz99p45sztExniwCGQSj4DVdo/tDucTXHcXz3B7SIRkaOV1+PwsBSDpcPDl1cOSTYKoc4fe3jm2IqyBSPTsDsU+OHYhruEEkimidCaWZUJWkNNwHgUU5VL5k7sF5dK7ggpVUfv65u76D34vTf7Y2UCzxVX7OkkHXZWl3j8XfQyu0w1RHGlVfYzJzdgNTNVzMcNc98wFlvxijJXhtzqYyrQ2uHlssN1hb7KNA3A02xKJeb0+AbWzHZxJ8GuSAAAAAElFTkSuQmCC"/></svg>',
      },
    },
  ],
  'button-1': {
    ...Component.defaultContent['button-1'],
    textValue: 'Learn more',
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Careers description', type: 'hidden'},
}

export default ExtendedWireframe
