import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'About Us',
    type: 'blockTitle',
  },
  text: {
    content: 'Our company was established more than 30 years ago. Now Acrozz is recognized as the leading and fast-growing logistics company spanning its services all over the world. We are focused on providing our valued customers with the exceptional transportation service and meet their individual needs and requirements. <br><br> Acrozz is centered on the two main sectors to deliver customized supply chain solutions, namely transportation and logistics. Our operational global presence and thousands of highly trained and certified team members allow us to provide all-around transportation solutions and value-added services to a variety of companies from start-ups to large corporations. <br><br> Every year many companies increasingly turn to Acrozz to transport thousands of tons of cargo and we make sure that they’re shipped cost-efficiently, safe, and on time! Our company has a team of thoroughly background checked professionals who know how to implement innovative solutions and state-of-the-art technologies with our customers\' interests in mind. They are dedicated to delivering 5-star services whatever your business sector, be it hospitality, medical, educational, fashion, automotive, retail, oil and energy industry... the list is endless. So, regardless of the type of transportation, our main goal is to ensure the safety of your cargo during transportation and minimize all possible risks.',
    type: 'text',
  },
  picture: {
    resourceRef: 'men.png',
    alt: 'Picture about the company',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
