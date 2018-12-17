<template>

<div class="home text-center">

  <b-form @submit="bodyHome()">
    <h3 style="margin:4.5vh 0 8vh 0;">Accedi</h3>
    <b-form-group id="username"
                  label="Username:"
                  label-for="usernameI"
                  style="text-align:left;	width: 80%; margin: auto;">
      <b-form-input id="usernameI"
                    type="text"
                    v-model="username"
                    class="input"
                    required
                    placeholder="Inserisci il tuo username">
      </b-form-input>
    </b-form-group>

    <b-form-group id="password"
                  label="Password:"
                  label-for="passwordI"
                  style="text-align:left;	width: 80%; margin: 5vh auto;">
      <b-form-input id="passwordI"
                    type="password"
                    v-model="password"
                    class="input"
                    required
                    placeholder="Inserisci la tua password">
      </b-form-input>
    </b-form-group>
    <b-button type="submit">Accedi</b-button>
  </b-form>

  <div style="text-align:left;margin-top:5vh">
    <b-btn @click="Recupera()" variant="link" style="font-size: 13px;">Recupera username e password</b-btn>
    <br>
    <b-btn @click="Registrati()" variant="link" style="font-size: 13px;">Non sei ancora registrato</b-btn>
  </div>
</div>

</template>

<script>

export default {
  name: 'Accedi',
  props: ['user', 'body', 'nomeGestore'],
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    bodyHome () {
      this.$emit('update:body', 'Home')
      this.$emit('update:user', this.username)
      this.$emit('update:nomeGestore', '')
    },
    Registrati () {
      this.$emit('update:body', 'Registrati')
    },
    Recupera () {
      this.$emit('update:body', 'Recupera')
    }
  }
}

</script>

<style scoped>

</style>
