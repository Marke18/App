<template>

<div class="home text-center">
  <b-form @submit="Recupera()">
    <h2 style="margin-bottom: 10vh;"> Recupera il tuo account</h2>

    <b-form-group id="email"
                  label="Inserisci il tuo inidrizzo email di recupero:"
                  label-for="emailI">
      <b-form-input id="emailI"
                    type="email"
                    v-model="email"
                    class="input"
                    required
                    placeholder="Inserisci il tuo indirizzo email">
      </b-form-input>
    </b-form-group>
    <div style="margin: 5vh 0">
      <b-button type="submit">Recupera la Password</b-button>
    </div>
  </b-form>
</div>

</template>

<script>

export default {
  name: 'Recupera',
  props: ['body'],
  methods: {
    Recupera () {
      this.$emit('update:body', 'Accedi')
    }
  }
}

</script>

<style scoped>

.input {
  margin: 1vh 15%;
  width: 70%;
}

</style>
