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
