<template>
<div>
  <div class="head">

    <div class="freccia" v-if="body === 'Dettaglio' || body === 'DettaglioMovimento' || body === 'DettaglioRicarica' || body === 'DettaglioMappa'">
      <a href="#" @click="Torna()">
        <img src="../assets/arrow_left.png" width="30" height="30" alt="BV">
      </a>
    </div>

  </div>

  <radial-menu
    style="margin: auto; position: fixed; bottom: 45px; left: 50%; background-color: white; z-index: 402; margin: -25px 0 -25px -25px; cursor: pointer;"
    :itemSize="50"
    :radius="120"
    :angle-restriction="180"
    v-show="user === ''">
      <radial-menu-item
        v-for="(item, index) in items"
        :key="index"
        style="background-color: white"
        @click="() => handleClick(item)">
          <span>{{item}}</span>
      </radial-menu-item>
  </radial-menu>

  <radial-menu
    style="margin: auto; position: fixed; bottom: 45px; left: 50%; background-color: white; z-index: 402; margin: -25px 0 -25px -25px; cursor: pointer;"
    :itemSize="50"
    :radius="120"
    :angle-restriction="180"
    v-show="user !== ''">
      <radial-menu-item
        v-for="(item2, index) in items2"
        :key="index"
        style="background-color: white"
        @click="() => handleClick(item2)">
          <span>{{item2}}</span>
      </radial-menu-item>
  </radial-menu>

</div>
</template>

<script>

import { RadialMenu, RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'NavbarAreaPubblica',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  props: ['user', 'body', 'nomeGestore'],
  data () {
    return {
      items: ['Home', 'Elenco Gestori', 'Elenco Stazioni', 'Accedi', 'Registrati'],
      items2: ['Home', 'Elenco Gestori', 'Elenco Stazioni', 'Credito', 'Statistiche', 'Profilo', 'Esci']
    }
  },
  methods: {
    Torna () {
      if (this.body === 'Dettaglio' && this.nomeGestore !== '') {
        this.$emit('update:body', 'ElencoStazioni')
      } else if (this.body === 'Dettaglio' && this.nomeGestore === '') {
        this.$emit('update:body', 'ElencoStazioniIntero')
      } else {
        this.$emit('update:body', 'Statistiche')
      }
    },
    handleClick (item) {
      switch (item) {
        case 'Home':
          this.$emit('update:body', 'Home')
          this.$emit('update:nomeGestore', '')
          break
        case 'Elenco Gestori':
          this.$emit('update:body', 'ElencoGestori')
          break
        case 'Elenco Stazioni':
          this.$emit('update:body', 'ElencoStazioniIntero')
          this.$emit('update:nomeGestore', '')
          break
        case 'Registrati':
          this.$emit('update:body', 'Registrati')
          break
        case 'Accedi':
          this.$emit('update:body', 'Accedi')
          break
        case 'Profilo':
          this.$emit('update:body', 'Profilo')
          break
        case 'Statistiche':
          this.$emit('update:body', 'Statistiche')
          break
        case 'Credito':
          this.$emit('update:body', 'Credito')
          break
        case 'Esci':
          this.$emit('update:user', '')
          this.$emit('update:body', 'Home')
          this.$emit('update:nomeGestore', '')
          break
      }
    }
  }
}

</script>

<style>

.head {
  height: 50px;
  margin: 0 0 5px 0;
  background: #007bff url('../assets/menu.png') no-repeat;
  z-index: 401;
  position: sticky;
  top: 0;
}

.home {
  width: 90%;
  height: 100%;
  margin: 0 5%;
  overflow: scroll;
}

.vue-radial-menu-container {
  border: 1px solid #000000;
}

.vue-radial-menu-item {
  font-size: 10px;
  text-align: center;
  border: 1px solid #000000;
}

.freccia {
  cursor: pointer;
  right: 15px;
  position: absolute;
  top: 11px;
}

</style>
