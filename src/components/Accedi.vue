<template>

<div class="home text-center">
  <b-form @submit="bodyHome()">
    <h1 style="margin:4.5vh 0 10vh 0;">Accedi</h1>
    <b-form-input class="input" v-model="username" placeholder="Inserisci il tuo username" type="text" required></b-form-input>
    <b-form-input class="input" v-model="password" placeholder="Inserisci la tua password" type="password" required></b-form-input>
    <b-button type="submit">Accedi</b-button>
  </b-form>
  <div style="text-align:left;margin-top:5vh;">
    <b-btn @click="Recupera()" variant="link">Recupera username e password</b-btn>
    <br>
    <b-btn @click="Registrati()" variant="link">Non sei ancora registrato</b-btn>
  </div>
</div>

</template>

<script>

export default {
  name: 'Accedi',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    bodyHome () {
      window.app.body = 'Home'
      window.app.user = this.username
    },
    Registrati () {
      window.app.body = 'Registrati'
    },
    Recupera () {
      window.app.body = 'Recupera'
    }
  }
}

</script>

<style scoped>

.input {
  margin: 5vh;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  min-width: 200px;
}

</style>
