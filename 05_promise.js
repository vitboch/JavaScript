// 05 promise

//bad practice
// too much nesting
// too many callbacks
// this code will be hard to maintain
console.log('Request data...')

setTimeout(() => {
    console.log('Preparing data...')

    const dataBackend = {
        server: 'aws',
        port: '2000',
        status: 'working'
    }

    setTimeout(() => {
        dataBackend.modified  = false
        console.log('Data received', dataBackend)
    })
}, 2000)

/* queue in console

    Request data...
    Preparing data...
    Data received { server: 'aws',
                    port: '2000',
                    status: 'working',
                    modified: true
                    }
*/

//using a promise makes this easier
const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: '2000',
            status: 'working'
        }
        resolve(backendData)
    }, 3000)
})

p.then(backendData => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            backendData.modified  = true
            resolve(backendData)
        },3000)
    })
})
    .catch(err => console.error('Error:', err))
    .then(clientData => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
    })
    .then(modifiedData => {
    console.log('Modified', modifiedData)
    })
    .finally(() => console.log('Finally'))

//working with async
const sleep = ms => {
    return new Promise(resolve => {
        return setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(() => console.log('After two seconds'))
sleep(3000).then(() => console.log('After three seconds'))

//method all
Promise.all([sleep(1000), sleep(6000)])
    .then(() => console.log('All promises'))

//method race
Promise.race([sleep(1000), sleep(6000)])
    .then(() => console.log('Race promises'))