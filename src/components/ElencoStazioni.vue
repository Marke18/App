<template>

<div class="home">
  <div>
    <h1 style="text-align:center;margin: 1vh 0 2vh 0">Elenco Stazioni</h1>
    <station v-for="station in stations" :station="station" v-bind:key="station.id" style="margin: 3vh 5%;"></station>
  </div>
</div>

</template>

<script>

export default {
  name: 'ElencoStazioni',
  props: ['stations']
}

</script>

<style scoped>

</style>
