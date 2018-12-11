<template>

<div>
  <elenco-stazioni v-for="station in stations" :stations="station" v-bind:key="station.id"></elenco-stazioni>
</div>

</template>

<script>

export default {
  name: 'ElencoStazioniIntero',
  props: ['stations']
}

</script>

<style scoped>

</style>
