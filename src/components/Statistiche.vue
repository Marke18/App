<template>

<div class="home" style="margin-left:5%;width:90%;">
  <p class="tit">Movimenti effettuati</p>
  <div style="border:2px solid black;margin-bottom:5px;width:95%;height:5vh;">
    <span class="span1">Servizio</span>
    <span class="span1">ID prenotazione</span>
    <span class="span1">Data</span>
    <span class="span1">Ora inizio</span>
    <span class="span1">Ora fine</span>
    <span class="span1">Prelievo</span>
    <span class="span1">Consegna</span>
    <span class="span1">Costo</span>
  </div>

  <div style="border:2px solid black;overflow: scroll;width:95%;height:18vh;">
    <movement v-for="movement in movements" :movement="movement" v-bind:key="movement.id" ></movement>
  </div>

  <p class="tit">Ricariche effettuate</p>
  <div style="border:2px solid black;margin-bottom:5px;width:95%;height:5vh;">
    <span class="span2">ID prenotazione</span>
    <span class="span2">Taglio</span>
    <span class="span2">Data</span>
    <span class="span2">Ora</span>
    <span class="span2">Circuito</span>
  </div>

  <div style="border:2px solid black;overflow: scroll;width:95%;height:18vh;">
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

.input {
  width: 80%;
  margin: 1vh 10%;
  min-height: 40px;
  height: 3vh;
}

.tit {
  margin: 5vh 0 3vh 0;
  font-weight: bold;
}

.span1 {
  font-size: 10px;
  font-weight: bold;
  float: left;
  text-align: center;
  width: 12.5%;
}

.span2 {
  font-size: 10px;
  font-weight: bold;
  float: left;
  text-align: center;
  width: 20%;
}

</style>
