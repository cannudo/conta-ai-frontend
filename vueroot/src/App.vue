<template>
  <BarraMenu />
  <Movimentacoes />  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import BarraMenu from './components/BarraMenu.vue'
import Movimentacoes from './components/Movimentacoes.vue'

export default {
  name: 'App',
  components: {
    BarraMenu,
    Movimentacoes
  }
}
</script>

<style>
@font-face {
  font-family: 'Courier Prime';
  src: url('@/assets/fonts/Courier/CourierPrime-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Special Elite';
  src: url('@/assets/fonts/Special/SpecialElite-Regular.ttf');
}

#app {

  margin: 32px 135px 0px 135px;
  font-family: 'Special Elite';
}
</style>
