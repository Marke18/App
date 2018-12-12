<template>

<div class="home">
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <div v-for="manager in managers" v-if="nomeGestore === ''">
      <l-marker :lat-lng="manager.coord" @click="MappaGestore(manager.nome)"></l-marker>
    </div>
    <div v-for="station in stations" v-else>
      <l-marker :lat-lng="station.coord" @click="Dettaglio(station)"></l-marker>
    </div>
  </l-map>
</div>

</template>

<script>

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'Home',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [45.584829, 10.441879]
    }
  },
  props: ['managers', 'nomeGestore', 'stations', 'body', 'stationD'],
  methods: {
    MappaGestore (txt) {
      this.$emit('update:nomeGestore', txt)
    },
    Dettaglio (txt) {
      this.$emit('update:stationD', txt)
      this.$emit('update:body', 'DettaglioMappa')
    }
  }
}

</script>

<style>
/*
.leaflet-left {
	right: 0;
  left: auto;
}

.leaflet-left .leaflet-control {
	margin-right: 10px;
  margin-left: auto;
}
*/
</style>
