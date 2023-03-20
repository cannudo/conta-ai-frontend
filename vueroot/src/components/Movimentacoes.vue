<template>
    <h1>Movimentações</h1>
    <button @click="get()">botão</button>

    {{ movimentacoes }}
</template>

<script>
import { getMovimentacoes } from '@/api/movimentacoes'
export default {
  data() {
    return {
        movimentacoes: []
    }
  },
  methods: {
    async get() {
      this.movimentacoes = await getMovimentacoes()
    }
}
}
</script>

<style scoped>

</style>