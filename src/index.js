import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  articles: [
    {
      id: 'f822d787-b3e2-432d-a03e-689c58efb302',
      title: {
        content: 'Unmatched <br/> experience',
        type: 'heading',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="66" height="66" viewBox="0 0 66 66"><image id="certificate.svg" width="66" height="66" xlink:href="data:img/png;base64,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"/></svg>',
      },
      iconText: {
        content: '01',
        type: 'text',
      },
      iconImage: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture instead icon',
      },
      description: {
        content: 'Our highly trained and certified technicians provide the highest quality electrical services & modern equipment.',
        type: 'text',
      },
    },
    {
      id: '18ce5632-46d1-4c9e-b249-ca0e37f665c2',
      title: {
        content: 'Quality <br/> and safety',
        type: 'heading',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="71" height="71"><image width="71" height="71" xlink:href="data:img/png;base64,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"/></svg>',
      },
      iconText: {
        content: '02',
        type: 'text',
      },
      iconImage: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture instead icon',
      },
      description: {
        content: 'We perform our work according to the highest industry standards for electrical quality & safety.',
        type: 'text',
      },
    },
    {
      id: '7986b4e0-751f-48f6-8861-5ace080e284b',
      title: {
        content: 'Up-front <br/> & fair pricing',
        type: 'heading',
      },
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="83" height="69"><image width="83" height="69" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABFCAMAAAAB4yq0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC0FBMVEX/wQf/////wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQf/wQcAAAD4X+g+AAAA7nRSTlMAAEFxExXpf0KqKYu13+85Agjw+rMmkNn87uUvXfYWLJ9f0ccPCcT9ZyrJaDHzwStDqQFHhvK/B/6aj3ok6OEgJQajUCMdyp0b3HgoBVq+7fSvLvV2H7qDz5sSjS2KhAqlHq4/ahAyqwMM0+x5jjOYGfg6C6aV+8uT2ifFDXD5qEV1QJeUzhEEV5E3sfFybGs8Zl7b61w4NU1g54C5YjSMpGGSgVGZF22y4mOe0NJKMHPWrXuH4GS4oN3GTMghWZzN1Wk75KF0d8LeFMNlsCLAfOMcVvdO2Brq5ltJiT68RD2Wt6yI135TfVK9tlUYNV2PGAAAAAFiS0dE77iw4qEAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiAw4ODTs+HKepAAAFsElEQVRYw62Y+0NMeRTAv9H0pplKRkQeY4QpRe8HRW1aUVo9UFEqqp0MGylKidK2hbHTQy1FsfJYssIu+2BZ7LJsu2E3i/XYxZ6/Yc+dO89mmod7zw9zv9/zPfdz7/1+z/me8x1CTJdhwy2NG1lYWJiB5FiBNdtMGwBbVpl29g4jAEY6WDtyWWLyrJ1AIc4uo9hhuiJs5Gg+OI3BhttYNpjjANztx0/ggwdn4iSAyVOYMwVTQTiNEE9kEjJ+OsAM5syZIvDCi7ecSWYB+PgyZs4GmKNmWvqBfwBj5qxACFIzucH8EObfHhoG4XNVTCKYF8GcSSIBJs0nCxRMw2IqMyoagD/9PWf5FLDEJDH+dBAtjH2fNSZZFLd4iZwan+DIFhNlaSz9rokfsMcky/iQlJyC1GnsMdGXUsnyFYHgtJJNpgde0gDSmTMz0lZx1MzVzpDJPN6zANaomdlLwJ/HmJnjBLlqph0fXNYyZq7Lg3w7FbMA4EPm80nsAaLFJIoPhWT9cD+QbGCBudELA+ijok2wuXgLGH5N032ppBRUwi8OYIVJtm4bXUYBAxPLtxu2NMfneaEVAKWVHGN2ZsZ7IOwwbmUeU1C1cxjbTMLdZYKRnFldk77bVSHBsbXmPGQopuXHoCl1n7DATANtKXM07V7frPqGPRvlTfHein1zNZlS2P+pWEZLbWMxQLJJyKbpiRhbC5sJ2eBA1ZEtBxapmfHQqmE6AVT5NiCnLaTtM/3lwahI5WcdXCFRtA7J2jsOH8mmmCJorVYbjwXoxEuX49Fjn4vQUDQid694cGm4bpsVDnmFHO+mc+mJOc3B4Zj8sCk8eUqHeRqg+/QXPmc0Z5i/OXVilMbOPosK/vDjXEJq3bCVX7AVlT5K603NepgSd/mY+8mzPePOtUoD5T2/0oKs5XKL1bg9gWRHDMZVEW4BwkiqFD+yUwjwpXXlEVucWW9dJlWzh0eel9EOHlO5rVdRy0+6EDee13YRW5dscOQrPDPA16ewtdKW8peOy5T9bgB7XWZ+Qmyjdr7puvLNtzR2yXf4s+V7LqXFpttwNLRMrkNl0lXaNuYa1r86zB/0LfQux+v+YxQz1iqjJpDcaEkNxXiNox4jbVd4EhH8CFa6zMKhXDKquTuPpt7sob6TSnTiBMo57G+pjG5dhHBdpqF6kONYcHs/Rb12kHpX359GYvtnsYbFUSGUm8ek5M75C/lIutuFH4rZKa9Gc3BNIghPmc9EWfYLukJ5BPGdkWKteVQOzcWHFa59JyYhshYI3D5Yue8eIl0jLN6RSdoBCrQ196k9YESNhcU7M+eJ4KxWJfYrFQyHoggDpmcfrNLorg+inKGdEFOZgvUZ1YN1DQAV6t5vvyMyYR4xmdl/It4q2ta+Yf6eEtUiy8Kg7Kqyw6lC4oM1dMc0Zq0qrTzMu2t78Pojmz/+RA/t4CrGZ5+kAtabmMPk1idMvpk4KG2BfzY9mp3GB3CqUDFMXqOtUUsH4npSH0vD/Pj0BpWs2PwH8IgHtzUyuPnrfiunqe3GivSaO4rVs+4D6EvPIEyY2vLXZHzJ0idaOr3Mp6YSV3diwvALERDjzMzLAaYQBQ1UdD/LGazXy4Swx1V7G3lGkAOL0dKqXvcAop8pP/7ee3agacLyoYj9wbg28HeJniG9TOmleAVYlJL5PM5bdya47VIcffFI7+NoZq92HRIU0TX7ZWaK8s8092u9565suK824b26jeqH/2STIZnxkKSh8VT60pSZ/x5+1lKm/JNu4eug+j2WAb5k47ipVJR2lhAyNFMKYfsGsmgZqOzQqusyxOeL34x2VoCFdSdcfKhCAd48GXrxlPWnpIwWCd6uc0jrb3w7p1dekNEiKX1l4LgpZ3KOaW0NEv11csTKmpcer888EL0IqiQGRV7PZ7x9/rSKlqKiG4bqeV7XArv/CDHK/B/oM34PIF9UeAAAAABJRU5ErkJggg=="/></svg>',
      },
      iconText: {
        content: '03',
        type: 'text',
      },
      iconImage: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture instead icon',
      },
      description: {
        content: 'We offer you up-front and fair pricing which covers materials & labor. Find out the price before we start working!',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'Reasons to choose us',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'item-description': {defaultValue: true, label: 'Advantages description', type: 'checkbox'},
  'item-heading': {defaultValue: true, label: 'Advantages title', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Advantages icon', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
