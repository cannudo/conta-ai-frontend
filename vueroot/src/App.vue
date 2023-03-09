<template>
  <Login />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login,   
  }
}
</script>

<style>
#app {
  border: 2px solid red;
  margin: 32px 135px 0px 135px;
}
</style>
