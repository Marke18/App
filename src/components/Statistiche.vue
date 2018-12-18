<template>

<div class="home">
  <swipe class="my-swipe" auto="0" ref="mySwipe">
    <h4 class="text-center" style="margin:3vh 0 2vh 0;">
      Statistiche
      <img src="../assets/stat.png" width="30">
    </h4>
    <swipe-item>
      <p class="tit">
        <img src="../assets/arrow_left.png" width="15" style="margin:0 5px 2.5px 0;cursor: pointer;" @click="goto(1)">
        Movimenti effettuati
        <img src="../assets/arrow_right.png" width="15" style="margin:0 0 2.5px 5px;cursor: pointer;" @click="goto(1)">
      </p>
      <div style="margin-bottom:5px;width:100%;height: 85%;overflow: scroll;">
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
    </swipe-item>

    <swipe-item>
      <p class="tit">
        <img src="../assets/arrow_left.png" width="15" style="margin:0 5px 2.5px 0;cursor: pointer;" @click="goto(0)">
        Ricariche effettuate
        <img src="../assets/arrow_right.png" width="15" style="margin:0 0 2.5px 5px;cursor: pointer;" @click="goto(0)">
      </p>
      <div style="margin-bottom:5px;width:100%;height: 85%;overflow: scroll;">
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
    </swipe-item>
  </swipe>

</div>

</template>

<script>

export default {
  name: 'Statistiche',
  props: ['movements', 'recharges'],
  methods: {
    goto (index) {
      this.$refs.mySwipe.goto(index)
    }
  }
}

</script>

<style scoped>

.tit {
  margin: 0 0 3vh 0;
  font-weight: bold;
}

.my-swipe {
  text-align: center;
  width: 100%;
  height: 100%;
}

</style>
