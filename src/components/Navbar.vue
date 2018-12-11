<template>

<div class="head">
  <div style="height: 2.5vh;">
  </div>
  <div style="height: 5vh;">
      <slide>
        <a href="#" @click="Panoramica()">Home<img src="../assets/home.jpg" width="30" height="30" alt="BV"></a>
        <a href="#" @click="ElencoGestori()">Elenco Gestori</a>
        <a href="#" @click="ElencoStazioni()">Elenco Stazioni</a>

        <a href="#" @click="Accedi()" v-show="user === ''">Accedi<img src="../assets/arrow_right.png" width="30" height="30" alt="BV"></a>
        <a href="#" @click="bodyRegistrati()" v-show="user === ''">Registrati<img src="../assets/plus.png" width="30" height="30" alt="BV"></a>

        <a href="#" @click="Credito()" v-show="user !== ''">Credito</a>
        <a href="#" @click="Statistiche()" v-show="user !== ''">Statistiche</a>
        <a href="#" @click="Profilo()" v-show="user !== ''">Profilo<img src="../assets/profile.png" width="30" height="30" alt="BV"></a>
        <a href="#" @click="navbarPubblica()" v-show="user !== ''">Esci<img src="../assets/arrow_right.png" width="30" height="30" alt="BV"></a>
      </slide>
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
  color: #FFFFFF;
}

.head a:visited {
  text-decoration: none;
  color: #FFFFFF;
}

.head a:hover {
  text-decoration: none;
  color: #FFFFFF;
}

.head {
  min-height: 30px;
  height: 12vh;
  max-height: 80px;
  margin: 0;
}

</style>
