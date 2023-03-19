<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
</style>
