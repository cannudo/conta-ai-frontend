<template>
    <form @submit.prevent="submitForm">
        <h1 class="texto-primario">LOGIN</h1>
        <label for="usuario">Usuário</label>
        <input v-model="usuario" type="text" id="usuario" name="usuario">
        <label for="senha">Senha</label>
        <input v-model="senha" type="password" id="senha" name="senha">
        <button>Logar</button>
    </form>

    <p>Logado? {{ logado }}</p>
</template>

<script>
    import { getToken } from './../api/index.js'
    export default {
        data() {
            return {
                usuario: 'luan',
                senha: 'luan',
                logado: false
            }
        },
        methods: {
            async submitForm() {
                getToken({
                    usuario: this.usuario,
                    senha: this.senha
                }).then((response => {
                    if (response.ok) {
                        this.logado = true
                    }
                }))
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