<template>

<div class="home">
  <div style="font-weight: bold;">
    <span class="tit">Credito residuo</span>
    <span class="prz">€ {{credito}}</span>
  </div>
  <b-form @submit="onSubmit">
    <div style="margin-top: 25vh">
      <span><strong>Ricarica il tuo credito <img src="../assets/home.jpg" width="30" height="30" alt="BV"></strong></span>
    </div>
    <div style="margin-top: 8vh">
      <span style="font-size: 12px;">Metodo di pagamento: </span>
      <b-form-select class="input mb-3" v-model="metodoPaga" :options="options" size="sm" required/>
    </div>
    <div style="margin-top: 5vh">
      <span style="font-size: 12px;margin-top:6rem">Taglio pagamento: </span>
      <b-form-select class="input mb-3" v-model="ricarica" :options="paga" size="sm" required/>
    </div>
    <div style="margin-top: 8vh;text-align:center;">
      <b-button type="submit">Conferma</b-button>
    </div>
  </b-form>

</div>

</template>

<script>

export default {
  name: 'Profilo',
  data () {
    return {
      metodoPaga: null,
      ricarica: null,
      credito: 0,
      options: [
        { value: null, text: 'Scegliere il metodo di pagamento', disabled: true },
        { value: 'paypal', text: 'Paypal' }
      ],
      paga: [
        { value: null, text: 'Scegliere il taglioi pagamento', disabled: true },
        { value: 10, text: '10' }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.credito += this.ricarica
    }
  }
}

</script>

<style scoped>

.home {
  margin: 0 10%;
  width: 90%;
  height: 100%;
  overflow: auto;
}

.input {
  width: 30%;
  position: absolute;
  right:10%;
  min-height: 40px;
  height: 3vh;
}

.tit {
  margin-top: 8vh;
  float:left;
}

.prz {
  margin: 8vh 25% 0 0;
  float: right;
}

</style>
