<template>

<div class="home">
  <elenco-stazioni v-for="station in stations" :nomeGestore="nomeGestore" :stations="station" v-bind:key="station.id"></elenco-stazioni>
</div>

</template>

<script>

export default {
  name: 'ElencoStazioniIntero',
  props: ['stations', 'nomeGestore']
}

</script>

<style scoped>

</style>
