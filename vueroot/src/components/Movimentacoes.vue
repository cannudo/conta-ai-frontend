<template>
    <h2>Movimentações</h2>
    <button @click="get()">botão</button>

    <div id="movimentacoesBox">
      <span v-if="movimentacoes.length === 0">Matriz vazia</span>
      <span v-else>{{ movimentacoes }}</span>
    </div>
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