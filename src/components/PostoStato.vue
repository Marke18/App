<template>

<b-list-group-item class="d-flex justify-content-between align-items-center" :style="style1">
  <b-row class="text-center" style="width:200%;">
    <b-col cols="12">
      <img src="../assets/bike.jpg" width="50" height="50" alt="BV"><br>
      POSTO {{n}}<br>{{stationD.posto[n-1]}}<br>
    </b-col>
    <b-col cols="12">
      <img src="../assets/bike.jpg" width="50" height="50" alt="BV">
      <br>{{stationD.stato[n-1]}}
    </b-col>
  </b-row>
</b-list-group-item>

</template>

<script>

export default {
  name: 'PostoStato',
  props: ['stationD', 'n', 'style1']
}

</script>

<style>

</style>
