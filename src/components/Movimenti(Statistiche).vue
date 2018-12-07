<template>

  <div style="width: 100%;">
    <span>{{movement.servizio}}</span>
    <span>{{movement.id_prenotazione}}</span>
    <span>{{movement.data}}</span>
    <span>{{movement.oraIn}}</span>
    <span>{{movement.oraFin}}</span>
    <span>{{movement.prelievo}}</span>
    <span>{{movement.consegna}}</span>
    <span>{{movement.costo}}</span>
  </div>

</template>

<script>

export default {
  name: 'Movement',
  props: ['movement']
}

</script>

<style scoped>

span {
  width: 12.5%;
  float:left;
  text-align:center;
  font-size: 10px;
}

</style>
