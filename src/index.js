import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  why: [
    {
      title: {
        content: 'Client-oriented',
        type: 'heading',
      },
      description: {
        content: 'Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat.',
        type: 'text',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="57" height="53" viewBox="0 0 57 53"><defs><path id="bxora" d="M437 449.21v5.3c0 .45-.37.82-.83.82h-12.72a.82.82 0 0 1-.83-.82c0-.45.37-.82.83-.82h11.9v-4.48a3.05 3.05 0 0 0-3.06-3.03h-3.14a.82.82 0 0 1-.83-.82v-2.65c0-.29.15-.54.37-.69l1.5-1.64c.48-.52.74-1.19.74-1.89v-3.74c0-1.71-1.4-3.11-3.13-3.11h-2.2a3.13 3.13 0 0 0-3.14 3.1v3.75c0 .7.26 1.37.74 1.89l1.5 1.64c.22.15.37.4.37.69v2.65c0 .45-.37.82-.83.82h-3.14a3.05 3.05 0 0 0-3.01 2.52 5.16 5.16 0 0 1 2.89 4.62v5.97c0 .45-.37.81-.83.81H398.8a.82.82 0 0 1-.82-.81v-5.97c0-2.04 1.2-3.8 2.93-4.64a3.05 3.05 0 0 0-3.01-2.5h-3.14a.82.82 0 0 1-.83-.82v-2.65c0-.29.15-.54.37-.69l1.5-1.64c.48-.52.74-1.19.74-1.89v-3.74c0-1.71-1.4-3.11-3.14-3.11h-2.2a3.13 3.13 0 0 0-3.13 3.1v3.75c0 .7.26 1.37.74 1.89l1.5 1.64c.22.15.37.4.37.69v2.65c0 .45-.37.82-.83.82h-3.14a3.05 3.05 0 0 0-3.06 3.03v4.48h12.04c.46 0 .83.37.83.82 0 .45-.37.82-.83.82h-12.86a.82.82 0 0 1-.83-.82v-5.3a4.7 4.7 0 0 1 4.71-4.67h2.32v-1.48l-1.45-1.58a4.42 4.42 0 0 1-1.16-2.99v-3.74a4.77 4.77 0 0 1 4.78-4.75h2.2a4.77 4.77 0 0 1 4.79 4.75v3.74c0 1.11-.41 2.17-1.16 3l-1.45 1.57v1.48h2.32a4.71 4.71 0 0 1 4.6 3.66c.22-.03.45-.05.68-.05h2.71v-1.8l-1.65-1.8a4.86 4.86 0 0 1-1.29-3.3v-4.22c0-2.9 2.37-5.25 5.29-5.25.46 0 .83.37.83.82 0 .46-.37.82-.83.82-2 0-3.63 1.62-3.63 3.6v4.23c0 .8.3 1.59.85 2.19l1.7 1.86c.23.15.38.4.38.69v2.99c0 .45-.37.82-.82.82h-3.54a3.55 3.55 0 0 0-3.55 3.52v5.15h19.7v-5.15c0-1.94-1.6-3.52-3.55-3.52h-3.54a.82.82 0 0 1-.83-.82v-2.99c0-.29.15-.54.38-.7l1.7-1.85c.56-.6.86-1.38.86-2.2v-4.21c0-1.99-1.63-3.6-3.63-3.6a.82.82 0 0 1-.83-.83c0-.45.37-.82.83-.82a5.27 5.27 0 0 1 5.28 5.25v4.22c0 1.22-.45 2.39-1.28 3.3l-1.65 1.8v1.8h2.7c.25 0 .5.02.73.06a4.7 4.7 0 0 1 4.6-3.67h2.32v-1.48l-1.45-1.58a4.42 4.42 0 0 1-1.16-2.99v-3.74a4.77 4.77 0 0 1 4.78-4.75h2.2a4.77 4.77 0 0 1 4.8 4.75v3.74c0 1.11-.42 2.17-1.17 3l-1.45 1.57v1.48h2.32a4.7 4.7 0 0 1 4.71 4.67zm-19.38 22.12l-3.22 3.23.69 4.5c.05.3-.08.6-.33.78a.83.83 0 0 1-.86.07l-4.09-2.04-4.09 2.04a.81.81 0 0 1-.86-.07.81.81 0 0 1-.33-.79l.7-4.49-3.23-3.23a.82.82 0 0 1-.2-.83c.1-.29.35-.5.66-.55l4.52-.74 2.1-4.03a.83.83 0 0 1 .73-.45c.31 0 .6.17.74.45l2.1 4.03 4.51.74c.3.05.56.26.66.55.1.3.01.61-.2.83zm-2.3-.02l-3.35-.54a.84.84 0 0 1-.6-.44l-1.56-2.99-1.56 3a.84.84 0 0 1-.6.43l-3.34.54 2.38 2.4c.18.18.27.44.23.7l-.51 3.32 3.03-1.51c.23-.12.5-.12.74 0l3.03 1.51-.5-3.33a.81.81 0 0 1 .22-.7zm20.4-6l-3.22 3.22.69 4.49a.82.82 0 0 1-1.19.86l-4.09-2.04-4.09 2.04a.82.82 0 1 1-1.19-.86l.7-4.49-3.23-3.23a.81.81 0 0 1-.2-.83c.1-.29.35-.5.66-.56l4.51-.73 2.1-4.04a.83.83 0 1 1 1.47 0l2.1 4.04 4.52.73c.3.05.56.27.65.56.1.3.02.61-.2.83zm-2.3-.03l-3.35-.55a.82.82 0 0 1-.6-.43l-1.56-3-1.56 3a.82.82 0 0 1-.6.43l-3.34.55 2.38 2.39c.18.18.27.44.23.7l-.51 3.33 3.03-1.51a.82.82 0 0 1 .74 0l3.03 1.5-.51-3.32a.82.82 0 0 1 .23-.7zm-33.9.02l-3.22 3.23.69 4.49a.82.82 0 0 1-1.19.86l-4.09-2.04-4.09 2.04a.82.82 0 1 1-1.19-.86l.7-4.49-3.22-3.23a.81.81 0 0 1-.2-.83c.1-.29.34-.5.65-.56l4.52-.73 2.1-4.04a.83.83 0 1 1 1.47 0l2.1 4.04 4.51.73c.3.05.56.27.66.56.1.3.01.61-.2.83zm-2.3-.02l-3.35-.55a.82.82 0 0 1-.6-.43l-1.56-3-1.56 3a.82.82 0 0 1-.6.43l-3.34.55 2.38 2.39c.19.18.27.44.23.7l-.51 3.33 3.03-1.51a.82.82 0 0 1 .74 0l3.03 1.5-.5-3.32a.82.82 0 0 1 .22-.7z"/></defs><g><g transform="translate(-381 -429)"><use xlink:href="#bxora"/></g></g></svg>',
        fill: 'brand-color',
      },
    },
    {
      title: {
        content: '24/7 Support',
        type: 'heading',
      },
      description: {
        content: 'Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus.',
        type: 'text',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="53" height="52" viewBox="0 0 53 52"><defs><path id="o8jta" d="M1009.17 447.33h-1.67a.83.83 0 0 0-1.67 0h-1.66a2.5 2.5 0 0 1 5 0zm6.66 0h-1.66a.83.83 0 0 0-1.67 0h-1.67a2.5 2.5 0 0 1 5 0zm-2.5 23.34a3.34 3.34 0 1 1-6.67 0 3.34 3.34 0 0 1 6.67 0zm-1.66 0a1.67 1.67 0 1 0-1.67 1.67c.92 0 1.67-.75 1.67-1.67zm23.33 6.66V479h-50v-1.67h5V466.5c0-6.9 5.6-12.5 12.5-12.5h.9a9.98 9.98 0 0 1-3.25-5.84h-.57a3.75 3.75 0 0 1-2.07-6.86A12.5 12.5 0 0 1 1010 429a12.5 12.5 0 0 1 12.49 12.3 3.74 3.74 0 0 1 .01 6.23V449c0 2.3-1.87 4.17-4.17 4.17h-.9c-.26.29-.54.57-.84.83h.91c6.9 0 12.5 5.6 12.5 12.5v10.83zm-14.17-29.2c-.14 0-.27.03-.41.03h-.57a9.9 9.9 0 0 1-1.18 3.3 2.5 2.5 0 0 0 2.16-2.46zm-.41-5.8h-.42v4.17h.42a2.09 2.09 0 0 0 0-4.17zm-20.42 0h-.42a2.08 2.08 0 1 0 0 4.17h.42zm.15-1.66a10 10 0 0 1 9.85-8.34 10 10 0 0 1 9.85 8.34h.57c.13 0 .25.02.37.04a10.84 10.84 0 0 0-10.79-10.04c-5.7 0-10.38 4.43-10.8 10.04.13-.02.25-.04.38-.04zM1010 434a8.35 8.35 0 0 0-8.29 7.45c2.8-.31 4.96-2.03 4.96-4.12a.83.83 0 1 1 1.66 0c0 2.31 3.99 4.77 10 4.98A8.34 8.34 0 0 0 1010 434zm-3.44 20.08a8.3 8.3 0 0 0 8.42-.91H1010v-1.67h6.65a8.28 8.28 0 0 0 1.68-5v-2.52c-4.93-.16-9-1.79-10.75-4.1-1.1 1.76-3.31 3.01-5.91 3.24v3.38a8.34 8.34 0 0 0 4.9 7.58zm3.44 7.22l2.58-5.15a10.06 10.06 0 0 1-5.16 0zm-4.68-5.63h-1.47l3.33 6.67h1.47zm6.03 6.67h1.47l3.33-6.67h-1.47zm-13.02 0h6.99l-3.32-6.65c-5.74.27-10.33 5-10.33 10.8v10.84h2.5V466.5c0-2.3 1.87-4.16 4.16-4.16zm25.84 4.16a2.5 2.5 0 0 0-2.5-2.5h-23.34a2.5 2.5 0 0 0-2.5 2.5v10.83h28.34zm4.16 0c0-5.8-4.59-10.54-10.33-10.8l-3.32 6.64h6.99c2.3 0 4.16 1.86 4.16 4.16v10.83h2.5zm-7.5 3.33h1.67v5.84h-1.67zm0-3.33h1.67v1.67h-1.67zm7.5-30h1.67v1.67h-1.67zm0 3.33h1.67v1.67h-1.67zm0 3.34h1.67v1.66h-1.67zM990 446.5h1.67v1.66H990zm0 3.34h1.67v1.66H990zm0 3.33h1.67v1.66H990z"/></defs><g><g transform="translate(-983 -428)"><use xlink:href="#o8jta"/></g></g></svg>',
        fill: 'brand-color',
      },
    },
    {
      title: {
        content: 'Professional Team',
        type: 'heading',
      },
      description: {
        content: 'Praesent egestas neque eu enim. In hac habitasse platea dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales aliquam. Curabitur nisi. Quisque malesuada placerat nisl. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et.',
        type: 'text',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="54" height="53" viewBox="0 0 54 53"><defs><path id="q0f9a" d="M435.91 691.73a.97.97 0 0 1-.25.33h-.01l-23.91 26.61a1 1 0 0 1-1.48 0l-23.91-26.6v-.01a.96.96 0 0 1-.1-1.38l8.63-9.64a.99.99 0 0 1 .74-.33h30.76c.28 0 .55.12.74.33l8.63 9.64c.26.28.32.7.16 1.05zm-22.73-9.07l7.05 7 4.4-7zm-2.18.61l-7.13 7.08h14.26zm-13.63-.6l4.4 7 7.05-7zm-8.18 7.68h10.68l-4.4-7.02zm19.78 23.95l-8.07-22h-11.7zm23.83-22H403l8 21.8 5.85-15.6a1 1 0 0 1 1.27-.57c.51.18.78.75.59 1.25l-5.65 15.08zm-10.67-1.95h10.68l-6.28-7.02zm-10.14-20.37V675c0 .54-.44.98-.99.98a.98.98 0 0 1-.99-.98v-5.03c0-.54.44-.98.99-.98s.99.44.99.98zm8.02 4.26l-3.6 3.56a1 1 0 0 1-1.4 0 .97.97 0 0 1 0-1.38l3.6-3.56a1 1 0 0 1 1.4 0c.39.38.39 1 0 1.38zm-13.21 3.56a1 1 0 0 1-1.4 0l-3.6-3.56a.97.97 0 0 1 0-1.38 1 1 0 0 1 1.4 0l3.6 3.56c.39.38.39 1 0 1.38zm12.26 16.43c.54 0 .99.44.99.98s-.45.97-1 .97a.98.98 0 0 1-.98-.97c0-.54.44-.98.99-.98z"/></defs><g><g transform="translate(-384 -668)"><use xlink:href="#q0f9a"/></g></g></svg>',
        fill: 'brand-color',
      },
    },
    {
      title: {
        content: 'Result Guaranteed!',
        type: 'heading',
      },
      description: {
        content: 'Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc interdum lacus 100% sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam.',
        type: 'text',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="54" height="54" viewBox="0 0 54 54"><defs><path id="yf2qa" d="M985.98 717.02c.54 0 .98.45.98 1 0 .54-.44.98-.98.98a.99.99 0 0 1-.98-.99c0-.54.44-.99.98-.99zm25.1-25.06c.53 0 .97.45.97.99s-.44.99-.98.99a.98.98 0 0 1-.98-1c0-.53.44-.98.98-.98zm12.83-5.58a4.14 4.14 0 0 1-5.9 0 4.22 4.22 0 0 1 0-5.93 4.14 4.14 0 0 1 5.9 0 4.22 4.22 0 0 1 0 5.93zm-1.38-4.54a2.19 2.19 0 0 0-3.13 0 2.24 2.24 0 0 0 0 3.15 2.2 2.2 0 0 0 3.13 0c.86-.87.86-2.28 0-3.15zm-24.84 28.75l-1.17 2.36a5.2 5.2 0 0 1-4.29 2.88l-1.36.1h-.17a2.53 2.53 0 0 1-2.54-2.73l.1-1.37a5.24 5.24 0 0 1 2.86-4.31l2.34-1.18a.98.98 0 0 1 1.32.45.99.99 0 0 1-.44 1.32l-2.35 1.18a3.25 3.25 0 0 0-1.78 2.68l-.09 1.36c-.02.24.1.39.17.46s.22.18.45.17l1.36-.1a3.23 3.23 0 0 0 2.66-1.79l1.17-2.36a.98.98 0 0 1 1.32-.44c.48.24.68.83.44 1.32zm37.3-39.2l-.02.49a29.69 29.69 0 0 1-11.38 21.98l-2.27 1.78v5.4c0 4.49-1.73 8.7-4.89 11.88l-5.76 5.8a.97.97 0 0 1-1.05.22.98.98 0 0 1-.62-.88l-.63-12.31-.67.52a.97.97 0 0 1-1.07.08c-.29-.15-.57-.32-.86-.49l-1.47 1.23c-.7.59-1.41 1.19-2.04 1.7a.99.99 0 0 1-1.03.12 12.87 12.87 0 0 1-6.13-6.16 1 1 0 0 1 .13-1.06l2.9-3.45c-.21-.34-.41-.7-.6-1.04a1 1 0 0 1 .1-1.1l.5-.61-12.2-.64a.99.99 0 0 1-.64-1.68l5.76-5.8a16.54 16.54 0 0 1 11.8-4.9h.03l5.63.16 2.14-2.66a29.53 29.53 0 0 1 21.02-10.9l.91-.06a2.26 2.26 0 0 1 2.42 2.38zm-35.34 22.2l7.3-9.03-4.11-.13a14.6 14.6 0 0 0-10.4 4.35l-4.2 4.22zm4.42 11.13a22.4 22.4 0 0 1-4.8-4.79l-2.12 2.53a11 11 0 0 0 4.37 4.4l1.52-1.28 1.03-.86zm15.3-3.68v-3.87l-9.11 7.1.59 11.47 4.2-4.22a14.76 14.76 0 0 0 4.31-10.48zm13.67-29.74a.3.3 0 0 0-.33-.33l-.91.06c-7.65.5-14.8 4.2-19.62 10.18l-12.61 15.61a20.97 20.97 0 0 0 2.51 3.45l5.18-5.2a.98.98 0 0 1 1.39 0 .99.99 0 0 1 0 1.39l-5.19 5.21c1.1 1 2.28 1.89 3.56 2.64l15.37-12a27.73 27.73 0 0 0 10.62-20.53z"/></defs><g><g transform="translate(-983 -667)"><use xlink:href="#yf2qa"/></g></g></svg>',
        fill: 'brand-color',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    content: 'Why people choose us',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.',
  },
  button: {
    ...Component.defaultContent.button,
    textValue: 'Read more',
  },
  'button-secondary': {
    ...Component.defaultContent['button-secondary'],
    textValue: 'Read more',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  'top-caption': {defaultValue: true, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
