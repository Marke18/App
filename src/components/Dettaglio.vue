<template>

<div class="home">
  <div v-if="!conferma">
    <h1> Dettagli </h1>
    <div style="margin: 2vh 0;">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="2" style="padding:0;">
            <br>
            <img src="../assets/home.jpg" width="40" height="40" alt="BV">
          </b-col>
          <b-col cols="8">
            <span>{{stationD.nomeST}} ({{stationD.ciclo}})<br></span>
            <span v-if="stationD.postiTot > 0">POSTI TOTALI <br></span>
            <span v-if="stationD.postiDisp > 0">POSTI DISPONIBILI <br></span>
            <span v-if="stationD.ebike > 0">E-BIKE DISPONIBIL <br></span>
          </b-col>
          <b-col cols="2" style="padding:0;">
            <br>
            <span v-if="stationD.postiTot > 0">N° {{stationD.postiTot}}<br></span>
            <span v-if="stationD.postiDisp > 0">N° {{stationD.postiDisp}}<br></span>
            <span v-if="stationD.ebike > 0">N° {{stationD.ebike}}<br></span>
          </b-col>
        </b-row>
      </b-container>
    </div>


<!-- Non funge

    <b-btn style="text-align: center;" @click="Login()" v-if="window.app.user === ''">Login</b-btn>

    <b-btn v-b-modal.modal-center style="text-align: center;" v-if="window.app.user !== ''">Accedi alla stazione</b-btn>

    <b-modal id="modal-center" centered title="Attenzione!!">
      <p class="my-4">Il suo credito residuo è insufficiente per poter accedere alla stazione</p>

      <b-btn type="link" @click="Credito()" v-if="window.app.account.credito <= 0">
        Ricarica
      </b-btn>

    </b-modal>
-->
  </div>
  <div class="text-center" v-if="conferma">
    <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" style="margin-top:10vh;" alt="BV">
    <p style="margin-top: 20vh;">
      Il codice inserito è corretto, stai per accedere alla ciclostazione di {{stationD.nomeST}}.<br><br>
      Ora prosegui le operazioni direttamente dalla colonnina della stazione<br>
      <b-button style="margin-top: 10vh;" @click="VerificaV()">OK</b-button>
    </p>
  </div>
</div>

</template>

<script>

export default {
  name: 'Dettaglio',
  props: ['stationD'],
  data () {
    return {
      conferma: false
    }
  },
  methods: {
    Login () {
      if (window.app.user === '') {
        window.app.body = 'Accedi'
        window.app.nomeGestore = ''
      }
    },
    Credito () {
      window.app.body = 'Credito'
    },
    Verifica () {
      this.conferma = true
    },
    VerificaV () {
      this.conferma = false
    }
  },
  computed: {
    bottone () {
      var txt
      if (window.app.user === '') {
        txt = 'Login'
      } else {
        txt = 'Accedi alla stazione'
      }
      return txt
    }
  }
}

</script>

<style scoped>

.home {
  margin: 0 5%;
  width: 90%;
  height: 100%;
  overflow: auto;
}

span {
  font-size: 12px;
}

</style>
