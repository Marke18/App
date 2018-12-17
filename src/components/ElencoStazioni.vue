<template>
<div>
  <div class="stazione" v-if="nomeGestore === ''">
    <h3 style="text-align:center;margin-bottom:5vh;">Elenco delle Stazioni di {{stations[0].nomeG}}</h3>
    <station v-for="station in stations" :station="station" v-bind:key="station.id" style="margin: 3vh 5%;"></station>
  </div>

  <div class="home" v-else>
    <h3 style="text-align:center;margin-bottom:5vh;">Elenco delle Stazioni di {{stations[0].nomeG}}</h3>
    <station v-for="station in stations" :station="station" v-bind:key="station.id" style="margin: 3vh 5%;"></station>
  </div>

</div>
</template>

<script>

export default {
  name: 'ElencoStazioni',
  props: ['stations', 'nomeGestore']
}

</script>

<style scoped>

.stazione {
  margin: 2.5vh 0;
  height: auto;
}

</style>
