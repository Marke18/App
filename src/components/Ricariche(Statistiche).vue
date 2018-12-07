<template>

  <div style="width: 96%;">
    <span>{{recharge.id_prenotazione}}</span>
    <span>{{recharge.taglio}}</span>
    <span>{{recharge.data}}</span>
    <span>{{recharge.ora}}</span>
    <span>{{recharge.circuito}}</span>
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
  width: 20%;
  float: left;
  text-align: center;
  font-size: 10px;
}

</style>
