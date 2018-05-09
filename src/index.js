import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-cta/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    ...Component.defaultContent.background,
    color: 'light-shade-color',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Apply for Driver Job',
  },
  contactForm: {
    ...Component.defaultContent.contactForm,
    fields: [
      {
        ...Component.defaultContent.contactForm.fields[0],
        title: '',
        placeholder: 'Full name *',
      },
      {
        ...Component.defaultContent.contactForm.fields[2],
        title: '',
        placeholder: 'E-mail *',
      },
      {
        ...Component.defaultContent.contactForm.fields[1],
        title: '',
        placeholder: 'Phone *',
      },
      {
        ...Component.defaultContent.contactForm.fields[0],
        placeholder: 'Type of driver',
        id: 'contactForm_driver-type',
        title: '',
        required: false,
      },
      {
        ...Component.defaultContent.contactForm.fields[0],
        placeholder: 'Valid cdl \'a\' class',
        id: 'contactForm_cdl-class',
        title: '',
        required: false,
      },
      {
        ...Component.defaultContent.contactForm.fields[0],
        placeholder: 'Years of driver\'s solo experience',
        id: 'contactForm_drive-experience',
        title: '',
        required: false,
      },
    ],
    submitButton: {
      ...Component.defaultContent.contactForm.submitButton,
      title: 'Sumbit application',
      type: 'primary-alt',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Title description', type: 'hidden'},
}

export default ExtendedWireframe
