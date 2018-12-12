<template>

<div class="head">
  <slide>
    <a href="#" @click="Panoramica()">Home</a>
    <a href="#" @click="ElencoGestori()">Elenco Gestori</a>
    <a href="#" @click="ElencoStazioni()">Elenco Stazioni</a>

    <a href="#" @click="Accedi()" v-show="user === ''">Accedi</a>
    <a href="#" @click="bodyRegistrati()" v-show="user === ''">Registrati</a>

    <a href="#" @click="Credito()" v-show="user !== ''">Credito</a>
    <a href="#" @click="Statistiche()" v-show="user !== ''">Statistiche</a>
    <a href="#" @click="Profilo()" v-show="user !== ''">Profilo</a>
    <a href="#" @click="navbarPubblica()" v-show="user !== ''">Esci</a>
  </slide>
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
    bodyRegistrati () {
      this.$emit('update:body', 'Registrati')
    },
    navbarPubblica () {
      this.$emit('update:user', '')
      this.$emit('update:body', 'Home')
      this.$emit('update:nomeGestore', '')
    },
    Profilo () {
      this.$emit('update:body', 'Profilo')
    },
    ElencoGestori () {
      this.$emit('update:body', 'ElencoGestori')
      this.$emit('update:nomeGestore', '')
    },
    ElencoStazioni () {
      this.$emit('update:body', 'ElencoStazioniIntero')
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
    }
  }
}

</script>

<style>

.head a {
  text-decoration: none;
  color: #000000;
}

.head a:visited {
  text-decoration: none;
  color: #000000;
}

.head a:hover {
  text-decoration: none;
  color: #000000;
}

.head {
  height: 60px;
  margin: 0;
  background-color: #007bff;
}

.bm-burger-button {
  height: 27px;
  left: 25px;
  top: 18px;
  width: 33px;
}

.bm-burger-bars {
  background-color: #FFFFFF;
}

.bm-menu {
  background-color: #FFFFFF;
}

</style>
