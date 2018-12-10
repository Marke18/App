<template>

<div @click="Stazione()" style="margin: 2vh 0">
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="3">
        <br>
        <img src="../assets/home.jpg" width="40" height="40" alt="BV">
      </b-col>
      <b-col cols="7">
        <span>{{station.nomeST}} ({{station.ciclo}})<br></span>
        <span v-if="station.postiTot > 0">POSTI TOTALI <br></span>
        <span v-if="station.postiDisp > 0">POSTI DISPONIBILI <br></span>
        <span v-if="station.ebike > 0">E-BIKE DISPONIBIL <br></span>
      </b-col>
      <b-col cols="2">
        <br>
        <span v-if="station.postiTot > 0">N° {{station.postiTot}}<br></span>
        <span v-if="station.postiDisp > 0">N° {{station.postiDisp}}<br></span>
        <span v-if="station.ebike > 0">N° {{station.ebike}}<br></span>
      </b-col>
    </b-row>
  </b-container>
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
