export async function getMovimentacoes() {
    let url = 'http://localhost:8000/api/movimentacao/'
    let settings = {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 645a67836fdd89a692703ba1f499f36d979ef005'
          }
        }

    try {
        const response = await fetch(url, settings)
        const conteudo = await response.json()

        return conteudo
    } catch (err) {
        console.log(err)
    }
}