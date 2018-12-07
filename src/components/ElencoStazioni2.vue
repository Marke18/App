<template>

<div>
  <div @click="Stazione()">
    <div style="width:25%;float:left;margin: 2vh 0">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" style="margin-top:50%;" alt="BV">
    </div>
    <div style="width:60%;float:left;margin: 2vh 0">
      <span>{{station.nomeST}} ({{station.ciclo}})<br></span>
      <span v-if="station.postiTot > 0">POSTI TOTALI <br></span>
      <span v-if="station.postiDisp > 0">POSTI DISPONIBILI <br></span>
      <span v-if="station.ebike > 0">E-BIKE DISPONIBILI <br></span>
    </div>
    <div style="width:15%;float:left;margin: 2vh 0">
      <br>
      <span v-if="station.postiTot > 0">{{station.postiTot}}<br></span>
      <span v-if="station.postiDisp > 0">{{station.postiDisp}}<br></span>
      <span v-if="station.ebike > 0">{{station.ebike}}<br></span>
    </div>
  </div>
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
