<template>

<div class="home">
  <div v-if="!conferma">
    <h3 class="text-center" style="margin: 5vh 0;"> Dettaglio Ciclo-Stazione </h3>
    <div style="margin: 2vh 0;">

      <b-container class="bv-example-row">
        <b-row>

          <b-col cols="6">

            <b-list-group>

              <b-list-group-item class="d-flex justify-content-between align-items-center" active>
                <span>{{stationD.nomeST}} ({{stationD.ciclo}})</span>
              </b-list-group-item>

              <b-list-group-item class="d-flex justify-content-between align-items-center" >
                <span>Posti totali</span>
                <b-badge variant="primary" pill>{{stationD.postiTot}}</b-badge>
              </b-list-group-item>

              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <span>Posti disponibili</span>
                <b-badge variant="primary" pill>{{stationD.postiDisp}}</b-badge>
              </b-list-group-item>

              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <span>Veicoli disponibili</span>
                <b-badge variant="primary" pill>{{stationD.ebike}}</b-badge>
              </b-list-group-item>

              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <span>Prese auto disponibili</span>
                <b-badge variant="primary" pill>{{stationD.preseAuto}}</b-badge>
              </b-list-group-item>

            </b-list-group>

          </b-col>
          <b-col cols="6">
            <img src="../assets/home.png" width=100% height="100%" alt="BV">
          </b-col>
        </b-row>
      </b-container>

    </div>

    <h5 class="text-center" style="margin: 5vh 0;">STATO CICLO-STAZIONE</h5>

    <div style="border: 2px solid black;width:100%;height:11vh;margin-bottom:5vh;font-size:10px;text-align:center;">
      <div v-for="n in 8" v-bind:key="n">
        <div v-if="n <= stationD.postiDisp">
          <b-card img-src="../assets/bike.jpg"
                  img-width="12.5%"
                  img-height="3vh"
                  img-bottom
                  style="width:12.5%;height:10vh;float:left;">
            <p class="card-text">
              <u>POSTO {{n}}</u>
            </p>
          </b-card>
        </div>

        <div v-else>
          <b-card img-src="../assets/black.jpg"
                  img-width="12.5%"
                  img-height="5vh"
                  img-bottom
                  style="width:12.5%;height:10vh;float:left;">
            <p class="card-text">
              <u>POSTO {{n}}</u>
            </p>
          </b-card>
        </div>
      </div>
    </div>

    <div style="border: 2px solid black;width:100%;height:11vh;margin-bottom:5vh;font-size:10px;">
      <dl class="row">
        <dt class="col-sm-1">Legenda Stati</dt>
        <dd class="col-sm-1">A description list is perfect for defining terms.</dd>

        <dt class="col-sm-1">Legenda Tipi</dt>
        <dd class="col-sm-9">
          <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        </dd>
      </dl>
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
          <img src="../assets/home.png" width="30" height="30" alt="BV">
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

.card-body {
  padding: 0;
}

span {
  font-size: 12px;
}

</style>
