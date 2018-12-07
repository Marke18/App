<template>

<div class="home">
  <p class="tit">Il mio Profilo<img src="../assets/home.jpg" width="30" height="30" alt="BV" style="margin: 0 2vh;"></p>

  <div class="height-s">
    <span class="left">Nome</span>
    <span class="right">{{account.nome}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">Cognome</span>
    <span class="right">{{account.cognome}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">Data di nascita</span>
    <span class="right">{{account.dataNascita}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">Luogo di nascita</span>
    <span class="right">{{account.luogoNascita}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">Nazionalità</span>
    <span class="right">{{account.nazionalita}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">cf</span>
    <span class="right">{{account.cf}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">Tipo di documento d'identità</span>
    <span class="right">{{account.tipoDoc}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">Numero documento d'identità</span>
    <span class="right">{{account.nDoc}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">Indirizzo di residenza</span>
    <span class="right">{{account.indResidenza}}</span><br>
  </div>
  <div class="height-s">
    <span class="left">Telefono / Cellulare</span>
    <span class="right">{{account.cell}}</span><br><br>
  </div>
  <div class="height-s">
    <span class="left">Indirizzo E-mail</span>
    <span class="right">{{account.email}}</span><br>
  </div>

  <div>
    <span class="left" style="margin-top:5vh;">Credito residuo</span>
    <span class="right" style="margin-top:5vh;font-weight:bold;border: 0">{{account.credito}}€</span>
  </div>

</div>

</template>

<script>

export default {
  name: 'Profilo',
  props: ['account']
}

</script>

<style scoped>

.home {
  margin: 0 10%;
  width: 90%;
  height: 100%;
  overflow: auto;
}

.left {
  float: left;
  font-size: 10px;
}

.right {
  float: right;
  margin-right: 10%;
  font-size: 10px;
  border: 1px solid black;
  width: 35%;
  text-align:center;
}

.height-s {
  height: 20px;
}

.tit {
  margin: 4vh 0 3vh 0;
  font-weight: bold;
}

</style>
