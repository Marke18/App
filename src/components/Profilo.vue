<template>

<div class="home">
  <div style="margin: 0 5%;">
    <b-form>
      <h2 class="text-center" style="margin:3vh 0 6vh 0;">
        Il mio Profilo
        <img src="../assets/profile.png" width="30" height="30" alt="BV">
      </h2>

      <b-form-group id="nome"
                    label="Nome:"
                    label-for="nomeI">
        <b-form-input id="nomeI"
                      class="input"
                      v-model="account.nome"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="cognome"
                    label="Cognome:"
                    label-for="cognomeI">
        <b-form-input id="cognomeI"
                      class="input"
                      v-model="account.cognome"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="dataNascita"
                    label="Data di Nascita:"
                    label-for="dataNascitaI">
        <b-form-input id="dataNascitaI"
                      class="input"
                      v-model="account.dataNascita"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="luogoNascita"
                    label="Luogo di Nascita:"
                    label-for="luogoNascitaI">
        <b-form-input id="luogoNascitaI"
                      class="input"
                      v-model="account.luogoNascita"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="nazionalita"
                    label="Nazionalità:"
                    label-for="nazionalitaI">
        <b-form-input id="nazionalitaI"
                      class="input"
                      v-model="account.nazionalita"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="cf"
                    label="Codice fiscale:"
                    label-for="cfI">
        <b-form-input id="cfI"
                      class="input"
                      v-model="account.cf"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="tipoDoc"
                    label="Tipo di Documento:"
                    label-for="tipoDocI">
        <b-form-input id="tipoDocI"
                      class="input"
                      v-model="account.tipoDoc"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="nDoc"
                    label="Numero del Documento:"
                    label-for="nDocI">
        <b-form-input id="nDocI"
                      class="input"
                      v-model="account.nDoc"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="indResidenza"
                    label="Indirizzo di Residenza:"
                    label-for="indResidenzaI">
        <b-form-input id="indResidenzaI"
                      class="input"
                      v-model="account.indResidenza"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="telefono"
                    label="Telefono Cellulare:"
                    label-for="telefonoI">
        <b-form-input id="telefonoI"
                      class="input"
                      v-model="account.cell"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="email"
                    label="Indirizzo E-Mail:"
                    label-for="emailI">
        <b-form-input id="emailI"
                      class="input"
                      v-model="account.email"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="username"
                    label="Username:"
                    label-for="usernameI">
        <b-form-input id="usernameI"
                      class="input"
                      v-model="account.username"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="pw"
                    label="Password:"
                    label-for="pwI">
        <b-form-input id="pwI"
                      class="input"
                      v-model="account.password"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="credito"
                    label="Credito:"
                    label-for="creditoI">
        <b-form-input id="creditoI"
                      class="input"
                      v-model="account.credito"
                      readonly>
        </b-form-input>
      </b-form-group>

    </b-form>
  </div>
</div>

</template>

<script>

export default {
  name: 'Profilo',
  props: ['account']
}

</script>

<style scoped>

.input {
  margin: 1vh 0;
  min-height: 40px;
  height: 3vh;
  margin: auto;
}

</style>
