<template>

<div class="home">
  <div style="margin: 0 5%;">
    <b-form>
      <h4 class="text-center" style="margin:3vh 0 6vh 0;">
        Dettaglio
      </h4>
      <b-form-group id="ID"
                    label="ID Prenotazione:"
                    label-for="IDI">
        <b-form-input id="IDI"
                      class="input"
                      v-model="dettaglio.id_prenotazione"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="servizio"
                    label="Servizio:"
                    label-for="servizioI">
        <b-form-input id="servizioI"
                      class="input"
                      v-model="dettaglio.servizio"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="Data"
                    label="Data:"
                    label-for="dataI">
        <b-form-input id="dataI"
                      class="input"
                      v-model="dettaglio.data"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="oraIn"
                    label="Ora inizio:"
                    label-for="oraInI">
        <b-form-input id="oraInI"
                      class="input"
                      v-model="dettaglio.oraIn"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="oraFin"
                    label="Ora fine:"
                    label-for="oraFinI">
        <b-form-input id="oraFinI"
                      class="input"
                      v-model="dettaglio.oraFin"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="prelievo"
                    label="Prelievo:"
                    label-for="prelievoI">
        <b-form-input id="prelievoI"
                      class="input"
                      v-model="dettaglio.prelievo"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="consegna"
                    label="Consegna:"
                    label-for="consegnaI">
        <b-form-input id="consegnaI"
                      class="input"
                      v-model="dettaglio.consegna"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="costo"
                    label="Costo:"
                    label-for="costoI">
        <b-form-input id="costoI"
                      class="input"
                      v-model="dettaglio.costo"
                      readonly>
        </b-form-input>
      </b-form-group>

    </b-form>
  </div>
</div>

</template>

<script>

export default {
  name: 'DettaglioMovimento',
  props: ['dettaglio']
}

</script>

<style scoped>

</style>
