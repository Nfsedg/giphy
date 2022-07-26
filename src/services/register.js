const ENDPOINT = 'http://localhost:8000'

export default function register ({ usename, password }) {
    return fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ usename, password })
    }).then(res => {
        if(!res.ok) throw new Error('Response is NOT ok')
        return true
    })
}