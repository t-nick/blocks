import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-pricing/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  leftBackground: {
    type: 'color',
    color: 'light-shade-color',
  },
  centerBackground: {
    type: 'color',
    color: 'light-shade-color',
  },
  rightBackground: {
    type: 'color',
    color: 'light-shade-color',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg_pricing.jpg',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="100%" height="100%"><path d="M15.9123711,8.69171134 L8.4814433,16.1226392 C8.39484536,16.2092371 8.3,16.2917113 8.20103093,16.3659381 C8.32474227,16.3989278 8.45257732,16.4154227 8.58453608,16.4154227 L15.5701031,16.4154227 C16.4154639,16.4154227 17.1041237,15.7267629 17.1041237,14.8814021 L17.1041237,8.63397938 C16.7742268,8.61336082 16.4360825,8.57212371 16.085567,8.50614433 C16.0319588,8.568 15.9742268,8.62985567 15.9123711,8.69171134 Z"></path><path d="M19.0546392,3.82573196 C19.042268,3.81336082 19.0298969,3.80098969 19.0175258,3.78861856 C18.328866,3.09995876 17.3268041,2.46490722 16.1886598,1.99068041 C15.9824742,1.90408247 15.7721649,1.82573196 15.5618557,1.75562887 L15.5618557,1.74325773 C15.5494845,0.831917526 14.8154639,0.0978969072 13.9041237,0.0855257732 L9.45051546,0.0195463918 C8.86082474,0.0112989691 8.29175258,0.242226804 7.87525773,0.658721649 L0.448453608,8.0937732 C-0.149484536,8.69171134 -0.149484536,9.66490722 0.448453608,10.2628454 L5.38865979,15.2030515 C5.98659794,15.8009897 6.95979381,15.8009897 7.55773196,15.2030515 L14.9927835,7.768 C15.2072165,7.55356701 15.3680412,7.30202062 15.4793814,7.02573196 C16.2257732,7.23604124 16.9515464,7.34738144 17.5907216,7.34325773 C19.1742268,7.33501031 19.6979381,6.6422268 19.871134,6.22985567 C20.0402062,5.81748454 20.1639175,4.95562887 19.0546392,3.82573196 Z M9.85463918,8.04428866 C9.6814433,8.13913402 9.50412371,8.2422268 9.32680412,8.33294845 C9.15773196,8.41954639 9.1,8.39892784 9.03814433,8.21748454 C8.91030928,7.85459794 8.70412371,7.54531959 8.41958763,7.28964948 C8.34536082,7.2236701 8.26701031,7.16181443 8.17216495,7.12470103 C7.83402062,6.99274227 7.5371134,7.21129897 7.57835052,7.57418557 C7.59896907,7.75562887 7.65670103,7.92882474 7.72680412,8.09789691 C7.84639175,8.39068041 7.9742268,8.68346392 8.06082474,8.98861856 C8.34123711,9.96181443 7.72268041,10.9185155 6.74536082,11.0133608 C6.39072165,11.0463505 6.05257732,10.9721237 5.74329897,10.7948041 C5.60721649,10.7164536 5.50412371,10.724701 5.40103093,10.8401649 C5.29793814,10.9515052 5.18247423,11.0545979 5.07525773,11.1618144 C4.98041237,11.2566598 4.87731959,11.2607835 4.78247423,11.1659381 C4.6628866,11.0545979 4.54742268,10.9350103 4.43195876,10.8195464 C4.33298969,10.7164536 4.34123711,10.6092371 4.44020619,10.510268 C4.5185567,10.4319175 4.59690722,10.3494433 4.67525773,10.2710928 C4.84845361,10.0937732 4.84845361,10.0814021 4.70824742,9.88758763 C4.52680412,9.64016495 4.36597938,9.38037113 4.26701031,9.08758763 C4.18865979,8.86078351 4.20927835,8.80305155 4.41546392,8.68758763 C4.56804124,8.60098969 4.72061856,8.51439175 4.87731959,8.43191753 C5.05876289,8.33707216 5.11237113,8.35769072 5.1742268,8.55150515 C5.27731959,8.88140206 5.44639175,9.17418557 5.65670103,9.44635052 C5.79278351,9.6236701 5.96185567,9.75562887 6.16804124,9.83810309 C6.5556701,9.99068041 6.91030928,9.71851546 6.86907216,9.30614433 C6.85670103,9.16593814 6.81546392,9.02985567 6.76185567,8.89789691 C6.62989691,8.55975258 6.46082474,8.23397938 6.3742268,7.87521649 C6.22989691,7.29789691 6.29587629,6.77006186 6.76185567,6.35769072 C7.28969072,5.89171134 7.87938144,5.86284536 8.50206186,6.15150515 C8.75773196,6.27109278 8.75773196,6.27521649 8.9556701,6.07727835 C9.02164948,6.01129897 9.08762887,5.94531959 9.15773196,5.87934021 C9.31030928,5.73501031 9.35979381,5.73501031 9.51237113,5.87934021 C9.55773196,5.92470103 9.60309278,5.97006186 9.64845361,6.01542268 C9.96185567,6.32882474 9.96185567,6.32882474 9.64845361,6.64635052 C9.4257732,6.86903093 9.4257732,6.86903093 9.61134021,7.12470103 C9.7556701,7.32263918 9.86701031,7.53294845 9.95360825,7.75975258 C9.99896907,7.88346392 9.9742268,7.97830928 9.85463918,8.04428866 Z M18.6752577,5.73501031 C18.5350515,6.06903093 17.0381443,6.36181443 14.7659794,5.41336082 C14.0979381,5.13707216 13.4793814,4.79068041 12.9721649,4.41954639 C12.9556701,4.44016495 12.9350515,4.46078351 12.9185567,4.48140206 C12.4237113,4.97624742 11.6154639,4.97624742 11.1206186,4.48140206 C10.6257732,3.9865567 10.6257732,3.17830928 11.1206186,2.68346392 C11.6154639,2.18861856 12.4237113,2.18861856 12.9185567,2.68346392 C13.2154639,2.98037113 13.3309278,3.38449485 13.2773196,3.768 C13.7639175,4.11439175 14.3494845,4.43191753 14.9721649,4.69171134 C15.1948454,4.78243299 15.4051546,4.86490722 15.6113402,4.93501031 L15.5865979,3.14531959 C15.6237113,3.16181443 15.656701,3.17418557 15.6938144,3.19068041 C16.6670103,3.59480412 17.5412371,4.14738144 18.1061856,4.7123299 C18.114433,4.72057732 18.1226804,4.72882474 18.1309278,4.73707216 C18.6670103,5.27727835 18.7206186,5.6236701 18.6752577,5.73501031 Z"></path></svg>',
    fill: 'brand-color',
  },
  'plan-icon-1': {
    ...Component.defaultContent['plan-icon-1'],
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.9 48"><path d="M39.9 42.7l-6.4-15.3c-.2-.4-.6-.6-1-.4s-.6.6-.4 1l5.7 13.9-5.2-1.5c-.3-.1-.7.1-.9.4l-2.6 4.8-6.2-14.9c7.1-1.4 12.5-7.6 12.5-15.2C35.5 6.9 28.5 0 20 0S4.6 6.9 4.6 15.4c0 3.4 1.1 6.6 3.1 9.2L.1 42.7c-.1.3 0 .6.2.8.2.2.5.3.8.2L7.2 42l3.1 5.6c.1.2.4.4.7.4.3 0 .6-.2.7-.5l5.9-14.3c.2-.4 0-.8-.4-1-.4-.2-.8 0-1 .4l-5.3 12.9-2.6-4.8c-.2-.3-.5-.5-.9-.4l-5.2 1.5L8.7 26c2.8 3 6.8 4.9 11.3 4.9.5 0 .9 0 1.4-.1l6.9 16.7c.1.3.4.5.7.5.3 0 .5-.2.7-.4l3.1-5.6 6.2 1.8c.3.1.6 0 .8-.2.1-.3.2-.6.1-.9zM6.1 15.4C6.1 7.8 12.4 1.5 20 1.5s13.9 6.2 13.9 13.9S27.7 29.3 20 29.3 6.1 23.1 6.1 15.4z"/><path d="M28.9 12.6c-.1-.3-.3-.5-.6-.5l-5.2-.9-2.4-4.6c-.1-.3-.4-.4-.7-.4-.3 0-.5.2-.7.4l-2.4 4.6-5.1.8c-.3 0-.5.2-.6.5s0 .6.2.8l3.7 3.7-.8 5.2c0 .3.1.6.3.7.2.2.5.2.8.1l4.7-2.3 4.7 2.3c.1.1.2.1.3.1.2 0 .3 0 .5-.1.2-.2.3-.5.3-.7l-.9-5.2 3.7-3.7c.2-.3.3-.6.2-.8zm-5.2 3.7c-.2.2-.2.4-.2.6l.6 4.1-3.7-1.8c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1L16 21l.6-4.1c0-.2 0-.5-.2-.6l-2.9-3 4.1-.7c.2 0 .4-.2.6-.4L20 8.6l1.9 3.7c.1.2.3.4.6.4l4.1.7-2.9 2.9z"/><path d="M31.6 16.2c-.4-.1-.8.2-.9.7-.7 5.4-5.3 9.4-10.7 9.4-6 0-10.8-4.9-10.8-10.8S14 4.6 20 4.6c5.4 0 10 4 10.7 9.4.1.4.4.7.9.7.4-.1.7-.4.7-.9C31.5 7.7 26.2 3.1 20 3.1c-6.8 0-12.4 5.5-12.4 12.4S13.2 27.8 20 27.8c6.2 0 11.5-4.6 12.3-10.7 0-.5-.3-.8-.7-.9z"/></svg>',
    fill: 'brand-color',
  },
  'plan-icon-2': {
    ...Component.defaultContent['plan-icon-2'],
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M24,15.0517627 C28.1497627,15.0517627 31.5258305,11.6756949 31.5258305,7.52583051 C31.5258305,3.3760678 28.1497627,0 24,0 C19.8502373,0 16.4741695,3.3760678 16.4741695,7.52583051 C16.4741695,11.6756949 19.8502373,15.0517627 24,15.0517627 Z M24,1.52542373 C27.3086441,1.52542373 30.0004068,4.21718644 30.0004068,7.52583051 C30.0004068,10.8344746 27.3086441,13.526339 24,13.526339 C20.6913559,13.526339 17.9995932,10.8344746 17.9995932,7.52583051 C17.9995932,4.21718644 20.6913559,1.52542373 24,1.52542373 Z"></path><path d="M24,18.1026102 C30.0825763,18.1026102 35.0768136,22.8507458 35.4704746,28.8353898 L17.8433898,28.8353898 C17.4221695,28.8353898 17.080678,29.1767797 17.080678,29.5981017 C17.080678,30.0194237 17.4221695,30.3608136 17.8433898,30.3608136 L36.2583051,30.3608136 C36.6795254,30.3608136 37.0210169,30.0194237 37.0210169,29.5981017 C37.0210169,22.418339 31.1798644,16.5771864 24,16.5771864 C16.8201356,16.5771864 10.9789831,22.418339 10.9789831,29.5981017 C10.9789831,30.0194237 11.3204746,30.3608136 11.7416949,30.3608136 L14.7925424,30.3608136 C15.2137627,30.3608136 15.5552542,30.0194237 15.5552542,29.5981017 C15.5552542,29.1767797 15.2137627,28.8353898 14.7925424,28.8353898 L12.5294237,28.8353898 C12.9231864,22.8507458 17.9175254,18.1026102 24,18.1026102 L24,18.1026102 Z"></path><path d="M14.3804746,38.4113898 L10.1964407,37.7091864 L8.23566102,33.9469831 C8.10427119,33.6948814 7.84362712,33.5367458 7.55928814,33.5367458 C7.27494915,33.5367458 7.01430508,33.6948814 6.88291525,33.9469831 L4.92213559,37.7091864 L0.738101695,38.4113898 C0.457728814,38.4584746 0.226779661,38.6574915 0.138915254,38.9278983 C0.0510508475,39.1982034 0.120915254,39.4950508 0.320033898,39.6978305 L3.29227119,42.7252881 L2.66715254,46.9215254 C2.62525424,47.2028136 2.74322034,47.4838983 2.97325424,47.6509831 C3.20308475,47.8181695 3.50705085,47.8433898 3.76149153,47.716678 L7.55918644,45.8254576 L11.3568814,47.716678 C11.4644746,47.7701695 11.5809153,47.7966102 11.6967458,47.7966102 C11.8550847,47.7966102 12.0124068,47.7473898 12.1451186,47.6508814 C12.3751525,47.4837966 12.4931186,47.2027119 12.4512203,46.9214237 L11.8261017,42.7251864 L14.798339,39.6977288 C14.9974576,39.4949492 15.067322,39.1981017 14.9794576,38.9277966 C14.8917966,38.6574915 14.6608475,38.4584746 14.3804746,38.4113898 L14.3804746,38.4113898 Z M10.4716271,41.9276949 C10.3041356,42.098339 10.2262373,42.3377288 10.2615254,42.5743729 L10.7269831,45.6987458 L7.89935593,44.2905763 C7.68528814,44.1838983 7.43349153,44.1838983 7.21932203,44.2905763 L4.39159322,45.6987458 L4.85705085,42.5743729 C4.89233898,42.3377288 4.81454237,42.0982373 4.64694915,41.9276949 L2.43386441,39.6735254 L5.54918644,39.1506102 C5.78511864,39.1109492 5.98881356,38.9629831 6.09935593,38.7508475 L7.55928814,35.9495593 L9.01922034,38.7508475 C9.12976271,38.9629831 9.33345763,39.1109492 9.56938983,39.1506102 L12.6847119,39.6735254 L10.4716271,41.9276949 L10.4716271,41.9276949 Z"></path><path d="M30.8211864,38.4113898 L26.6371525,37.7091864 L24.6763729,33.9469831 C24.5449831,33.6948814 24.284339,33.5367458 24,33.5367458 C23.715661,33.5367458 23.4550169,33.6948814 23.3236271,33.9469831 L21.3628475,37.7091864 L17.1788136,38.4113898 C16.8984407,38.4584746 16.6674915,38.6574915 16.5796271,38.9278983 C16.4917627,39.1982034 16.5616271,39.4950508 16.7607458,39.6978305 L19.7329831,42.7252881 L19.1079661,46.9215254 C19.0660678,47.2028136 19.1840339,47.4838983 19.4140678,47.6509831 C19.6438983,47.8181695 19.9478644,47.8433898 20.2023051,47.716678 L24,45.8254576 L27.7976949,47.716678 C27.9052881,47.7701695 28.0217288,47.7966102 28.1375593,47.7966102 C28.2958983,47.7966102 28.4532203,47.7473898 28.5859322,47.6508814 C28.8159661,47.4837966 28.9339322,47.2027119 28.8920339,46.9214237 L28.2670169,42.7251864 L31.2392542,39.6977288 C31.4383729,39.4949492 31.5082373,39.1981017 31.4203729,38.9277966 C31.3325085,38.6574915 31.1015593,38.4584746 30.8211864,38.4113898 L30.8211864,38.4113898 Z M26.912339,41.9276949 C26.7448475,42.098339 26.6669492,42.3377288 26.7022373,42.5743729 L27.1675932,45.6987458 L24.3399661,44.2905763 C24.2328814,44.2372881 24.1164407,44.2106441 24,44.2106441 C23.8835593,44.2106441 23.7670169,44.2372881 23.6600339,44.2905763 L20.8324068,45.6987458 L21.2977627,42.5743729 C21.3330508,42.3377288 21.2552542,42.0982373 21.087661,41.9276949 L18.8745763,39.6735254 L21.9898983,39.1506102 C22.2258305,39.1109492 22.4295254,38.9629831 22.5400678,38.7508475 L24,35.949661 L25.4599322,38.7509492 C25.5704746,38.9630847 25.7741695,39.1110508 26.0101017,39.1507119 L29.1254237,39.6736271 L26.912339,41.9276949 L26.912339,41.9276949 Z"></path><path d="M47.8609831,38.9278983 C47.7731186,38.6574915 47.5422712,38.4584746 47.2617966,38.4113898 L43.0777627,37.7091864 L41.1169831,33.9469831 C40.9855932,33.6948814 40.7249492,33.5367458 40.4406102,33.5367458 C40.1562712,33.5367458 39.8956271,33.6948814 39.7642373,33.9469831 L37.8034576,37.7091864 L33.6194237,38.4113898 C33.3390508,38.4584746 33.1081017,38.6574915 33.0202373,38.9278983 C32.9323729,39.1982034 33.0022373,39.4950508 33.2013559,39.6978305 L36.1735932,42.7252881 L35.5484746,46.9215254 C35.5065763,47.2028136 35.6245424,47.4838983 35.8545763,47.6509831 C36.0844068,47.8181695 36.3883729,47.8433898 36.6428136,47.716678 L40.4405085,45.8254576 L44.2382034,47.716678 C44.3457966,47.7701695 44.4622373,47.7966102 44.5780678,47.7966102 C44.7364068,47.7966102 44.8937288,47.7473898 45.0264407,47.6508814 C45.2564746,47.4837966 45.3744407,47.2027119 45.3325424,46.9214237 L44.7074237,42.7251864 L47.679661,39.6977288 C47.8789831,39.4950508 47.9488475,39.1982034 47.8609831,38.9278983 L47.8609831,38.9278983 Z M43.3530508,41.9276949 C43.1855593,42.098339 43.107661,42.3377288 43.1429492,42.5743729 L43.6084068,45.6987458 L40.780678,44.2905763 C40.6735932,44.2372881 40.5571525,44.2106441 40.4407119,44.2106441 C40.3241695,44.2106441 40.2077288,44.2372881 40.1007458,44.2905763 L37.2731186,45.6987458 L37.7385763,42.5743729 C37.7738644,42.3377288 37.6960678,42.0982373 37.5284746,41.9276949 L35.3153898,39.6735254 L38.4307119,39.1506102 C38.6666441,39.1109492 38.870339,38.9629831 38.9808814,38.7508475 L40.4408136,35.9495593 L41.9007458,38.7508475 C42.0112881,38.9629831 42.2149831,39.1109492 42.4509153,39.1506102 L45.5662373,39.6735254 L43.3530508,41.9276949 L43.3530508,41.9276949 Z"></path><path d="M24,10.9839661 C24.9997627,10.9839661 25.9509153,10.5495254 26.6094915,9.792 C26.8857966,9.47410169 26.8522373,8.99237288 26.534339,8.7159661 C26.216339,8.43955932 25.7346102,8.47322034 25.4583051,8.79111864 C25.089661,9.21528814 24.558,9.45854237 24,9.45854237 C23.442,9.45854237 22.9104407,9.21528814 22.5416949,8.79111864 C22.2652881,8.47322034 21.7835593,8.43966102 21.465661,8.7159661 C21.1477627,8.99237288 21.1141017,9.47410169 21.3905085,9.792 C22.0490847,10.5494237 23.0002373,10.9839661 24,10.9839661 L24,10.9839661 Z"></path></svg>',
    fill: 'light-accent-color',
  },
  'plan-icon-3': {
    ...Component.defaultContent['plan-icon-3'],
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M24,14.0425532 C18.5094128,14.0425532 14.0425532,18.5094128 14.0425532,24 C14.0425532,29.4905872 18.5094128,33.9574468 24,33.9574468 C29.4905872,33.9574468 33.9574468,29.4905872 33.9574468,24 C33.9574468,18.5094128 29.4905872,14.0425532 24,14.0425532 Z M32.3891745,23.2340426 L29.3467915,23.2340426 C29.2368,20.4264511 28.5259915,17.9769191 27.4454809,16.3140766 C30.1561532,17.5340936 32.1093447,20.1453957 32.3891745,23.2340426 L32.3891745,23.2340426 Z M23.2340426,15.7673872 L23.2340426,23.2340426 L20.1873702,23.2340426 C20.2744851,21.1870979 20.7093447,19.2952851 21.4353702,17.8431319 C21.9539745,16.8060255 22.5833872,16.0892936 23.2340426,15.7673872 Z M23.2340426,24.7659574 L23.2340426,32.2326128 C22.5833872,31.9107064 21.9539745,31.1940766 21.4353702,30.1568681 C20.7093447,28.704817 20.2744851,26.8129021 20.1873702,24.7659574 L23.2340426,24.7659574 Z M24.7659574,32.2326128 L24.7659574,24.7659574 L27.8126298,24.7659574 C27.7255149,26.8129021 27.2906553,28.7047149 26.5646298,30.1568681 C26.0460255,31.1939745 25.4166128,31.9107064 24.7659574,32.2326128 L24.7659574,32.2326128 Z M24.7659574,23.2340426 L24.7659574,15.7673872 C25.4166128,16.0892936 26.0460255,16.8059234 26.5646298,17.8431319 C27.2906553,19.295183 27.7255149,21.1870979 27.8126298,23.2340426 L24.7659574,23.2340426 L24.7659574,23.2340426 Z M20.5546213,16.3140766 C19.4740085,17.9769191 18.7632,20.4263489 18.6533106,23.2340426 L15.6109277,23.2340426 C15.8906553,20.1453957 17.8438468,17.5340936 20.5546213,16.3140766 Z M15.6108255,24.7659574 L18.6532085,24.7659574 C18.7632,27.5735489 19.4740085,30.0230809 20.5545191,31.6859234 C17.8438468,30.4659064 15.8906553,27.8546043 15.6108255,24.7659574 Z M27.4453787,31.6859234 C28.5259915,30.0230809 29.2368,27.5736511 29.3466894,24.7659574 L32.3890723,24.7659574 C32.1093447,27.8546043 30.1561532,30.4659064 27.4453787,31.6859234 L27.4453787,31.6859234 Z"></path><path d="M47.7409021,8.24956596 C47.5684085,8.09719149 47.3362723,8.03060426 47.1091404,8.06818723 C45.795983,8.28520851 44.4589277,8.39530213 43.1350468,8.39540426 C36.2220255,8.39560851 29.6222298,5.49732766 24.5515915,0.234587234 C24.407183,0.0846638298 24.2081362,0 24,0 C23.7918638,0 23.592817,0.0846638298 23.4484085,0.234485106 C18.3781787,5.49681702 11.778383,8.39509787 4.86485106,8.39540426 C3.54148085,8.39540426 2.20452766,8.28531064 0.890859574,8.06818723 C0.663829787,8.03070638 0.431693617,8.09729362 0.259097872,8.24956596 C0.0865021277,8.4018383 -0.00847659574,8.62386383 0.000612765957,8.85385532 C0.289634043,16.2129702 1.71012766,22.8451404 4.22257021,28.5663319 C6.24020426,33.1608511 8.96180426,37.1800851 12.3117957,40.5123064 C18.0346213,46.2050043 23.5488,47.8984851 23.7807319,47.9678298 C23.8523234,47.9891745 23.9261617,47.9998979 24,47.9998979 C24.0738383,47.9998979 24.1477787,47.9892766 24.2192681,47.9678298 C24.4512,47.8984851 29.9653787,46.2050043 35.6882043,40.5123064 C39.0380936,37.1800851 41.7596936,33.1608511 43.7774298,28.5663319 C46.2899745,22.8451404 47.710366,16.2129702 47.9993872,8.85385532 C48.0084766,8.62386383 47.9134979,8.40194043 47.7409021,8.24956596 Z M34.6690723,39.3653106 C29.8386383,44.1945191 25.0648851,46.0537532 23.9992851,46.4270298 C22.9387915,46.057634 18.216817,44.225566 13.3922043,39.426383 C8.42951489,34.4897362 2.40337021,25.3507404 1.57388936,9.71642553 C2.66716596,9.85654468 3.77045106,9.92731915 4.86495319,9.92731915 C8.5403234,9.92721702 12.1437957,9.15278298 15.5753872,7.62556596 C18.6871149,6.24061277 21.5178894,4.30141277 24.0001021,1.85535319 C26.4825191,4.30171915 29.3131915,6.2411234 32.4247149,7.62587234 C35.8562043,9.15308936 39.4596766,9.92742128 43.1352511,9.92731915 C44.2300596,9.92731915 45.3332426,9.85644255 46.4262128,9.71642553 C45.5995915,25.3052936 39.6053106,34.4302979 34.6690723,39.3653106 Z"></path><path d="M24.4841872,5.71761702 C24.2023149,5.48772766 23.7976851,5.48772766 23.5159149,5.71761702 C18.1846468,10.0661106 11.8470128,12.404017 5.18808511,12.4786723 C4.97116596,12.4811234 4.76558298,12.5752851 4.62209362,12.7379745 C4.47860426,12.9006638 4.41089362,13.1164596 4.43560851,13.3319489 C4.99526809,18.2076255 6.13971064,22.6830638 7.83717447,26.6341787 C9.59775319,30.7323574 11.9668085,34.3206128 14.8785702,37.299166 C18.3958468,40.8971234 21.9083234,42.7614638 23.6891234,43.5524426 C23.7880851,43.5964596 23.8940936,43.618417 24.0001021,43.618417 C24.1061106,43.618417 24.2121191,43.5964596 24.3110809,43.5524426 C25.8264511,42.8793191 28.8399319,41.3140085 31.9954723,38.3938723 C32.3060426,38.1065872 32.3247319,37.6218894 32.0374468,37.3114213 C31.7501617,37.0008511 31.265566,36.9821617 30.9549957,37.2694468 C28.1652766,39.8510298 25.5054638,41.3106383 23.9998979,42.0110298 C22.2426894,41.1943149 19.1176851,39.4441532 15.9739915,36.2282553 C13.1945872,33.3850213 10.930417,29.953634 9.24459574,26.0293787 C7.70267234,22.4402043 6.63237447,18.3931915 6.05933617,13.9889362 C12.5556766,13.7361702 18.7293957,11.432783 24,7.2923234 C29.2710128,11.4330894 35.4446298,13.7366809 41.9406638,13.9891404 C41.3676255,18.3933957 40.2973277,22.4404085 38.7554043,26.029583 C37.2829277,29.4572936 35.3617021,32.5203064 33.0450383,35.1337532 C32.7643915,35.4503489 32.7936,35.934434 33.1100936,36.2149787 C33.4266894,36.4956255 33.9107745,36.466417 34.1913191,36.1499234 C36.6166468,33.4139234 38.6257021,30.2124255 40.1629277,26.6342809 C41.8603915,22.683166 43.0047319,18.2076255 43.5644936,13.3320511 C43.5892085,13.1165617 43.5214979,12.900766 43.3780085,12.7380766 C43.2345191,12.5753872 43.0289362,12.4811234 42.812017,12.4787745 C36.1534979,12.4045277 29.8158638,10.0666213 24.4841872,5.71761702 L24.4841872,5.71761702 Z"></path></svg>',
    fill: 'dark-accent-color',
  },
  'plan-price-text-1': {
    ...Component.defaultContent['plan-price-text-1'],
    content: 'FOR ALL PERIOD',
  },
  'plan-price-text-2': {
    ...Component.defaultContent['plan-price-text-2'],
    content: 'PER MONTH',
  },
  'plan-price-text-3': {
    ...Component.defaultContent['plan-price-text-3'],
    content: 'PER MONTH',
  },
  'plan-cta-1': {
    ...Component.defaultContent['plan-cta-1'],
    type: 'primary',
    size: 'lg',
  },
  'plan-cta-2': {
    ...Component.defaultContent['plan-cta-2'],
    type: 'primary',
    size: 'lg',
  },
  'plan-cta-3': {
    ...Component.defaultContent['plan-cta-3'],
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-btn': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  'plan-additional-info': {
    defaultValue: true,
    label: 'Product additional information',
    type: 'checkbox',
  },
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}


export default ExtendedWireframe
