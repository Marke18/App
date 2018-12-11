<template>

<div class="head">
  <div style="height: 2.5vh;">
  </div>
  <div style="height: 5vh;">
    <b-navbar toggleable="xs" type="light" variant="faded">
      <b-navbar-brand href="#" @click="Torna()">
        <img src="../assets/arrow_left.png" width="30" height="30" alt="BV">
      </b-navbar-brand>
    </b-navbar>
  </div>
</div>

</template>

<script>

export default {
  name: 'NavbarTorna',
  props: ['body'],
  methods: {
    Torna () {
      this.$emit('update:body', 'ElencoStazioni')
      window.app.body = 'ElencoStazioni'
    }
  }
}

</script>

<style scoped>

.head {
  min-height: 30px;
  height: 12vh;
  max-height: 80px;
  margin: 0;
}

</style>
