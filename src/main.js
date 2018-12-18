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

// eslint-disable-next-line
window.app = new Vue({
  el: '#app',
  data: {
    body: 'Home',
    user: '',
    account: {
      nome: 'Filippo',
      cognome: 'Luzzi',
      dataNascita: 'XX/XX/XXXX',
      luogoNascita: 'Rovereto',
      nazionalita: 'Italiana',
      cf: 'XXXXXXXXXXXXXXXX',
      tipoDoc: "Carta d'identità",
      nDoc: 'XX XXXXXXX',
      indResidenza: 'Rovereto',
      cell: 'XXX XXXXXXX',
      email: 'nome.cognome@gmail.com',
      gestore: 'Gestore1',
      contratto: 'Contratto1',
      username: 'Luzzi01',
      password: 'lollo87',
      credito: 10
    },
    codiceColonna: '1234567890',
    nomeGestore: '',
    dettaglioR: {},
    dettaglioM: {},
    stationD: {
      nomeG: '',
      nomeST: '',
      ciclo: '',
      via: '',
      postiTot: 0,
      postiDisp: 0,
      ebike: 0
    },
    managers: [
      {nome: 'Comunità Val di Sole', stazioni: 4, ricaricaBike: 0, ricaricaCar: 0, coord: [45.584829, 10.441879]},
      {nome: 'Comune di Riva del Garda', stazioni: 6, ricaricaBike: 0, ricaricaCar: 6, coord: [45.68724, 10.449841]}
    ],
    stations: [
      [
        {
          nomeG: 'Comunità Val di Sole',
          nomeST: 'Molè',
          ciclo: 'IN LINEA',
          via: 'Via 4 Novembre',
          postiTot: 8,
          postiDisp: 6,
          ebike: 2,
          preseAuto: 0,
          posto: ['Bike pubblica elettrica', 'Bike pubblica elettrica'],
          stato: ['Carica', 'Carica']
        },
        {
          nomeG: 'Comunità Val di Sole',
          nomeST: 'Mezzana',
          ciclo: 'In Linea',
          via: 'Via per Marileva',
          postiTot: 8,
          postiDisp: 5,
          ebike: 2,
          preseAuto: 0,
          posto: ['Bike pubblica normale', 'Bike pubblica elettrica'],
          stato: ['Non elettrica', 'Fuori servizio']
        }
      ],
      [
        {
          nomeG: 'Comune di Riva del Garda',
          nomeST: 'Pingu',
          ciclo: 'In Linea',
          via: 'Via per Marileva',
          postiTot: 8,
          postiDisp: 6,
          ebike: 2,
          preseAuto: 0,
          posto: ['Bike pubblica normale', 'Bike pubblica elettrica', 'Ricarica bike privata', 'Ricarica bike pubblica o privata', 'Ricarica veicolo elettrico'],
          stato: ['Non elettrica', 'Carica', 'In carica', 'Fuori servizio', 'Prenotato']
        },
        {
          nomeG: 'Comune di Riva del Garda',
          nomeST: 'Lollo',
          ciclo: 'In Linea',
          via: 'Via per Marileva',
          postiTot: 8,
          postiDisp: 6,
          ebike: 2,
          preseAuto: 0,
          posto: ['Bike pubblica normale', 'Bike pubblica elettrica', 'Ricarica bike privata', 'Ricarica bike pubblica o privata', 'Ricarica veicolo elettrico'],
          stato: ['Non elettrica', 'Carica', 'In carica', 'Fuori servizio', 'Prenotato']
        }
      ]
    ],
    movements: [
      {servizio: 'ebike', id_prenotazione: '462346256', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '623462346', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '543345455', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '523456234', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '432613461', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '513466775', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '234234324', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '243242344', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '432423422', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '654856834', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '534534778', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'},
      {servizio: 'ebike', id_prenotazione: '527634738', data: 'XX/XX/XXXX', oraIn: '12:00', oraFin: '16:00', prelievo: '12:15', consegna: '15:45', costo: '15'}
    ],
    recharges: [
      {id_prenotazione: '527634738', taglio: '20', data: 'XX/XX/XXXX', ora: '12:00', circuito: 'Comunità Val di Sole'},
      {id_prenotazione: '342363477', taglio: '30', data: 'XX/XX/XXXX', ora: '12:00', circuito: 'Comunità Val di Sole'}
    ]
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
