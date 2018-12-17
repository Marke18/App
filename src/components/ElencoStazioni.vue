<template>

<div class="stazione">
  <h4 style="text-align:center;">{{stations[0].nomeG}}</h4>
  <h6 style="text-align:center;margin-bottom:5vh;">Elenco delle Stazioni</h6>
  <station v-for="station in stations" :station="station" v-bind:key="station.id" style="margin: 3vh 5%;"></station>
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
