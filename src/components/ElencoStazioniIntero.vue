<template>

<div class="home">
  <elenco-stazioni :nomeGestore="nomeGestore" :stations="stations[indiceStazione]" v-if="nomeGestore !== ''"></elenco-stazioni>
  <elenco-stazioni v-for="station in stations" :nomeGestore="nomeGestore" :stations="station" v-bind:key="station.id" v-else></elenco-stazioni>
</div>

</template>

<script>

export default {
  name: 'ElencoStazioniIntero',
  props: ['stations', 'nomeGestore'],
  computed: {
    indiceStazione () {
      var i
      if (this.nomeGestore !== '') {
        i = 0
        while (this.stations[i].nomeG !== this.nomeGestore) {
          if (this.nomeGestore === this.stations[i][0].nomeG) {
            return i
          }
          i++
        }
      }
    }
  }
}

</script>

<style scoped>

</style>
