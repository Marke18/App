<template>

<div class="home">
  <div v-if="!conferma">
    <h5 class="text-center" style="margin: 5vh 0;"> Dettaglio Ciclo-Stazione </h5>
    <div style="margin: 2vh 0;">

      <b-container class="bv-example-row">
        <b-row>

          <b-col cols="12" class="text-center">
            <img src="../assets/bike.jpg" width=150 height="150" alt="BV">
          </b-col>

          <b-col cols="12">

            <b-list-group>

              <b-list-group-item class="text-center" active>
                {{stationD.nomeST}} ({{stationD.ciclo}})
              </b-list-group-item>

              <b-list-group-item class="d-flex justify-content-between align-items-center" >
                Posti totali
                <b-badge variant="primary" pill>{{stationD.postiTot}}</b-badge>
              </b-list-group-item>

              <b-list-group-item class="d-flex justify-content-between align-items-center">
                Posti disponibili
                <b-badge variant="primary" pill>{{stationD.postiDisp}}</b-badge>
              </b-list-group-item>

              <b-list-group-item class="d-flex justify-content-between align-items-center">
                Veicoli disponibili
                <b-badge variant="primary" pill>{{stationD.ebike}}</b-badge>
              </b-list-group-item>

              <b-list-group-item class="d-flex justify-content-between align-items-center">
                Prese auto disponibili
                <b-badge variant="primary" pill>{{stationD.preseAuto}}</b-badge>
              </b-list-group-item>

            </b-list-group>

          </b-col>
        </b-row>
      </b-container>

    </div>

    <div style="margin:5vh 0;">
      <b-container class="bv-example-row">
        <b-list-group>

          <b-list-group-item class="text-center" active>STATO CICLO-STAZIONE</b-list-group-item>

          <div v-for="n in stationD.postiTot" v-bind:key="n">
            <div v-if="stationD.posto[n-1] !== undefined">
              <posto-stato :n="n" :stationD="stationD"></posto-stato>
            </div>

            <div v-else>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <b-row class="text-center" style="width:200%;">
                  <b-col cols="12" style="color:grey;font-style:italic;">
                    POSTO {{n}}<br>Vuoto
                  </b-col>
                </b-row>
              </b-list-group-item>
            </div>
          </div>

        </b-list-group>
      </b-container>
    </div>

    <div class="text-center" style="margin: 2vh 0 3vh 0;">
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
          <img src="../assets/right.png" width="30" height="30" alt="BV">
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
    <img src="../assets/right.png" class="d-inline-block align-top" height="100" width="100" style="margin-top:10vh;" alt="BV">
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

</style>
