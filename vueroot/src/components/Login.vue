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
                try {
                    const response = await fetch('http://localhost:8000/auth/token/', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: this.usuario,
                            password: this.senha
                        })
                    }).then((response => {
                        if (response.ok) {
                            this.logado = true
                        }
                    }))
                } catch(error) {
                    console.log(error)
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