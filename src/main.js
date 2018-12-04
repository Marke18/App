// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// eslint-disable-next-line
import App from './App'
// eslint-disable-next-line
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import NavbarAreaPubblica from './components/NavbarAreaPubblica.vue'
import NavbarAreaPrivata from './components/NavbarAreaPrivata.vue'
import Home from './components/Home.vue'
import Registrati from './components/Registrati.vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('navbar-area-pubblica', NavbarAreaPubblica)
Vue.component('navbar-area-privata', NavbarAreaPrivata)
Vue.component('home', Home)
Vue.component('registrati', Registrati)

/* eslint-disable no-new */

new Vue({
  el: '#footer',
  data: {
    link: 'https://www.unitisperlasca.eu/',
    Style: {
      height: '1.5vh',
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      bottom: '1vh',
      textDecoration: 'underline'
    }
  }
})

// eslint-disable-next-line
window.app = new Vue({
  el: '#app',
  data: {
    navbar: 'Pubblica',
    body: 'Home',
    user: ''
  }
})
