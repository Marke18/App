<template>

<div class="home">
  <h2 class="text-center" style="margin-bottom: 10vh;">Dettaglio</h2>

  <b-container>
    <b-row>
      <b-col cols="6">ID Prenotazione:</b-col>
      <b-col>{{dettaglio.id_prenotazione}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Servizio:</b-col>
      <b-col>{{dettaglio.servizio}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Data:</b-col>
      <b-col>{{dettaglio.data}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Ora Inizio:</b-col>
      <b-col>{{dettaglio.oraIn}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Ora Fine:</b-col>
      <b-col>{{dettaglio.oraFin}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Prelievo:</b-col>
      <b-col>{{dettaglio.prelievo}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Consegna:</b-col>
      <b-col>{{dettaglio.consegna}}</b-col>
    </b-row>

    <b-row>
      <b-col cols="6">Costo:</b-col>
      <b-col>{{dettaglio.costo}}</b-col>
    </b-row>
  </b-container>

</div>

</template>

<script>

export default {
  name: 'DettaglioMovimento',
  props: ['dettaglio']
}

</script>

<style scoped>

</style>
