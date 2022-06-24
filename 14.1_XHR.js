// 14.1 XMLHttpRequest (XHR)
const requestURL = 'https://jsonplaceholder.typicode.com/users'

const body = {
    name: 'Vit',
    age: 40
}

function sendRequestXHR(method, url, body = null) {
    return new Promise((resolve, reject) => {
        // XMLHttpRequest (XHR)
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

sendRequestXHR('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

sendRequestXHR('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
