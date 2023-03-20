<template>
  <BarraMenu/>
  <HelloWorld msg="Welcome to Your Vue.js App" v-show="false"/>
  <Movimentacoes/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BarraMenu from './components/BarraMenu.vue'
import Movimentacoes from './components/Movimentacoes.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
  font-family: 'Special Elite';
  margin: 32px 135px 0px 135px;
}

h4 {
  border: 1px solid red;
  font-size: 24px;
}
</style>
