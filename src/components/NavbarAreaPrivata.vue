<template>

<div class="head">
  <div style="height: 2.5vh;">
  </div>
  <div style="height: 5vh;">

    <b-navbar toggleable="xs" type="light" variant="faded">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <img src="../assets/home.jpg" width="30" height="30" alt="BV">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>

          <b-nav-item href="#">
            PANORAMICA
          </b-nav-item>

          <b-nav-item href="#">
            CREDITO RESIDUO/RICARICA
          </b-nav-item>

          <b-nav-item href="#">
            STATISTICHE
          </b-nav-item>

          <b-nav-item href="#">
            ELENCO STAZIONI
          </b-nav-item>

          <b-nav-item href="#">
            Profilo utente
            <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
          </b-nav-item>

          <b-nav-item href="#" @click="navbarPubblica()">
            Esci
            <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
          </b-nav-item>

        </b-navbar-nav>

      </b-collapse>

    </b-navbar>

  </div>
</div>

</template>

<script>

export default {
  name: 'NavbarAreaPrivata',
  methods: {
    navbarPubblica () {
      window.app.navbar = 'Pubblica'
    }
  }
}

</script>

<style>

  .head {
    min-height: 30px;
    height: 12vh;
    max-height: 80px;
    margin: 0;
  }

</style>
