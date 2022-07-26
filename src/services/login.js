const ENDPOINT = 'http://localhost:8000'

export default function login ({ usename, password }) {
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ usename, password })
    }).then(res => {
        if(!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res => {
        const { jwt } = res
        return jwt
    })
}