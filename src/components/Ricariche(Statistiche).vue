<template>

<div style="width: 100%;">
  <b-container class="bv-example-row text-center">
    <b-row>
        <b-col><span>{{recharge.id_prenotazione}}</span></b-col>
        <b-col><span>{{recharge.taglio}}</span></b-col>
        <b-col><span>{{recharge.data}}</span></b-col>
        <b-col><span>{{recharge.ora}}</span></b-col>
        <b-col><span>{{recharge.circuito}}</span></b-col>
    </b-row>
  </b-container>
</div>

</template>

<script>

export default {
  name: 'Recharge',
  props: ['recharge']
}

</script>

<style scoped>

span {
  text-align: center;
  font-size: 10px;
}

</style>
