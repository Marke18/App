<template>

<b-list-group-item class="d-flex justify-content-between align-items-center">
  <b-row class="text-center" style="width:200%;">
    <b-col cols="12">

      <img src="../assets/bike_pubblica_normale.png" width="50" height="50" v-if="stationD.posto[n-1] === 'Bike pubblica normale'">
      <img src="../assets/bike_pubblica_elettrica.png" width="50" height="50" v-if="stationD.posto[n-1] === 'Bike pubblica elettrica'">
      <img src="../assets/ricarica_bike_privata.png" width="50" height="50" v-if="stationD.posto[n-1] === 'Ricarica bike privata'">
      <img src="../assets/ricarica_bike_pubblica.png" width="50" height="50" v-if="stationD.posto[n-1] === 'Ricarica bike pubblica o privata'">
      <img src="../assets/ricarica_auto.png" width="50" height="50" v-if="stationD.posto[n-1] === 'Ricarica veicolo elettrico'">

      <br>
      POSTO {{n}}<br>{{stationD.posto[n-1]}}<br>
    </b-col>
    <b-col cols="12">
      <img src="../assets/bike.jpg" width="50">
    </b-col>
    <b-col cols="12">
      {{stationD.stato[n-1]}}

      <img src="../assets/carica.png" width="20" v-if="stationD.stato[n-1] === 'Carica'">
      <img src="../assets/in_carica.png" width="20" v-if="stationD.stato[n-1] === 'In carica'">
      <img src="../assets/fuori_servizio.png" width="20" v-if="stationD.stato[n-1] === 'Fuori servizio'">
      <img src="../assets/prenotato.png" width="20" v-if="stationD.stato[n-1] === 'Prenotato'">

    </b-col>
  </b-row>
</b-list-group-item>

</template>

<script>

export default {
  name: 'PostoStato',
  props: ['stationD', 'n', 'style1']
}

</script>

<style>

</style>
