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
    <p>Token {{ token }}</p>
</template>

<script>
    import { getToken } from './../api/index.js'
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
                    const response = await getToken({
                        usuario: this.usuario,
                        senha: this.senha
                    });
                    const conteudo = JSON.parse(await response.text());
                    this.logado = true
                    this.token = conteudo.token
                    
                } catch (error) {
                    console.error(error);
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