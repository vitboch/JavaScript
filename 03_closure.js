//03 closure
// #1
function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(42)
console.log(calc) //[Function (anonymous)]

// createCalcFunction(42)()
calc() //42000

// #2
function createIncrementor(n) {
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
console.log(addOne(10)) //11
console.log(addOne(41)) //42

const addTen = createIncrementor(10)
console.log(addTen(10)) //20
console.log(addTen(41)) //51

//#3
function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
console.log(comUrl('google')) //https://google.com
console.log(comUrl('github')) //https://github.com

const ruUrl = urlGenerator('ru')
console.log(ruUrl('yandex')) //https://yandex.ru
console.log(ruUrl('mail')) //https://mail.ru

// #4
/*
TASK

Write your own function bind
work example:

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Mike',
    age: 40,
    job: 'Web-developer'
}

const person2 = {
    name: 'Helen',
    age: 35,
    job: 'SMM'
}

bind(person1, logPerson)
bind(person2, logPerson)


 */
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Mike',
    age: 40,
    job: 'Web-developer'
}

const person2 = {
    name: 'Helen',
    age: 35,
    job: 'SMM'
}

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

bind(person1, logPerson)() //Person: Mike, 40, Web-developer
bind(person2, logPerson)() //Person: Helen, 35, SMM

