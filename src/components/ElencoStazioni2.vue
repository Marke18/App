<template>

<div style="margin: 2vh 5%;">
  <b-list-group>

    <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="Stazione()" active>
      <span>{{station.nomeST}} ({{station.ciclo}})</span>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="Stazione()" v-if="station.postiTot > 0">
      <span>POSTI TOTALI</span>
      <b-badge variant="primary" pill>{{station.postiTot}}</b-badge>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="Stazione()" v-if="station.postiDisp > 0">
      <span>POSTI DISPONIBILI</span>
      <b-badge variant="primary" pill>{{station.postiDisp}}</b-badge>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="Stazione()" v-if="station.ebike > 0">
      <span>E-BIKE DISPONIBILI</span>
      <b-badge variant="primary" pill>{{station.ebike}}</b-badge>
    </b-list-group-item>

  </b-list-group>
</div>

</template>

<script>

export default {
  name: 'Station',
  props: ['station'],
  methods: {
    Stazione () {
      window.app.stationD = this.station
      window.app.body = 'Dettaglio'
    }
  }
}

</script>

<style scoped>

span {
  font-size: 12px;
}

</style>
