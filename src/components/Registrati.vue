<template>

<div class="home">

  <b-form @submit="onSubmit" v-if="show">
    <h1 class="text-center" style="margin:1vh 0 2vh 0;">Registrati</h1>

    <b-form-input class="input" v-model="account_reg.nome" placeholder="Inserisci il tuo nome" type="text" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.cognome" placeholder="Inserisci il tuo cognome" type="text" required></b-form-input>
    <b-form-input class="input form-control" v-model="account_reg.dataNascita" placeholder="Inserisci la tua data di nascita" type="date" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.luogoNascita" placeholder="Inserisci il tuo luogo di nascita" type="text" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.nazionalita" placeholder="Inserisci la tua nazionalità" type="text" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.cf" placeholder="Inserisci il tuo codice fiscale" type="text" required></b-form-input>
    <b-form-select class="mb-3 input" v-model="account_reg.tipoDoc" :options="options" required/>
    <b-form-input class="input" v-model="account_reg.nDoc" placeholder="Inserisci il numero del documento selezionato" type="text" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.indResidenza" placeholder="Inserisci il tuo indirizzo di residenza" type="text" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.cell" placeholder="Inserisci il tuo numero di telefono/cellulare" type="tel" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.email" placeholder="Inserisci il tuo indirizzo e-mail" type="email" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.username" placeholder="Inserisci il tuo username" type="text" required></b-form-input>
    <b-form-input class="input" v-model="account_reg.password" placeholder="Inserisci la tua password" type="text" required></b-form-input>
    <div class="row" style="margin-left: 5%;margin-right: 5%;">
      <div class="col-xs-6 text-center" style="margin-left: 5%;margin-right: 5%;">
        <b-form-select v-model="account_reg.gestore" :options="optionsG" class="mb-3" required/>
      </div>
      <div class="col-xs-6 text-center" style="margin-left: 5%;margin-right: 5%;">
        <b-form-select v-model="account_reg.contratto" :options="optionsC" class="mb-3" required/>
      </div>
    </div>
    <b-form-checkbox style="margin-left:10%;"
                     v-model="account_reg.check1"
                     value="accepted"
                     unchecked-value="not_accepted"
                     required>
      I accept the terms and use
    </b-form-checkbox>
    <br>
    <b-form-checkbox style="margin-left:10%;"
                     v-model="account_reg.check2"
                     value="accepted"
                     unchecked-value="not_accepted"
                     required>
      I accept the terms and use
    </b-form-checkbox>
    <div class="text-right" style="margin:2vh 15% 2vh 0;">
      <b-button type="submit">Registrati</b-button>
    </div>

  </b-form>

  <div class="text-center" style="margin: 2vh;" v-else>
    <h1 style="margin: 5vh 0;">Registrazione completata</h1>
    <p style="margin-top:20vh;">
      Grazie {{account_reg.nome}} {{account_reg.cognome}}, la tua registrazione è stata completata con successo!<br>
      <img src="../assets/home.jpg" width="30" height="30" alt="BV"><br>
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
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.input {
  width: 80%;
  margin: 1vh 10%;
  min-height: 40px;
  height: 3vh;
}

</style>
