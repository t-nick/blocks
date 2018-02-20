import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      title: {
        content: 'Module 1: A new money model',
        type: 'heading',
      },
      description: {
        content: 'Study a new, drastically rational model for money and take under control your money earning.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Module 2: Value-based business',
        type: 'heading',
      },
      description: {
        content: 'Draw your values into your messaging, branding, customer service, and operations to stand out from the crowd.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Module 3: You and me',
        type: 'heading',
      },
      description: {
        content: 'Get inside your ideal clients\' heads to bind your story and their stories.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Module 4: Building your reputation',
        type: 'heading',
      },
      description: {
        content: 'How to create a booming business, increase your productivity, earn more money, grow, and succeed.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Module 5: Simple sales',
        type: 'heading',
      },
      description: {
        content: 'Learn to match, deal with objections, communicate value, and upsell.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Module 6: Building community',
        type: 'heading',
      },
      description: {
        content: 'How to be heard and seen, through email marketing, blogging, and social media.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Module 7: Banking confidence',
        type: 'heading',
      },
      description: {
        content: 'Build power, create thorough plans, and deal with oscillating confidence, uncertainty, and change.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Module 8: Thriving in business',
        type: 'heading',
      },
      description: {
        content: 'Learn how to best control your own objective, competitiveness, expectations, and productivity.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Week off: A break or a catch-up',
        type: 'heading',
      },
      description: {
        content: 'This week enables you to catch-up on any lessons, experiment, test, iterate, and refine. Or take a rest.',
        type: 'text',
      },
    },
  ],
  title: {
    content: '8 sales and marketing modules delivered in 9 weeks',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Process description', type: 'checkbox'},
}

export default ExtendedWireframe
