<template>

<div class="home" style="margin-left:5%;width:90%;">
  <p class="tit">Movimenti effettuati</p>
  <div style="border:2px solid black;margin-bottom:5px;width:95%">TU
  </div>
  <div style="border:2px solid black;overflow: scroll;width:95%;height:18vh;">

  </div>
  <p class="tit">Ricariche effettuate</p>
  <div style="border:2px solid black;margin-bottom:5px;width:95%">TU
  </div>
  <div style="border:2px solid black;overflow: scroll;width:95%;height:18vh;">

  </div>

</div>

</template>

<script>

export default {
  name: 'Statistiche'
}

</script>

<style scoped>

.input {
  width: 80%;
  margin: 1vh 10%;
  min-height: 40px;
  height: 3vh;
}

.tit {
  margin: 5vh 0 3vh 0;
  font-weight: bold;
}

</style>
