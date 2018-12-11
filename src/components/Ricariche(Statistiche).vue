<template>

<div style="width: 100%;">
  <b-list-group-item href="#" @click="Dettaglio()" class="flex-column align-items-start">
    <b-container class="bv-example-row text-center">
      <b-row>
        <b-col><span>{{recharge.data}}</span></b-col>
        <b-col><span>{{recharge.taglio}}</span></b-col>
      </b-row>
    </b-container>
  </b-list-group-item>
</div>

</template>

<script>

export default {
  name: 'Recharge',
  props: ['recharge'],
  methods: {
    Dettaglio () {
      window.app.dettaglioR = this.recharge
      window.app.body = 'DettaglioRicarica'
    }
  }
}

</script>

<style scoped>

span {
  text-align: center;
  font-size: 10px;
}

</style>
