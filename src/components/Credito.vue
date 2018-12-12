<template>

<div class="home">

  <b-form @submit="updateCredito">

    <div style="font-weight: bold;margin-bottom:6vh;">
      <b-container class="bv-example-row" style="margin: 8vh 0;">
        <b-row>
          <b-col cols="8" style="padding:0">Credito residuo</b-col>
          <b-col cols="4">€ {{credito}}</b-col>
        </b-row>
      </b-container>
      <span>Ricarica il tuo credito</span>
    </div>
    <b-form-group id="metodoPaga"
                  label="Metodo di pagamento:"
                  label-for="metodoPagaI">
      <b-form-select id="metodoPagaI"
                     class="mb-3 input"
                     v-model="metodoPaga"
                     :options="options"
                     size="sm"
                     required/>
    </b-form-group>
    <b-form-group id="taglioPaga"
                  label="Taglio pagamento:"
                  label-for="taglioPagaI">
      <b-form-select id="taglioPagaI"
                     class="mb-3 input"
                     v-model="ricarica"
                     :options="paga"
                     size="sm"
                     required/>
    </b-form-group>
    <div style="text-align:center;margin-bottom: 4vh;">
      <b-button type="submit">Conferma</b-button>
    </div>
  </b-form>

</div>

</template>

<script>

export default {
  name: 'Credito',
  props: ['credito'],
  data () {
    return {
      metodoPaga: null,
      ricarica: null,
      options: [
        { value: null, text: 'Scegliere il metodo di pagamento', disabled: true },
        { value: 'paypal', text: 'Paypal' }
      ],
      paga: [
        { value: null, text: 'Scegliere il taglio di pagamento', disabled: true },
        { value: 10, text: '10' }
      ]
    }
  },
  methods: {
    updateCredito () {
      this.$emit('update:credito', this.credito += this.ricarica)
    }
  }
}

</script>

<style scoped>

.home {
  margin: 0 10%;
  width: 80%;
}

.input {
  width: 100%;
  min-height: 40px;
  height: 3vh;
}

</style>
