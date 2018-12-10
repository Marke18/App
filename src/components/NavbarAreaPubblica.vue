<template>

<div class="head">
  <div style="height: 2.5vh;">
  </div>
  <div style="height: 5vh;">

    <b-navbar toggleable="xs" type="light" variant="faded">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" @click="bodyHome()">
        <img src="../assets/home.jpg" width="30" height="30" alt="BV">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>

          <b-nav-item href="#" @click="Accedi()">
            Accedi
            <img src="../assets/home.jpg" width="30" height="30" alt="BV">
          </b-nav-item>

          <b-nav-item href="#" @click="ElencoGestori()">
            Elenco gestori
          </b-nav-item>

          <b-nav-item href="#" @click="bodyRegistrati()">
            Registrati
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
  name: 'NavbarAreaPubblica',
  props: ['user', 'body', 'nomeGestore'],
  methods: {
    Accedi () {
      this.$emit('update:body', 'Accedi')
    },
    bodyHome () {
      this.$emit('update:body', 'Home')
      this.$emit('update:nomeGestore', '')
    },
    bodyRegistrati () {
      this.$emit('update:body', 'Registrati')
    },
    ElencoGestori () {
      this.$emit('update:body', 'ElencoGestori')
      this.$emit('update:nomeGestore', '')
    }
  }
}

</script>

<style>

</style>
