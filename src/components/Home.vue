<template>

<div class="home">
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <div v-for="manager in managers" v-bind:key="manager.id">
      <l-marker :lat-lng="manager.coord" @click="Gestore(manager.nome)">
        <l-popup>

          <b-list-group>

            <b-list-group-item class="text-center" href="#" @click="DettaglioGestore()" active>
              <span>{{manager.nome}}</span>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="DettaglioGestore()" v-if="manager.stazioni > 0">
              <span>STAZIONI BIKE-SHARING</span>
              <b-badge variant="primary" pill>{{manager.stazioni}}</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="DettaglioGestore()" v-if="manager.ricaricaBike > 0">
              <span>RICARICA BIKE PRIVATE</span>
              <b-badge variant="primary" pill>{{manager.ricaricaBike}}</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="DettaglioGestore()" v-if="manager.ricaricaCar > 0">
              <span>RICARICA CAR PRIVATE</span>
              <b-badge variant="primary" pill>{{manager.ricaricaCar}}</b-badge>
            </b-list-group-item>

          </b-list-group>

        </l-popup>
      </l-marker>
    </div>
  </l-map>
</div>

</template>

<script>

import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'

export default {
  name: 'Home',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [45.584829, 10.441879]
    }
  },
  props: ['managers', 'nomeGestore', 'body'],
  methods: {
    Gestore (txt) {
      this.$emit('update:nomeGestore', txt)
    },
    DettaglioGestore () {
      this.$emit('update:body', 'ElencoStazioniIntero')
    }
  }
}

</script>

<style>

.leaflet-container a {
  color: #495057;
}

.leaflet-bottom {
	display: none;
}

</style>
