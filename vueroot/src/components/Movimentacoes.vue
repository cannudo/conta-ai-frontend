<template>
    <h2>Movimentações</h2>
    <button @click="get()">botão</button>

    <div id="movimentacoesBox">
      <main v-if="movimentacoes.length === 0">
        <section>
          <h4>Adicionar movimentação</h4>
        </section>
      </main>
      <span v-else>
        <ol>
          <li v-for="(objeto, index) in movimentacoes" :key="index">
            <div v-for="(valor, chave) in objeto" :key="chave">
              {{ chave }}: {{ valor }}
            </div>
          </li>
        </ol>
      </span>
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
    #movimentacoesBox {
      border: 1px solid purple;
    }

    h4 {
      text-align: center;
      margin: 0 auto;
    }

    main {
      background-color: pink;
    }
    
    section {
      background-color: seagreen;
      width: 270px;
      height: 528px;
      margin: 0 auto;
    }
</style>