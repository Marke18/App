<template>

<div class="head">
  <div style="height: 2.5vh;">
  </div>
  <div style="height: 5vh;">

    <b-navbar toggleable="xs" type="light" variant="faded">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" @click="Panoramica()">
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

          <b-nav-item href="#" @click="ElencoGestori()">
            ELENCO GESTORI
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
  props: ['body', 'user', 'nomeGestore'],
  methods: {
    navbarPubblica () {
      this.$emit('update:user', '')
      this.$emit('update:body', 'Home')
      this.$emit('update:nomeGestore', '')
    },
    Profilo () {
      this.$emit('update:body', 'Profilo')
    },
    ElencoStazioni () {
      this.$emit('update:body', 'ElencoStazioni')
      this.$emit('update:nomeGestore', '')
    },
    Statistiche () {
      this.$emit('update:body', 'Statistiche')
    },
    Credito () {
      this.$emit('update:body', 'Credito')
    },
    Panoramica () {
      this.$emit('update:body', 'Home')
      this.$emit('update:nomeGestore', '')
    },
    ElencoGestori () {
      this.$emit('update:body', 'ElencoGestori')
      this.$emit('update:nomeGestore', '')
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
