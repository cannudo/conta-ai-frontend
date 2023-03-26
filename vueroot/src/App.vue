<template>
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
  background-color: orange;
  margin: 0 135px
}
</style>
