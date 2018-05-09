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
      id: '18ce5632-46d1-4c9e-b249-ca0e37f665c2',
      title: {
        content: '4578',
        type: 'heading',
      },
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 52 65' style='enable-background:new 0 0 52 52;' xml:space='preserve'><style type='text/css'>.st0{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g><g><g><path d='M50,31.2358398H28.9941406c-0.2763672,0-0.5-0.2236328-0.5-0.5s0.2236328-0.5,0.5-0.5h20.4960938     c-0.2636719-6.6044922-5.7177734-11.8955078-12.3857422-11.8955078c-3.4257813,0-6.7265625,1.4360352-9.0556641,3.9399414     l-0.7294922-0.684082l0.0097656-0.0097656c2.5058594-2.6938477,6.0732422-4.2460938,9.7753906-4.2460938     C44.4912109,17.340332,50.5,23.3496094,50.5,30.7358398C50.5,31.012207,50.2763672,31.2358398,50,31.2358398z'/></g><g><path d='M37.1064453,18.3432617c-0.90625,0-1.7939453-0.2773438-2.640625-0.8237305     c-0.6376953-0.4052734-1.2363281-0.9599609-1.7285156-1.6025391c-1.1376953-1.4482422-1.7978516-3.2866211-1.7978516-4.9492188     c0-3.4008789,2.7666016-6.1679688,6.1669922-6.1679688c3.3945313,0,6.15625,2.7670898,6.15625,6.1679688     C43.2626953,14.3085938,40.5166016,18.3432617,37.1064453,18.3432617z M37.1064453,5.7998047     c-2.8486328,0-5.1669922,2.3183594-5.1669922,5.1679688c0,1.4472656,0.5810547,3.0556641,1.5546875,4.3032227     c0.4589844,0.5883789,0.9677734,1.0615234,1.5107422,1.4067383c0.6855469,0.4423828,1.3916016,0.6655273,2.1015625,0.6655273     c2.7773438,0,5.15625-3.5053711,5.15625-6.3754883C42.2626953,8.1181641,39.9492188,5.7998047,37.1064453,5.7998047z'/></g></g><g><g><path d='M38.4355469,47.2001953H2c-0.2763672,0-0.5-0.2236328-0.5-0.5c0-10.3208008,8.3964844-18.7177734,18.7177734-18.7177734     s18.7177734,8.3969727,18.7177734,18.7177734C38.9355469,46.9765625,38.7119141,47.2001953,38.4355469,47.2001953z      M2.5068359,46.2001953h35.421875c-0.265625-9.5395508-8.1083984-17.2177734-17.7109375-17.2177734     S2.7724609,36.6606445,2.5068359,46.2001953z'/></g><g><path d='M20.2207031,28.9882813c-4.7119141,0-8.5068359-5.5874023-8.5068359-10.2138672     c0-4.690918,3.8164063-8.5073242,8.5068359-8.5073242c4.6914063,0,8.5078125,3.8164063,8.5078125,8.5073242     c0,2.28125-0.9160156,4.8305664-2.4511719,6.8198242c-0.0136719,0.0175781-0.078125,0.0834961-0.09375,0.0991211     c-0.6962891,0.894043-1.5078125,1.6401367-2.3701172,2.1704102     C22.6601563,28.6079102,21.4482422,28.9882813,20.2207031,28.9882813z M20.2207031,11.2670898     c-4.1396484,0-7.5068359,3.3676758-7.5068359,7.5073242c0,4.1733398,3.3486328,9.2138672,7.5068359,9.2138672     c1.0322266,0,2.0615234-0.3266602,3.0605469-0.9707031c0.7695313-0.4736328,1.4931641-1.140625,2.1572266-1.9882813     c0.0126953-0.0166016,0.0771484-0.081543,0.0917969-0.0961914c1.3603516-1.7700195,2.1982422-4.0908203,2.1982422-6.1586914     C27.7285156,14.6347656,24.3603516,11.2670898,20.2207031,11.2670898z'/></g></g></g></svg>",
        fill: 'var(--ui-brand-color)',
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
        content: 'Our Clients',
        type: 'text',
      },
    },
    {
      id: '7986b4e0-751f-48f6-8861-5ace080e284b',
      title: {
        content: '5527',
        type: 'heading',
      },
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'><g><g><path fill='#000000' d='M23.5,40.5c-6,0-10.9-4.9-10.9-11c0-6.1,4.9-11,10.9-11c6,0,10.9,4.9,10.9,11    C34.4,35.6,29.5,40.5,23.5,40.5z M23.5,20.7c-4.8,0-8.7,3.9-8.7,8.8c0,4.8,3.9,8.8,8.7,8.8c4.8,0,8.7-3.9,8.7-8.8    C32.2,24.7,28.3,20.7,23.5,20.7z'/><path fill='#000000' d='M41.6,58H5.4l0.3-1.4c1.9-8.3,9.3-14.2,17.8-14.2s15.8,5.8,17.8,14.2L41.6,58z M8.2,55.8    h30.5c-2.2-6.6-8.2-11.1-15.3-11.1S10.3,49.2,8.2,55.8z'/></g><g><path fill='#000000' d='M77.3,64.5c-6,0-10.9-4.9-10.9-11s4.9-11,10.9-11c6,0,10.9,4.9,10.9,11    S83.3,64.5,77.3,64.5z M77.3,44.7c-4.8,0-8.7,3.9-8.7,8.8s3.9,8.8,8.7,8.8c4.8,0,8.7-3.9,8.7-8.8S82.1,44.7,77.3,44.7z'/><path fill='#000000' d='M95.4,82H59.2l0.3-1.4c1.9-8.3,9.3-14.2,17.8-14.2c8.5,0,15.8,5.8,17.8,14.2L95.4,82z     M62,79.7h30.5c-2.2-6.6-8.2-11.1-15.3-11.1C70.2,68.7,64.2,73.2,62,79.7z'/></g><g><path fill='#000000' d='M81,36.2c-5.3-11.4-16.7-19.3-30-19.3c-3.8,0-7.6,0.7-11.1,1.9l0.7,2.1    c3.3-1.2,6.8-1.8,10.4-1.8c12,0,22.4,6.9,27.6,17c0.4,0.7,0.7,1.5,1,2.2h2.4C81.6,37.6,81.3,36.9,81,36.2z'/><path fill='#000000' d='M49.8,81.3c-10.4-0.4-20.1-6.1-25.5-15.2l-1.9,1.1c5.8,9.7,16.2,15.9,27.4,16.3    c0.4,0,0.7,0,1.1,0c0.4,0,0.7,0,1.1,0v-2.2c-0.4,0-0.7,0-1.1,0C50.6,81.3,50.2,81.3,49.8,81.3z'/></g></g></svg>",
        fill: 'var(--ui-brand-color)',
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
        content: 'Our Partners',
        type: 'text',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
}

export default ExtendedWireframe
