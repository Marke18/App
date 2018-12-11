<template>

<div style="margin: 2vh 5%;">
  <b-list-group>

    <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="Gestore()" active>
      <span>{{manager.nome}}</span>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="Gestore()" v-if="manager.stazioni > 0">
      <span>STAZIONI BIKE-SHARING</span>
      <b-badge variant="primary" pill>{{manager.stazioni}}</b-badge>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="Gestore()" v-if="manager.ricaricaBike > 0">
      <span>RICARICA BIKE PRIVATE</span>
      <b-badge variant="primary" pill>{{manager.ricaricaBike}}</b-badge>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center" href="#" @click="Gestore()" v-if="manager.ricaricaCar > 0">
      <span>RICARICA CAR PRIVATE</span>
      <b-badge variant="primary" pill>{{manager.ricaricaCar}}</b-badge>
    </b-list-group-item>

  </b-list-group>
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
