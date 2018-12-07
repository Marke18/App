<template>

<div class="head">
  <div style="height: 2.5vh;">
  </div>
  <div style="height: 5vh;">

    <b-navbar toggleable="xs" type="light" variant="faded">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" @click="BodyHome()">
        <img src="../assets/home.jpg" width="30" height="30" alt="BV">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>

          <b-nav-item href="#" @click="Panoramica()">
            PANORAMICA
          </b-nav-item>

          <b-nav-item href="#" @click="Credito()">
            CREDITO RESIDUO/RICARICA
          </b-nav-item>

          <b-nav-item href="#" @click="Statistiche()">
            STATISTICHE
          </b-nav-item>

          <b-nav-item href="#" @click="ElencoStazioni()">
            ELENCO STAZIONI
          </b-nav-item>

          <b-nav-item href="#" @click="Profilo()">
            Profilo utente
              <img src="../assets/home.jpg" width="30" height="30" alt="BV">
          </b-nav-item>

          <b-nav-item href="#" @click="navbarPubblica()">
            Esci
              <img src="../assets/home.jpg" width="30" height="30" alt="BV">
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
      window.app.user = ''
      window.app.body = 'Home'
      window.app.nomeGestore = ''
    },
    Profilo () {
      window.app.body = 'Profilo'
    },
    ElencoStazioni () {
      window.app.body = 'ElencoStazioni'
    },
    Statistiche () {
      window.app.body = 'Statistiche'
    },
    Credito () {
      window.app.body = 'Credito'
    },
    Panoramica () {
      window.app.body = 'Panoramica'
    },
    BodyHome () {
      window.app.body = 'Home'
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
