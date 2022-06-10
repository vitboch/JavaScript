// 08 fetch
const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

delay(1000).then(() => console.log('1 second'))

const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos() {
    console.log('fetchTodos started...')
    return delay(1500)
        .then(() => fetch(url))
        .then(response => response.json())
}

fetchTodos()
    .then(data => {
        console.log('Data:', data)
    })
    .catch(err => console.error(err))

//Async, Await
async function fetchAsyncTodos() {
    console.log('fetchAsyncTodos started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    } catch (err) {
        console.error(err)
    } finally {
        console.log('Is done')
    }
}

fetchAsyncTodos()