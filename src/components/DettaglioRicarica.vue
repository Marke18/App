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

      <b-form-group id="taglio"
                    label="Taglio:"
                    label-for="taglioI">
        <b-form-input id="taglioI"
                      class="input"
                      v-model="dettaglio.taglio"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="data"
                    label="Data:"
                    label-for="dataI">
        <b-form-input id="dataI"
                      class="input"
                      v-model="dettaglio.data"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="ora"
                    label="Ora:"
                    label-for="oraI">
        <b-form-input id="oraI"
                      class="input"
                      v-model="dettaglio.ora"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="circuito"
                    label="Circuito:"
                    label-for="circuitoI">
        <b-form-input id="circuitoI"
                      class="input"
                      v-model="dettaglio.circuito"
                      readonly>
        </b-form-input>
      </b-form-group>

    </b-form>
  </div>
</div>

</template>

<script>

export default {
  name: 'DettaglioRicarica',
  props: ['dettaglio']
}

</script>

<style scoped>

</style>
