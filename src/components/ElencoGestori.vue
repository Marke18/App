<template>

<div class="home">
  <h4 style="text-align:center;margin: 2.5vh 0 5vh 0">Elenco Gestori</h4>
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
