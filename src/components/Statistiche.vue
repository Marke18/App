<template>

<div class="home" style="margin:0 5%;width:90%;">
  <p class="tit">Movimenti effettuati</p>
  <div style="border:2px solid black;margin-bottom:5px;width:100%;height:26.5vh;overflow: scroll;">
      <b-container class="bv-example-row text-center" style="width:100%;font-size: 10px;font-weight: bold;">
        <b-list-group>
          <b-list-group-item active class="flex-column align-items-start">
            <b-row>
                <b-col>Servizio</b-col>
                <b-col>Data</b-col>
                <b-col>Costo</b-col>
            </b-row>
          </b-list-group-item>
            <movement v-for="movement in movements" :movement="movement" v-bind:key="movement.id" ></movement>
        </b-list-group>
      </b-container>
  </div>

  <p class="tit">Ricariche effettuate</p>
  <div style="border:2px solid black;margin-bottom:5px;width:100%;height:26.5vh;overflow: scroll;">
    <b-container class="bv-example-row text-center" style="width:100%;font-size: 10px;font-weight: bold;">
      <b-list-group>
        <b-list-group-item active class="flex-column align-items-start">
          <b-row>
              <b-col>Data</b-col>
              <b-col>Taglio</b-col>
          </b-row>
        </b-list-group-item>
        <recharge v-for="recharge in recharges" :recharge="recharge" v-bind:key="recharge.id" ></recharge>
      </b-list-group>
    </b-container>
  </div>

</div>

</template>

<script>

export default {
  name: 'Statistiche',
  props: ['movements', 'recharges']
}

</script>

<style scoped>

.tit {
  margin: 3vh 0;
  font-weight: bold;
}

</style>
