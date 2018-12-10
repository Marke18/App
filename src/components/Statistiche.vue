<template>

<div class="home" style="margin:0 5%;width:90%;">
  <p class="tit">Movimenti effettuati</p>
  <div style="border:2px solid black;margin-bottom:5px;width:100%;height:5vh;overflow: scroll;">
    <b-container class="bv-example-row text-center" style="width:100%;font-size: 10px;font-weight: bold;">
        <b-row>
            <b-col>Servizio</b-col>
            <b-col>ID pren</b-col>
            <b-col>Data</b-col>
            <b-col>Ora inizio</b-col>
            <b-col>Ora fine</b-col>
            <b-col>Prelievo</b-col>
            <b-col>Consegna</b-col>
            <b-col>Costo</b-col>
        </b-row>
    </b-container>
  </div>

  <div style="border:2px solid black;overflow: scroll;width:100%;height:18vh;">
    <movement v-for="movement in movements" :movement="movement" v-bind:key="movement.id" ></movement>
  </div>

  <p class="tit">Ricariche effettuate</p>
  <div style="border:2px solid black;margin-bottom:5px;width:100%;height:5vh;overflow: scroll;">
    <b-container class="bv-example-row text-center" style="width:100%;font-size: 10px;font-weight: bold;">
        <b-row>
            <b-col>ID pren</b-col>
            <b-col>Taglio</b-col>
            <b-col>Data</b-col>
            <b-col>Ora</b-col>
            <b-col>Circuito</b-col>
        </b-row>
    </b-container>
  </div>

  <div style="border:2px solid black;overflow: scroll;width:100%;height:18vh;margin-bottom:2vh;">
    <recharge v-for="recharge in recharges" :recharge="recharge" v-bind:key="recharge.id" ></recharge>
  </div>

</div>

</template>

<script>

export default {
  name: 'Statistiche',
  props: ['movements', 'recharges']
}

</script>

<style scoped>

.tit {
  margin: 5vh 0 3vh 0;
  font-weight: bold;
}

</style>
