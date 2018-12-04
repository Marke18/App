<template>

<div class="home">

  <h1 class="text-center">Registrati</h1>

  <b-form-input class="input" v-model="nome" placeholder="Inserisci il tuo nome" type="text" required></b-form-input>
  <b-form-input class="input" v-model="cognome" placeholder="Inserisci il tuo cognome" type="text" required></b-form-input>
  <b-form-input class="input" v-model="dataNascita" placeholder="Inserisci la tua data di nascita" type="date" required></b-form-input>
  <b-form-input class="input" v-model="luogoNascita" placeholder="Inserisci il tuo luogo di nascita" type="text" required></b-form-input>
  <b-form-input class="input" v-model="cd" placeholder="Inserisci il tuo codice fiscale" type="text" required></b-form-input>
  <b-form-select class="mb-3 input" v-model="tipoDoc" :options="options" required/>
  <b-form-input class="input" v-model="nDoc" placeholder="Inserisci il numero del documento selezionato" type="text" required></b-form-input>
  <b-form-input class="input" v-model="indResidenza" placeholder="Inserisci il tuo indirizzo di residenza" type="text" required></b-form-input>
  <b-form-input class="input" v-model="cell" placeholder="Inserisci il tuo numero di telefono/cellulare" type="text" required></b-form-input>
  <b-form-input class="input" v-model="email" placeholder="Inserisci il tuo indirizzo e-mail" type="email" required></b-form-input>
  <div class="input">
    <div style="float:left;margin-left:5%;">
      <b-form-select v-model="gestore" :options="optionsG" class="mb-3" required/>
    </div>

    <div style="float:right;margin-right:5%;">
      <b-form-select v-model="contratto" :options="optionsC" class="mb-3" required/>
    </div>
  </div>
  <b-form-checkbox id="checkbox1"
                   style="margin-left:5%;"
                   v-model="check1"
                   value="accepted"
                   unchecked-value="not_accepted"
                   required>
    I accept the terms and use
  </b-form-checkbox>
  <br>
  <b-form-checkbox id="checkbox2"
                   style="margin-left:5%;"
                   v-model="check2"
                   value="accepted"
                   unchecked-value="not_accepted"
                   required>
    I accept the terms and use
  </b-form-checkbox>
  <div class="text-right" style="margin:2vh 15% 0 0;">
    <b-button @click="creaAccount()" type="submit">Registrati</b-button>
  </div>

</div>

</template>

<script>

export default {
  name: 'Registrati',
  data () {
    return {
      nome: '',
      cognome: '',
      dataNascita: '',
      luogoNascita: '',
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
      window.app.user = this.email
    }
  }
}

</script>

<style>

.home {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.input {
  width: 90%;
  margin: 1vh 5%;
  height: 4vh;
}

</style>
