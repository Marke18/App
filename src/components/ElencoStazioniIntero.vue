<template>

<div class="home">
  <elenco-stazioni :nomeGestore="nomeGestore" :stations="stations[indiceStazione]" v-if="nomeGestore !== ''"></elenco-stazioni>
  <elenco-stazioni v-for="station in stations" :nomeGestore="nomeGestore" :stations="station" v-bind:key="station.id" v-else></elenco-stazioni>
</div>

</template>

<script>

export default {
  name: 'ElencoStazioniIntero',
  props: ['stations', 'nomeGestore', 'indiceStazione']
}

</script>

<style scoped>

</style>
