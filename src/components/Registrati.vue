<template>

<div class="home">

  <b-form @submit="onSubmit" v-if="show">
    <h1 class="text-center" style="margin:3vh 0 6vh 0;">Registrati</h1>

    <b-form-group id="nome"
                  label="Nome:"
                  label-for="nomeI">
      <b-form-input id="nomeI"
                    type="text"
                    v-model="account_reg.nome"
                    class="input"
                    required
                    placeholder="Inserisci il tuo nome">
      </b-form-input>
    </b-form-group>

    <b-form-group id="cognome"
                  label="Cognome:"
                  label-for="cognomeI">
      <b-form-input id="cognomeI"
                    type="text"
                    v-model="account_reg.cognome"
                    class="input"
                    required
                    placeholder="Inserisci il tuo cognome">
      </b-form-input>
    </b-form-group>

    <b-form-group id="dataNascita"
                  label="Data di Nascita:"
                  label-for="dataNascitaI">
      <b-form-input id="dataNascitaI"
                    type="date"
                    v-model="account_reg.dataNascita"
                    class="input"
                    required
                    placeholder="Inserisci la tua data di nascita">
      </b-form-input>
    </b-form-group>

    <b-form-group id="luogoNascita"
                  label="Luogo di Nascita:"
                  label-for="luogoNascitaI">
      <b-form-input id="luogoNascitaI"
                    type="text"
                    v-model="account_reg.luogoNascita"
                    class="input"
                    required
                    placeholder="Inserisci il tuo luogo di nascita">
      </b-form-input>
    </b-form-group>

    <b-form-group id="nazionalita"
                  label="Nazionalità:"
                  label-for="nazionalitaI">
      <b-form-input id="nazionalitaI"
                    type="text"
                    v-model="account_reg.nazionalita"
                    class="input"
                    required
                    placeholder="Inserisci la tua nazionalità">
      </b-form-input>
    </b-form-group>

    <b-form-group id="cf"
                  label="Codice fiscale:"
                  label-for="cfI">
      <b-form-input id="cfI"
                    type="text"
                    v-model="account_reg.cf"
                    class="input"
                    required
                    placeholder="Inserisci il tuo codice fiscale">
      </b-form-input>
    </b-form-group>

    <b-form-group id="tipoDoc"
                  label="Tipologia del documento d'identità:"
                  label-for="tipoDocI">
      <b-form-select id="tipoDocI"
                     class="mb-3 input"
                     v-model="account_reg.tipoDoc"
                     :options="options"
                     required/>
    </b-form-group>

    <b-form-group id="nDoc"
                  label="Numero del Documento:"
                  label-for="nDocI">
      <b-form-input id="nDocI"
                    type="text"
                    v-model="account_reg.nDoc"
                    class="input"
                    required
                    placeholder="Inserisci il numero del documento">
      </b-form-input>
    </b-form-group>

    <b-form-group id="indResidenza"
                  label="Indirizzo di Residenza (Città inclusa):"
                  label-for="indResidenzaI">
      <b-form-input id="indResidenzaI"
                    type="text"
                    v-model="account_reg.indResidenza"
                    class="input"
                    required
                    placeholder="Inserisci il tuo indirizzo di residenza">
      </b-form-input>
    </b-form-group>

    <b-form-group id="telefono"
                  label="Telefono/Cellulare:"
                  label-for="telefonoI">
      <b-form-input id="telefonoI"
                    type="tel"
                    v-model="account_reg.telefono"
                    class="input"
                    required
                    placeholder="Inserisci il tuo numero di telefono/cellulare">
      </b-form-input>
    </b-form-group>

    <b-form-group id="email"
                  label="Indirizzo E-mail:"
                  label-for="emailI">
      <b-form-input id="emailI"
                    type="email"
                    v-model="account_reg.email"
                    class="input"
                    required
                    placeholder="Inserisci il tuo indirizzo e-mail">
      </b-form-input>
    </b-form-group>

    <b-form-group id="username"
                  label="Username:"
                  label-for="usernameI">
      <b-form-input id="usernameI"
                    type="text"
                    v-model="account_reg.username"
                    class="input"
                    required
                    placeholder="Inserisci il tuo username">
      </b-form-input>
    </b-form-group>

    <b-form-group id="password"
                  label="Password:"
                  label-for="passwordI">
      <b-form-input id="passwordI"
                    type="password"
                    v-model="account_reg.password"
                    class="input"
                    required
                    placeholder="Inserisci la tua password">
      </b-form-input>
    </b-form-group>

    <div class="row">
      <div class="col-xs-6" style="margin: 0 5%;">
      <b-form-group id="gestore"
                    label="Scegliere il gestore:"
                    label-for="gestoreI">
        <b-form-select id="gestoreI"
                       class="mb-3 input"
                       v-model="account_reg.gestore"
                       :options="optionsG"
                       required/>
      </b-form-group>
      </div>

      <div class="col-xs-6" style="margin: 0 5%;">
        <b-form-group id="contratto"
                      label="Scegliere il contratto:"
                      label-for="contrattoI">
          <b-form-select id="contrattoI"
                         class="mb-3 input"
                         v-model="account_reg.contratto"
                         :options="optionsC"
                         required/>
         </b-form-group>
      </div>
    </div>
    <b-form-checkbox v-model="account_reg.check1"
                     value="accepted"
                     unchecked-value="not_accepted"
                     required>
      Consenso Regolamento <br>(link dinamico in funzione del Gestore selezionato)
    </b-form-checkbox>
    <br>
    <b-form-checkbox v-model="account_reg.check2"
                     value="accepted"
                     unchecked-value="not_accepted"
                     required>
      Informativa Privacy <br>(link dinamico in funzione del Gestore selezionato)
    </b-form-checkbox>
    <div class="text-right" style="margin:8vh 10% 5vh 0;">
      <b-button type="submit">Registrati</b-button>
    </div>

  </b-form>

  <div class="text-center" style="margin: 2vh;" v-else>
    <h1 style="margin: 7vh 0;">Registrazione completata</h1>
    <img src="../assets/home.jpg" width="30" height="30" alt="BV"><br>
    <p style="margin-top:10vh;">
      Grazie {{account_reg.nome}} {{account_reg.cognome}}, la tua registrazione è stata completata con successo!<br>
      A breve riceverai un e-mail di conferma.
    </p>
    <div class="text-center" style="margin: auto;">
      <b-button type="submit" @click="Accedi()">Accedi</b-button>
    </div>
  </div>

</div>

</template>

<script>

export default {
  name: 'Registrati',
  data () {
    return {
      account_reg: {
        nome: '',
        cognome: '',
        dataNascita: '',
        luogoNascita: '',
        nazionalita: '',
        cf: '',
        tipoDoc: null,
        nDoc: '',
        indResidenza: '',
        cell: '',
        email: '',
        gestore: null,
        contratto: null,
        check1: 'not_accepted',
        check2: 'not_accepted',
        username: '',
        password: ''
      },
      show: true,
      options: [
        { value: null, text: 'Scegliere il tipo di documento', disabled: true },
        { value: 'ts', text: 'Tessera sanitaria' },
        { value: 'ci', text: "Carta d'identità" }
      ],
      optionsG: [
        { value: null, text: 'Scegliere il gestore', disabled: true },
        { value: 'G1', text: 'Gestore 1' }
      ],
      optionsC: [
        { value: null, text: 'Scegliere il contratto', disabled: true },
        { value: 'C1', text: 'Contratto 1' }
      ]
    }
  },
  methods: {
    creaAccount () {
      this.show = false
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.creaAccount()
    },
    Accedi () {
      window.app.body = 'Accedi'
    }
  }
}

</script>

<style scoped>

.home {
  margin: 0 10%;
  width: 80%;
  font-size: 15px;
}

.input {
  margin: 1vh 0;
  min-height: 40px;
  height: 3vh;
}

</style>
