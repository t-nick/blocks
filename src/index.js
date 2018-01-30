import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-careers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  careers: [
    {
      title: 'Trainee program for young talents',
      id: 'dc11a56a-3863-477a-8a53-fb64c7bb71e6',
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M40.97 7.03A23.843 23.843 0 0 0 24 0 23.843 23.843 0 0 0 7.03 7.03 23.843 23.843 0 0 0 0 24c0 6.41 2.496 12.438 7.03 16.97A23.843 23.843 0 0 0 24 48c6.41 0 12.438-2.496 16.97-7.03A23.843 23.843 0 0 0 48 24c0-6.41-2.496-12.438-7.03-16.97zm-5.722 3.285l1.055-4.383a21.947 21.947 0 0 1 8.759 12.184l-.553.106a2.17 2.17 0 0 0-1.692 1.605l-.214.864c-.003.01-.004.016-.02.021-.015.006-.02.002-.029-.004l-1.28-.96a2.174 2.174 0 0 0-2.303-.186l-1.598.836a2.14 2.14 0 0 0-1.156 2.05 2.14 2.14 0 0 0 1.4 1.894l.076.028c.008.004.015.006.019.022.004.015 0 .02-.007.028l-.995 1.144a.031.031 0 0 1-.04.006l-2.684-1.731a2.157 2.157 0 0 0-2.051-.16c-.67.297-1.14.906-1.258 1.629l-.207 1.265a2.16 2.16 0 0 0 .657 1.93l1.4 1.309a.03.03 0 0 1 .004.04l-2.28 3.457c-.217.329-.34.71-.356 1.105l-.198 4.95a.03.03 0 0 1-.01.02L26.65 42.36a.031.031 0 0 1-.037.004l-1.97-1.153a.03.03 0 0 1-.014-.02s-.955-4.336-.991-4.432l-.869-2.331a2.174 2.174 0 0 0-1.84-1.4l-3.975-.346a.03.03 0 0 1-.024-.016l-2.262-3.899a.032.032 0 0 1-.004-.02l.57-3.782a.03.03 0 0 1 .011-.02l3.472-2.62a.031.031 0 0 1 .03-.003l3.365 1.403c.192.08.394.132.6.154l4.66.507a2.16 2.16 0 0 0 1.494-.393l3.088-2.213a2.172 2.172 0 0 0 .715-2.641l-.286-.642a2.156 2.156 0 0 0-1.858-1.278l-8.67-.475a.058.058 0 0 1-.028-.013.062.062 0 0 1 .004-.04.075.075 0 0 1 .017-.007l2.603-.702a2.17 2.17 0 0 0 .922-.516l3.184-3.004a.03.03 0 0 1 .018-.008l4.79-.493a2.167 2.167 0 0 0 1.883-1.647zM19.02 8.555l1.79-3.372a2.437 2.437 0 0 0 .235-1.63l-.243-1.185a21.936 21.936 0 0 1 6.422.004s-.256.28-.3.298l-2.537 1.017c-.363.146-.688.38-.942.676l-3.953 4.62a.3.3 0 0 1-.454 0c-.14-.156-.032-.403-.018-.429zM9.696 7.473v3.2c0 .894-.448 1.717-1.198 2.204l-2.296 1.49a4.738 4.738 0 0 0-1.341 1.31l-2.085 3.054a21.898 21.898 0 0 1 6.92-11.258zM11.09 38.96l-.302 2.45a21.958 21.958 0 0 1-7.475-10.324H4.67c.166 0 .32.084.41.224l2.744 4.276c.124.192.271.367.44.52l2.67 2.436a.487.487 0 0 1 .155.418zM24 45.867a21.733 21.733 0 0 1-11.228-3.11l.435-3.535a2.624 2.624 0 0 0-.835-2.256s-2.728-2.496-2.752-2.53l-2.744-4.277a2.608 2.608 0 0 0-2.205-1.205H2.699a21.857 21.857 0 0 1-.559-5.504l4.483-6.569c.197-.29.446-.533.74-.724l2.296-1.49a4.743 4.743 0 0 0 2.17-3.993V5.842a21.766 21.766 0 0 1 6.88-3.06l.247 1.2a.3.3 0 0 1-.03.2l-1.79 3.371c-.112.21-.257.764-.257.764a2.418 2.418 0 0 0 .54 2.055 2.416 2.416 0 0 0 1.844.849c.034 0 1.066.05 1.85-.851l3.952-4.62a.3.3 0 0 1 .116-.083l2.537-1.017c.36-.145.685-.377.938-.671l.958-1.114a21.73 21.73 0 0 1 4.792 1.907c-.025.057-1.232 5.044-1.232 5.044a.03.03 0 0 1-.027.024l-4.791.493c-.471.049-.92.254-1.264.579l-3.183 3.004a.03.03 0 0 1-.013.007l-2.604.702c-.849.229-1.47.94-1.583 1.813a2.158 2.158 0 0 0 1.072 2.155c.29.167.622.264.956.283l8.671.474a.03.03 0 0 1 .026.019l.287.64a.03.03 0 0 1-.01.038l-3.088 2.213a.03.03 0 0 1-.021.006l-4.669-.509-3.364-1.403a2.172 2.172 0 0 0-2.136.27l-3.473 2.62a2.152 2.152 0 0 0-.836 1.405l-.57 3.782c-.072.484.023.984.269 1.407l2.261 3.9a2.17 2.17 0 0 0 1.685 1.07l3.975.346a.031.031 0 0 1 .027.02l.87 2.336.904 4.138c.129.588.5 1.1 1.02 1.405l1.97 1.154a2.166 2.166 0 0 0 2.609-.322l3.037-2.977c.395-.388.625-.906.648-1.46l.197-4.948c0-.006.002-.012.006-.016l2.28-3.457a2.16 2.16 0 0 0-.328-2.772l-1.4-1.31a.031.031 0 0 1-.009-.027l.208-1.265c.001-.01.002-.017.017-.024.015-.006.02-.003.03.003l2.683 1.73c.898.58 2.104.41 2.806-.397l.996-1.145a2.165 2.165 0 0 0-.873-3.446l-.076-.029-.014-.007a.056.056 0 0 1-.004-.04l.015-.01 1.598-.836a.03.03 0 0 1 .033.003l1.28.96a2.159 2.159 0 0 0 2.025.307 2.159 2.159 0 0 0 1.374-1.517l.215-.865a.03.03 0 0 1 .024-.023l.623-.12c.218 1.236.332 2.507.332 3.803 0 12.057-9.81 21.867-21.867 21.867z" /></svg>',
        fill: 'var(--ui-brand-color)',
      },
    },
    {
      title: 'Relocation and full support for experts from other cities and countries',
      id: '80c3446a-8a89-4652-89bb-b861e55f3f7d',
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M25.898 22.43a1.062 1.062 0 0 0-1.502 0l-1.994 1.993a2.53 2.53 0 0 0-1.764 0l-4.097-4.098a1.062 1.062 0 0 0-1.502 1.502l4.098 4.098a2.544 2.544 0 0 0 2.383 3.422 2.544 2.544 0 0 0 2.384-3.423l1.994-1.993a1.062 1.062 0 0 0 0-1.502zm-4.377 5.006a.63.63 0 1 1 .001-1.262.63.63 0 0 1-.001 1.262z"/><path d="M34.055 10.71l1.203-1.718 4.822 3.377a1.06 1.06 0 0 0 1.479-.261c2.434-3.476 1.586-8.284-1.89-10.719-3.476-2.434-8.285-1.586-10.719 1.89-.336.48-.22 1.143.261 1.479l4.307 3.016-1.203 1.718a20.286 20.286 0 0 0-10.794-3.096 20.295 20.295 0 0 0-10.795 3.096L9.523 7.774l4.307-3.016c.48-.337.597-.998.26-1.479C11.658-.197 6.85-1.045 3.373 1.39-.104 3.823-.952 8.632 1.482 12.108a1.061 1.061 0 0 0 1.479.26l4.822-3.376 1.203 1.717c-4.79 3.739-7.875 9.564-7.875 16.097 0 7.105 3.65 13.372 9.171 17.028l-1.681 2.402a1.062 1.062 0 0 0 1.739 1.218l1.776-2.537a20.285 20.285 0 0 0 9.404 2.3c3.39 0 6.588-.832 9.404-2.3l1.776 2.537a1.06 1.06 0 1 0 1.739-1.218l-1.681-2.4c5.522-3.657 9.172-9.925 9.172-17.03 0-6.533-3.085-12.358-7.875-16.096zm-2.673-7.024a5.583 5.583 0 0 1 7.069-.557 5.582 5.582 0 0 1 1.894 6.833l-8.963-6.276zM2.696 9.962A5.582 5.582 0 0 1 4.59 3.13a5.584 5.584 0 0 1 7.07.557L2.696 9.962zm18.825 35.13c-10.084 0-18.287-8.202-18.287-18.286 0-10.083 8.203-18.286 18.287-18.286 10.083 0 18.286 8.203 18.286 18.286 0 10.083-8.203 18.287-18.286 18.287z"/><path d="M21.52 11.796c-8.276 0-15.01 6.734-15.01 15.01 0 8.277 6.734 15.01 15.01 15.01 8.277 0 15.01-6.733 15.01-15.01 0-8.276-6.733-15.01-15.01-15.01zm9.98 23.487l-.718-.718a1.062 1.062 0 0 0-1.501 1.502l.717.717a13.042 13.042 0 0 1-7.415 3.078v-1.02a1.062 1.062 0 0 0-2.123 0v1.02a13.043 13.043 0 0 1-7.415-3.078l.717-.717a1.062 1.062 0 1 0-1.501-1.502l-.718.718a13.042 13.042 0 0 1-3.077-7.415h1.02a1.062 1.062 0 1 0 0-2.124h-1.02a13.043 13.043 0 0 1 3.077-7.414l.718.717a1.059 1.059 0 0 0 1.501 0 1.062 1.062 0 0 0 0-1.502l-.717-.717a13.042 13.042 0 0 1 7.415-3.078v1.021a1.062 1.062 0 0 0 2.123 0v-1.02a13.042 13.042 0 0 1 7.415 3.077l-.717.717a1.062 1.062 0 0 0 1.501 1.502l.717-.717a13.043 13.043 0 0 1 3.078 7.414h-1.02a1.062 1.062 0 1 0 0 2.124h1.02a13.04 13.04 0 0 1-3.077 7.415z"/></g></svg>',
        fill: 'var(--ui-brand-color)',
      },
    },
    {
      title: '100+ experts who work in different industry fields ',
      id: '83cc85d7-1543-44f3-9926-6c8b20909dcd',
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M44.258 4.043a13.214 13.214 0 0 0-9.52-4.009c-3.556 0-6.9 1.385-9.415 3.9l-1.298 1.3-1.3-1.3a13.225 13.225 0 0 0-9.412-3.9c-3.556 0-6.9 1.385-9.414 3.9A13.225 13.225 0 0 0 0 13.347c0 3.556 1.385 6.9 3.9 9.414l16.638 16.638a4.915 4.915 0 0 0 3.486 1.442c1.262 0 2.525-.48 3.486-1.442L44.04 22.87c5.193-5.192 5.29-13.638.217-18.826zm-1.96 17.083l-16.531 16.53a2.466 2.466 0 0 1-3.486 0L5.642 21.018a10.776 10.776 0 0 1-3.177-7.67c0-2.898 1.128-5.622 3.177-7.67A10.778 10.778 0 0 1 13.313 2.5c2.897 0 5.62 1.128 7.67 3.178l1.3 1.3-1.99 1.992a1.232 1.232 0 0 0 1.743 1.742l5.03-5.034A10.778 10.778 0 0 1 34.737 2.5c2.943 0 5.698 1.16 7.758 3.267 4.134 4.227 4.046 11.118-.197 15.36z"/><path d="M43.715 12.788a9.001 9.001 0 0 0-6.555-8.112 1.232 1.232 0 1 0-.66 2.375 6.529 6.529 0 0 1 2.857 1.676 6.522 6.522 0 0 1 1.898 4.213 1.232 1.232 0 0 0 2.46-.152z"/></g></svg>',
        fill: 'var(--ui-brand-color)',
      },
    },
  ],
  title: 'Careers.',
  subtitle:
    'Do you want to join our company? Check the list of open vacancies or contact our HR director to get to know about open positions.',
  text:
    'Our company is always looking for professional and inspired people who are ready to work, according to our principles and standards. Look through the list of our advantages to see what you get by becoming a part of our team.',
  picture: {
    resourceRef: 'img-1.jpg',
    alt: 'Illustration',
  },
  'button-1': {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Additional button (M)',
  },
  topIcon: {
    svg: '<svg viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.93 6.067c.13 1.7.806.968.945 1.713.232 1.238 1.329 2.134 2.011 2.443.398.18.809.271 1.24.279h.009a3.085 3.085 0 0 0 1.24-.279c.682-.31 1.778-1.205 2.01-2.443.14-.745.816-.013.945-1.713 0-.677-.369-.846-.369-.846s.188-1.003.261-1.775C13.313 2.485 12.661 0 9.18 0l-.044.001h-.012L9.08 0C5.6 0 4.947 2.485 5.038 3.446c.074.772.261 1.775.261 1.775s-.369.169-.369.846zm12.095 8.347c-1.755-.893-4.3-2.009-4.422-2.048l-.003-.001a.684.684 0 0 0-.873.418l-.002-.001c-.454 1.092-1.286 3.038-1.803 3.977l-.124-2.632s.776-1.647.861-1.798c.2-.354.02-.655-.355-.655H8.007c-.375 0-.555.301-.355.655.085.151.86 1.798.86 1.798l-.124 2.632c-.516-.939-1.349-2.885-1.802-3.977h-.001a.684.684 0 0 0-.874-.417h-.004c-.122.04-2.666 1.156-4.422 2.049-.788.4-1.264.9-1.264 1.425v4.132H18.29v-4.132c0-.525-.476-1.024-1.265-1.425z"/></svg>',
    fill: 'currentColor',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Careers description',
    defaultValue: true,
  },
  {
    id: 'image',
    type: 'checkbox',
    label: 'Сareers photo',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Careers main text',
    defaultValue: true,
  },
  {
    id: 'icon',
    type: 'checkbox',
    label: 'Careers icon',
    defaultValue: true,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: true,
  },
  {
    id: 'top-icon',
    type: 'checkbox',
    label: 'Top icon decorator',
    defaultValue: true,
  },
]

export default ExtendedWireframe
