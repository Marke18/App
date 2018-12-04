<template>

<div class="head">
  <div style="height: 7.5vh;">
  </div>
  <div style="height: 5vh;">

    <b-navbar toggleable="md" type="light" variant="faded">

      <b-navbar-brand href="#" @click="bodyHome()">
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
        Home
      </b-navbar-brand>

      <b-navbar-brand href="#">
        Elenco gestori
      </b-navbar-brand>

      <b-navbar-brand href="#" @click="bodyRegistrati()" >
        Registrati
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
      </b-navbar-brand>

      <b-navbar-brand href="#" @click="navbarPrivata()">
        Accedi
        <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
      </b-navbar-brand>

    </b-navbar>

  </div>
</div>

</template>

<script>

export default {
  name: 'NavbarAreaPubblica',
  methods: {
    navbarPrivata () {
      window.app.navbar = 'Privata'
    },
    bodyHome () {
      window.app.body = 'Home'
    },
    bodyRegistrati () {
      window.app.body = 'Registrati'
    }
  }
}

</script>

<style>

  .head {
    height: 12.5vh;
    margin: 0;
  }

</style>
