<template>
    <form @submit.prevent="submitForm">
        <h1 class="texto-primario">LOGIN</h1>
        <label for="usuario">Usuário</label>
        <input v-model="usuario" type="text" id="usuario" name="usuario">
        <label for="senha">Senha</label>
        <input v-model="senha" type="password" id="senha" name="senha">
        <button>Logar</button>
    </form>

    <button></button>
    <p>Logado? {{ logado }}</p>
    <p>Token {{ token }}</p>
</template>

<script>
    import { getToken, getToken2 } from './../api/index.js'
    export default {
        data() {
            return {
                usuario: 'luan',
                senha: 'luan',
                logado: false,
                token: ''
            }
        },
        methods: {
            async submitForm() {
                try {
                    this.token = await getToken2(this.usuario, this.senha)
                    this.logado = true
                } catch(error) {
                    console.log(error);
                }
            }
        }   
    }
</script>

<style>
    label, input {
        display: block;
        margin-bottom: 10px;
    }
    .texto-primario {
        font-size: 96px;
    }
    input {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid;
        outline: none;
    }
</style>