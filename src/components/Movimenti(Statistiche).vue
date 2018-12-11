<template>

<div style="width: 100%;">
  <b-list-group-item href="#" @click="Dettaglio()" class="flex-column align-items-start">
    <b-container class="bv-example-row text-center">
      <b-row>
        <b-col><span>{{movement.servizio}}</span></b-col>
        <b-col><span>{{movement.data}}</span></b-col>
        <b-col><span>{{movement.costo}}</span></b-col>
      </b-row>
    </b-container>
  </b-list-group-item>
</div>
</template>

<script>

export default {
  name: 'Movement',
  props: ['movement'],
  methods: {
    Dettaglio () {
      window.app.dettaglioM = this.movement
      window.app.body = 'DettaglioMovimento'
    }
  }
}

</script>

<style scoped>

span {
  text-align:center;
  font-size: 10px;
}

</style>
