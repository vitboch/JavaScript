//14.2 Fetch
const requestURL = 'https://jsonplaceholder.typicode.com/users'

const body = {
    name: 'Vit',
    age: 40
}

function sendRequestFetch(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        })
    })
}

sendRequestFetch('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

sendRequestFetch('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))