<template>
  <div style="margin: 2vh 5%;" @click="Gestore()">
    <div class="row">
      <div class="col-sm-1">
        <br>
        <img src="../assets/home.jpg" width="40" height="40" alt="BV">
      </div>
      <div class="col-sm-3 offset-sm-2">
        <span>{{manager.nome}}<br></span>
        <span v-if="manager.stazioni > 0">STAZIONI BIKE-SHARING <br></span>
        <span v-if="manager.ricaricaBike > 0">RICARICA BIKE PRIVATE <br></span>
        <span v-if="manager.ricaricaCar > 0">RICARICA CAR PRIVATE <br></span>
      </div>
      <div class="col-sm-1">
        <br>
        <span v-if="manager.stazioni > 0">N° {{manager.stazioni}}<br></span>
        <span v-if="manager.ricaricaBike > 0">N° {{manager.ricaricaBike}}<br></span>
        <span v-if="manager.ricaricaCar > 0">N° {{manager.ricaricaCar}}<br></span>
      </div>
    </div>
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
