<template>
  <div style="margin: 2vh 5%;" @click="Gestore()">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="2" style="padding:0;">
          <br>
          <img src="../assets/home.jpg" width="40" height="40" alt="BV">
        </b-col>
        <b-col cols="8">
          <span>{{manager.nome}}<br></span>
          <span v-if="manager.stazioni > 0">STAZIONI BIKE-SHARING <br></span>
          <span v-if="manager.ricaricaBike > 0">RICARICA BIKE PRIVATE <br></span>
          <span v-if="manager.ricaricaCar > 0">RICARICA CAR PRIVATE <br></span>
        </b-col>
        <b-col cols="2" style="padding:0;">
          <br>
          <span v-if="manager.stazioni > 0">N° {{manager.stazioni}}<br></span>
          <span v-if="manager.ricaricaBike > 0">N° {{manager.ricaricaBike}}<br></span>
          <span v-if="manager.ricaricaCar > 0">N° {{manager.ricaricaCar}}<br></span>
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>

export default {
  name: 'Manager',
  props: ['manager'],
  methods: {
    Gestore () {
      window.app.nomeGestore = this.manager.nome
    }
  }
}

</script>

<style scoped>

span {
  font-size: 12px;
}

</style>
