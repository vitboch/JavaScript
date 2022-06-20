// 11 generators
function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const srt = strGenerator()
console.log(srt.next()) //{ value: 'H', done: false }
console.log(srt.next()) //{ value: 'e', done: false }
console.log(srt.next()) //{ value: 'l', done: false }
console.log(srt.next()) //{ value: 'l', done: false }
console.log(srt.next()) //{ value: 'o', done: false }
console.log(srt.next()) //{ value: undefined, done: true }

//generators loop
function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGen(3)
console.log(num.next()) //{ value: 0, done: false }
console.log(num.next()) //{ value: 1, done: false }
console.log(num.next()) //{ value: 2, done: false }
console.log(num.next()) //{ value: undefined, done: true }

//iterator = repeat generator logic
const iterator = {
    generator(n = 2) {
        let i= 0

        return {
            next() {
                if(i < n) {
                    return {value: ++i, done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
}

const itr = iterator.generator()
console.log(itr) //{ next: [Function: next] }
console.log(itr.next()) //{ value: 1, done: false }
console.log(itr.next()) //{ value: 2, done: false }
console.log(itr.next()) //{ value: undefined, done: true }

//for of
for (let key of 'Hello') {
    console.log(key) /*
                        H
                        e
                        l
                        l
                        o
                            */
}

for (let key of [1, 1, 2, 3, 5, 8]) {
    console.log(key) /*
                        1
                        1
                        2
                        3
                        5
                        8
                            */
}

const createIterator = {
    [Symbol.iterator](n = 3) {
        let i= 0
        return {
            next() {
                if(i < n) {
                    return {value: ++i, done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
}

for (let key of createIterator) {
    console.log(key) /*
                        1
                        2
                        3
                            */
}

function* iter(n = 4) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (let key of iter(5)) {
    console.log(key) /*
                        0
                        1
                        2
                        3
                        4
                            */
}
