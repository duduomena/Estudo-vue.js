import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      description: 'A pair of warm fuzzy socks',
      image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
      link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
      inventory: 0,
      onSale: false,
      details: ["80% cotton","20% poliester", "Gender-neural"],
      variants:
     [
       { 
        variantId:2234,
        variantColor: "green"
       },
       { variantId:2235,
        variantColor: "blue"
        }
      ],
      sizes: ["P","M","G","GG","XGG"],
      cart: 0,
    } 
  })
  
