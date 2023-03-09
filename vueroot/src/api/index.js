export const getToken = (json) => {
    let url = 'http://localhost:8000/auth/token/'
    let settings = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: json.usuario,
            password: json.senha
        })
    }
    return fetch(url, settings)
}

export async function getToken2(usuario, senha) {
    let url = 'http://localhost:8000/auth/token/'
    let settings = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usuario,
            password: senha
        })
    }
    const response = await fetch(url, settings)

    if (!response.ok) {
        throw new Error("Erro ao obter token.")
    }

    const conteudo = await response.json()

    return conteudo.token

}