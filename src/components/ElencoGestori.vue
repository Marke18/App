<template>

<div class="home">
  <h1 style="text-align:center;margin: 1vh 0 2vh 0">Elenco Gestori</h1>
  <manager v-for="manager in managers" :manager="manager" v-bind:key="manager.id" style="margin: 3vh 5%"></manager>
</div>

</template>

<script>

export default {
  name: 'ElencoGestori',
  props: ['managers']
}

</script>

<style scoped>

</style>
