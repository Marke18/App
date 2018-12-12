<template>

<div class="home">
  <h2 class="text-center">Dettaglio</h2>

  <div style="margin-top:10vh;">
    <b-row>
      <b-col cols="6">ID Prenotazione:</b-col>
      <b-col>{{dettaglio.id_prenotazione}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Taglio:</b-col>
      <b-col>{{dettaglio.taglio}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Data:</b-col>
      <b-col>{{dettaglio.data}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Ora:</b-col>
      <b-col>{{dettaglio.ora}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Circuito:</b-col>
      <b-col>{{dettaglio.circuito}}</b-col>
    </b-row>
  </div>

</div>

</template>

<script>

export default {
  name: 'DettaglioRicarica',
  props: ['dettaglio']
}

</script>

<style scoped>

</style>
