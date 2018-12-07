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
import ElencoStazioni from './components/ElencoStazioni.vue'
import Station from './components/ElencoStazioni2.vue'

// Area Privata
import Profilo from './components/Profilo.vue'
import Credito from './components/Credito.vue'
import Statistiche from './components/Statistiche.vue'
import Movement from './components/Movimenti(Statistiche).vue'
import Recharge from './components/Ricariche(Statistiche).vue'

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
Vue.component('elenco-stazioni', ElencoStazioni)
Vue.component('station', Station)

// Area Privata
Vue.component('profilo', Profilo)
Vue.component('credito', Credito)
Vue.component('statistiche', Statistiche)
Vue.component('movement', Movement)
Vue.component('recharge', Recharge)

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
    user: '',
    account: {
      nome: 'asdasdad',
      cognome: 'dasdasd',
      dataNascita: 'dasdasdasd',
      luogoNascita: 'dsadsa',
      nazionalita: 'ita',
      cf: 'dasdasdas',
      tipoDoc: 'PayPal',
      nDoc: 'dasdasdas',
      indResidenza: 'asdasdasd',
      cell: '312312312',
      email: 'lollo@i.i',
      gestore: 'Gestore1',
      contratto: 'Contratto1',
      username: 'abba',
      password: 'asdasda',
      credito: 10
    },
    nomeGestore: '',
    managers: [
      {nome: 'TUC', stazioni: 2, ricaricaBike: 2, ricaricaCar: 2},
      {nome: 'TUC2', stazioni: 22, ricaricaBike: 22, ricaricaCar: 22}
    ],
    stations: [
      [
        {nomeG: 'TUC', nomeST: 'abba', ciclo: 'as', via: 'ds', postiTot: 2, postiDisp: 1, ebike: 2},
        {nomeG: 'TUC', nomeST: 'assa', ciclo: 'sa', via: 'sa', postiTot: 3, postiDisp: 0, ebike: 3}
      ],
      [
        {nomeG: 'TUC2', nomeST: 'abba2', ciclo: 'as', via: 'ds', postiTot: 2, postiDisp: 1, ebike: 2},
        {nomeG: 'TUC2', nomeST: 'assa2', ciclo: 'sa', via: 'sa', postiTot: 3, postiDisp: 0, ebike: 3}
      ]
    ],
    movements: [
      {servizio: 'a', id_prenotazione: 'a', data: 'a', oraIn: 'a', oraFin: 'a', prelievo: 'a', consegna: 'a', costo: 'a'},
      {servizio: 'a', id_prenotazione: 'a', data: 'a', oraIn: 'a', oraFin: 'a', prelievo: 'a', consegna: 'a', costo: 'b'}
    ],
    recharges: [
      {id_prenotazione: 'a', taglio: 'a', data: 'a', ora: '12:00', circuito: 'a'},
      {id_prenotazione: 'a', taglio: 'a', data: 'a', ora: '12:00', circuito: 'c'}
    ]
  },
  computed: {
    indiceStazione () {
      var i
      for (i = 0; i < this.stations.length; i++) {
        if (this.nomeGestore === this.stations[i][0].nomeG) {
          this.body = 'ElencoStazioni'
          return i
        }
      }
    }
  }
})
