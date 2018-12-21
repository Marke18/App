// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// eslint-disable-next-line
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Swipe, SwipeItem } from 'vue-swipe'
import { Slide } from 'vue-burger-menu'
import { L } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

// Menu
import Navbar from './components/Navbar.vue'

// Area Pubblica
import Home from './components/Home.vue'
import Registrati from './components/Registrati.vue'
import Accedi from './components/Accedi.vue'
import Recupera from './components/Recupera.vue'
import ElencoGestori from './components/ElencoGestori.vue'
import Manager from './components/ElencoGestori2.vue'
import ElencoStazioni from './components/ElencoStazioni.vue'
import Station from './components/ElencoStazioni2.vue'
import Dettaglio from './components/Dettaglio.vue'
import PostoStato from './components/PostoStato.vue'

// Area Privata
import Profilo from './components/Profilo.vue'
import Credito from './components/Credito.vue'
import Statistiche from './components/Statistiche.vue'
import Movement from './components/Movimenti(Statistiche).vue'
import Recharge from './components/Ricariche(Statistiche).vue'
import ElencoStazioniIntero from './components/ElencoStazioniIntero.vue'
import DettaglioRicarica from './components/DettaglioRicarica.vue'
import DettaglioMovimento from './components/DettaglioMovimento.vue'

require('vue-swipe/dist/vue-swipe.css')

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)
Vue.component('slide', Slide)

// Menu
Vue.component('navbar', Navbar)

// Area Pubblica
Vue.component('home', Home)
Vue.component('registrati', Registrati)
Vue.component('accedi', Accedi)
Vue.component('recupera', Recupera)
Vue.component('elenco-gestori', ElencoGestori)
Vue.component('manager', Manager)
Vue.component('elenco-stazioni', ElencoStazioni)
Vue.component('station', Station)
Vue.component('dettaglio', Dettaglio)
Vue.component('posto-stato', PostoStato)

// Area Privata
Vue.component('profilo', Profilo)
Vue.component('credito', Credito)
Vue.component('statistiche', Statistiche)
Vue.component('movement', Movement)
Vue.component('recharge', Recharge)
Vue.component('elenco-stazioni-intero', ElencoStazioniIntero)
Vue.component('dettaglio-ricarica', DettaglioRicarica)
Vue.component('dettaglio-movimento', DettaglioMovimento)

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#footer',
  data: {
    link: 'www.ecospazio.eu Copyright 2019 Logiss Srl - Divisione Smart',
    Style: {
      width: '100%',
      textAlign: 'center',
      position: 'fixed',
      bottom: '0',
      textDecoration: 'underline',
      fontSize: '9px',
      backgroundColor: '#007bff',
      color: '#FFFFFF',
      margin: '0',
      padding: '2px',
      zIndex: '401'
    }
  }
})

const axios = require('axios')

// eslint-disable-next-line
window.app = new Vue({
  el: '#app',
  data () {
    axios.get('http://0.0.0.0:3000/account.json')
      .then((response) => {
        this.account = Object.assign({}, this.account, response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    axios.get('http://0.0.0.0:3000/managers.json')
      .then((response) => {
        this.managers = Object.assign({}, this.managers, response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    axios.get('http://0.0.0.0:3000/movements.json')
      .then((response) => {
        this.movements = Object.assign({}, this.movements, response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    axios.get('http://0.0.0.0:3000/recharges.json')
      .then((response) => {
        this.recharges = Object.assign({}, this.recharges, response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    axios.get('http://0.0.0.0:3000/stations.json')
      .then((response) => {
        this.stations = Object.assign({}, this.stations, response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    return {
      body: 'Home',
      user: '',
      account: {},
      codiceColonna: '1234567890',
      nomeGestore: '',
      dettaglioR: {},
      dettaglioM: {},
      stationD: {},
      managers: [],
      stations: [],
      movements: [],
      recharges: []
    }
  },
  computed: {
    indiceStazione () {
      var i
      for (i = 0; i < this.stations.length; i++) {
        if (this.nomeGestore === this.stations[i][0].nomeG) {
          return i
        }
      }
    }
  }
})
