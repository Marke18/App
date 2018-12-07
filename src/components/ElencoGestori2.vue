<template>

  <div @click="Gestore()">
    <div style="width:25%;float:left;margin: 2vh 0">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" style="margin-top:50%;" alt="BV">
    </div>
    <div style="width:60%;float:left;margin: 2vh 0">
      <span>{{manager.nome}}<br></span>
      <span v-if="manager.stazioni > 0">STAZIONI BIKE-SHARING <br></span>
      <span v-if="manager.ricaricaBike > 0">RICARICA BIKE PRIVATE <br></span>
      <span v-if="manager.ricaricaCar > 0">RICARICA CAR PRIVATE <br></span>
    </div>
    <div style="width:15%;float:left;margin: 2vh 0">
      <br>
      <span v-if="manager.stazioni > 0">{{manager.stazioni}}<br></span>
      <span v-if="manager.ricaricaBike > 0">{{manager.ricaricaBike}}<br></span>
      <span v-if="manager.ricaricaCar > 0">{{manager.ricaricaCar}}<br></span>
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
