<template>

<div class="home">
  <div v-if="!conferma">
    <h1 style="font-size: 2rem"> Dettaglio Ciclo-Stazione </h1>
    <div style="margin: 2vh 0;">
      <b-container class="bv-example-row" style="margin: 0;">
        <b-row>

          <b-col cols="6" style="padding: 0;">
            <b-row>
              <b-col cols="12">
                <h3><strong>{{stationD.nomeST}} ({{stationD.ciclo}})</strong></h3>
              </b-col>
              <b-col cols="8">
                <span>Posti disponibili <br></span>
                <span>Veicoli disponibili <br></span>
                <span>Prese auto disponibili <br></span>
              </b-col>
              <b-col cols="4">
                <span>N° {{stationD.postiDisp}}<br></span>
                <span>N° {{stationD.ebike}}<br></span>
                <span>N° {{stationD.preseAuto}}<br></span>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="6" style="padding: 0;">
            <img src="../assets/home.jpg" width="100" height="100" alt="BV">
          </b-col>
        </b-row>
      </b-container>
    </div>

    <h5 style="margin: 5vh 0;"><strong>STATO CICLO-STAZIONE</strong></h5>

    <div style="border: 2px solid black;width:95%;height:10vh;margin-bottom:5vh;">

    </div>

    <div style="border: 2px solid black;width:95%;height:10vh;margin-bottom:5vh;">

    </div>

    <div class="text-center" style="margin: 2vh 0 3vh -5%;">
      <b-btn @click="Login()" v-if="user === ''">Login</b-btn>

      <b-btn @click="console.log('ciao')" v-b-modal.modal-center v-if="user !== ''">Accedi alla stazione</b-btn>

      <b-modal id="modal-center" hide-footer centered v-if="user !== ''">
        <div class="text-center" v-if="account.credito <= 0">
          <h1>Attenzione!!</h1>
          <p class="my-4">Il suo credito residuo è insufficiente per poter accedere alla stazione</p>

          <b-btn type="link" @click="Credito()">
            Ricarica
          </b-btn>
        </div>

        <div v-else class="text-center">
          <img src="../assets/home.jpg" width="30" height="30" alt="BV">
          <p>Leggi sul display della colonnina il codice ed inseriscilo nella textbox sottostante.</p>
          <b-form @submit="Verifica()">
            <b-form-input type="text"
                          v-model="codice"
                          required
                          placeholder="XXXXXXXX"
                          style="width:40%;margin: 2vh 2vh 2vh 30%;text-align:center;">
            </b-form-input>
            <b-button type="submit">VERIFICA IL TUO CODICE</b-button>
          </b-form>
        </div>

      </b-modal>
    </div>

  </div>
  <div class="text-center" style="width:95%;" v-if="conferma">
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
  props: ['stationD', 'user', 'account', 'codiceColonna', 'body', 'nomeGestore'],
  data () {
    return {
      conferma: false,
      codice: ''
    }
  },
  methods: {
    Login () {
      this.$emit('update:body', 'Accedi')
      this.$emit('update:nomeGestore', '')
    },
    Credito () {
      this.$emit('update:body', 'Credito')
    },
    Verifica () {
      if (this.codice === this.codiceColonna) {
        this.conferma = true
      } else {
        this.codice = ''
      }
    },
    VerificaV () {
      this.conferma = false
    }
  }
}

</script>

<style scoped>

.home {
  margin: 0 5%;
  width: 95%;
  height: 100%;
  overflow: auto;
}

span {
  font-size: 10px;
}

</style>
