<template>

<div class="head">
  <div class="freccia">
    <a href="#" @click="Torna()">
      <img src="../assets/arrow_left.png" width="30" height="30" alt="BV">
    </a>
  </div>
</div>

</template>

<script>

export default {
  name: 'NavbarTorna',
  props: ['body'],
  methods: {
    Torna () {
      if (this.body === 'Dettaglio') {
        this.$emit('update:body', 'ElencoStazioni')
      } else {
        this.$emit('update:body', 'Statistiche')
      }
    }
  }
}

</script>

<style scoped>

.freccia {
  cursor: pointer;
  height: 27px;
  left: 22px;
  position: absolute;
  top: 17px;
  width: 33px;
}

</style>
