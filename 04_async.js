//04 async
console.log('Start')

console.log('Start2')

function timeout5sec() {
    console.log('timeout5sec')
}

// window.setTimeout()
setTimeout(function() {
    console.log('Inside timeout, after 2000 seconds')
}, 2000)

setTimeout(timeout5sec, 5000)

setTimeout(function() {
    console.log('Timeout 0 seconds')
}, 0)

console.log('End ')

//event loop

        /*
                Start
                Start2
                End
                Timeout 0 seconds
                Inside timeout, after 2000 seconds
                timeout5sec
        */
