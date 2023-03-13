<template>
    <h1>Movimentações</h1>
    <button @click="get()">botão</button>
</template>

<script>
export default {
  data() {
    return {
        movimentacoes: []
    }
  },
  methods: {
    async get() {
      try {
        let url = 'http://localhost:8000/api/movimentacao/'
        let settings = {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token <token-api-gotten>'
              }
            }
            const response = await fetch(url, settings)
            const conteudo = await response.json()

            return conteudo
    } catch (err) {
      console.log(err);
    }
  }
}
}
</script>

<style scoped>

</style>