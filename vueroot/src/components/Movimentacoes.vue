<template>
    <h2>Movimentações</h2>
    <button @click="get()">botão</button>

    <main>
      <div class="movimentacao" v-for="m in movimentacoes" :key="m.titulo">
        <span v-for="(meta, chave) in m" :key="meta">
          {{ chave }}: {{ meta }} <br>
        </span>
      </div>
      <h2>Array de movimentações</h2>
      <p>{{ movimentacoes }}</p>
      <br>
      <h2>for m in movimentacoes</h2>
      <p v-for="m in movimentacoes" :key="m.titulo">
        <hr>
        <span v-for="(meta, chave) in m" :key="meta.titulo">
          | {{ chave }} --> {{ meta }} | 
        </span>
      <hr>
      </p>
    </main>
</template>

<script>
import { getMovimentacoes } from '@/api/movimentacoes'
export default {
  data() {
    return {
        movimentacoes: [
          {
            "titulo": "Concurso",
            "descricao": "Pagamento das duas inscrições para o concurso",
            "entrada": false,
            "valor": 170,
            "data": "2019-06-22"
          },
          {
            "titulo": "Pagamento do estágio",
            "descricao": "Bolsa recebida",
            "entrada": true,
            "valor": 600,
            "data": "2019-07-05"
          },
          {
            "titulo": "Pgto. Internet",
            "descricao": "Internet de junho paga",
            "entrada": false,
            "valor": 89.90,
            "data": "2019-07-05"
          },
          {
            "titulo": "Show do Terno Rei",
            "descricao": "Dessa vez eu vou",
            "entrada": false,
            "valor": 45,
            "data": "2019-07-15"
          },
          {
            "titulo": "Pgto. Camisas do Nathanael",
            "descricao": "1x de 3x (2x restantes)",
            "entrada": true,
            "valor": 20,
            "data": "2019-07-16"
          },
          {
            "titulo": "Higiene bucal",
            "descricao": "Escova, creme dental e enxaguante bucal",
            "entrada": false,
            "valor": 26,
            "data": "2019-07-22"
          },
      ]
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
    .movimentacao {
      background-color: #E9EB7F;
      width: 270px;
      height: 250px;
      border: red solid 1px;
    }

    h4 {
      text-align: center;
      margin: 0 auto;
    }
</style>