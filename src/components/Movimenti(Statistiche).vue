<template>

<div style="width: 100%;">
  <b-container class="bv-example-row text-center">
    <b-row>
        <b-col><span>{{movement.servizio}}</span></b-col>
        <b-col><span>{{movement.id_prenotazione}}</span></b-col>
        <b-col><span>{{movement.data}}</span></b-col>
        <b-col><span>{{movement.oraIn}}</span></b-col>
        <b-col><span>{{movement.oraFin}}</span></b-col>
        <b-col><span>{{movement.prelievo}}</span></b-col>
        <b-col><span>{{movement.consegna}}</span></b-col>
        <b-col><span>{{movement.costo}}</span></b-col>
    </b-row>
  </b-container>
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
  text-align:center;
  font-size: 10px;
}

</style>
