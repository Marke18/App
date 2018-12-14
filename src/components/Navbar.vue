<template>
<div>
  <div class="head">

    <div class="freccia" v-if="body === 'Dettaglio' || body === 'DettaglioMovimento' || body === 'DettaglioRicarica' || body === 'DettaglioMappa'">
      <a href="#" @click="Torna()">
        <img src="../assets/arrow_left.png" width="30" height="30" alt="BV">
      </a>
    </div>
  <!--
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
  -->
  </div>

  <radial-menu
    style="margin: auto; position: absolute; top: 82vh; left: 50%; background-color: white; z-index: 1000;"
    :itemSize="50"
    :radius="120"
    :angle-restriction="180">
      <radial-menu-item
        v-for="(item, index) in items"
        :key="index"
        style="background-color: white"
        @click="() => handleClick(item)">
      </radial-menu-item>
  </radial-menu>
</div>
</template>

<script>

import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'NavbarAreaPubblica',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  props: ['user', 'body', 'nomeGestore'],
  data () {
    return {
      items: ['foo', 'bar', 'hello', 'world', 'more', 'items'],
      lastClicked: 'click on something!'
    }
  },
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
      if (this.nomeGestore === '') {
        this.$emit('update:body', 'ElencoStazioniIntero')
      } else {
        this.$emit('update:body', 'ElencoStazioni')
      }
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
    Torna () {
      if (this.body === 'Dettaglio') {
        this.$emit('update:body', 'ElencoStazioni')
      } else if (this.body === 'DettaglioMappa') {
        this.$emit('update:body', 'Home')
      } else {
        this.$emit('update:body', 'Statistiche')
      }
    },
    handleClick (item) {
      this.lastClicked = item
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
  height: 78px;
  margin: 0;
  background: #007bff url('../assets/menu.png') no-repeat;
}

.home {
  margin: 2.5vh 5% 2.5vh 5%;
  width: 90%;
  height: 72.5vh;
}
/*
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
  z-index: 10000;
}
*/
.freccia {
  cursor: pointer;
  height: 27px;
  right: 15px;
  position: absolute;
  top: 24px;
  width: 33px;
}

</style>
