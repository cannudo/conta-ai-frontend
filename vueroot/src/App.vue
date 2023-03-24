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
  font-family: 'Open Sans';
  src: url('@/assets/fonts/Open Sans/static/OpenSans/OpenSans-Regular.ttf') format('truetype');
}

#app {
  font-family: 'Open Sans';
  margin: 32px 135px 0px 135px;
}

h4 {
  border: 1px solid red;
  font-size: 24px;
}
</style>
