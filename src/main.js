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

// Menu
import NavbarAreaPubblica from './components/NavbarAreaPubblica.vue'
import NavbarAreaPrivata from './components/NavbarAreaPrivata.vue'

// Area Pubblica
import Home from './components/Home.vue'
import Registrati from './components/Registrati.vue'
import Accedi from './components/Accedi.vue'
import ElencoGestori from './components/ElencoGestori.vue'
import Manager from './components/ElencoGestori2.vue'

// Area Privata
import Profilo from './components/Profilo.vue'
import Credito from './components/Credito.vue'
import Statistiche from './components/Statistiche.vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// Menu
Vue.component('navbar-area-pubblica', NavbarAreaPubblica)
Vue.component('navbar-area-privata', NavbarAreaPrivata)

// Area Pubblica
Vue.component('home', Home)
Vue.component('registrati', Registrati)
Vue.component('accedi', Accedi)
Vue.component('elenco-gestori', ElencoGestori)
Vue.component('manager', Manager)

// Area Privata
Vue.component('profilo', Profilo)
Vue.component('credito', Credito)
Vue.component('statistiche', Statistiche)

/* eslint-disable no-new */
new Vue({
  el: '#footer',
  data: {
    link: 'www.ecospazio.eu Copyright 2019 Logiss Srl - Divisione Smart',
    Style: {
      height: '5px',
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      bottom: '1vh',
      textDecoration: 'underline',
      fontSize: '10px'
    }
  }
})

// eslint-disable-next-line
window.app = new Vue({
  el: '#app',
  data: {
    body: 'Home',
    user: 'abba',
    managers: [
      {nome: 'TUC', stazioni: 2, ricaricaBike: 2, ricaricaCar: 2},
      {nome: 'TUC2', stazioni: 22, ricaricaBike: 22, ricaricaCar: 22},
      {nome: 'TUC2', stazioni: 22, ricaricaBike: 22, ricaricaCar: 22},
      {nome: 'TUC2', stazioni: 22, ricaricaBike: 22, ricaricaCar: 22},
      {nome: 'TUC2', stazioni: 22, ricaricaBike: 22, ricaricaCar: 22}
    ]
  }
})
