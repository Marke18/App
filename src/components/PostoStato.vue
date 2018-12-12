<template>

<b-list-group-item class="d-flex justify-content-between align-items-center text-center" :style="style1">
  <b-row>
    <b-col cols="12" style="padding-left: 0;margin:auto;"><img src="../assets/bike.jpg" width="50" height="50" alt="BV"></b-col>
    <b-col cols="12">
      POSTO {{n}}<br>{{stationD.posto[n-1]}}<br><br>{{stationD.stato[n-1]}}
    </b-col>
    <b-col cols="12" style="padding-left: 0;margin:auto;"><img src="../assets/bike.jpg" width="50" height="50" alt="BV"></b-col>
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
