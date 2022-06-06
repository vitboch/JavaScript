// 02 JavaScript this, call, bind, apply
function hello() {
    console.log('Hello!', this)
}

const person = {
    name: 'Vit',
    age: 40,
    sayHello: hello,
    // sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

console.log(person) //{ name: 'Vit', age: 40, sayHello: [Function: hello] }
console.log(person.sayHello()) //Hello! { name: 'Vit', age: 40, sayHello: [Function: hello] }

// console.log(this === window) //true

person.logInfo() /*
                    Vit info:
                      Name is Vit
                      Age is 40
                      Job is undefined
                      Phone is undefined
                 */

const woman = {
    name: 'Maria',
    age: 55
}

//method bind
person.logInfo.bind(woman)('Frontend', '1-234-567-89-01') /*
                                                            Maria info:
                                                              Name is Maria
                                                              Age is 55
                                                              Job is Frontend
                                                              Phone is 1-234-567-89-01
                                                          */

const womanLogInfo = person.logInfo.bind(woman, 'Backend', '9-876-543-22-00')
womanLogInfo()/*
                Maria info:
                  Name is Maria
                  Age is 55
                  Job is Backend
                  Phone is 9-876-543-22-00
              */

//method call
person.logInfo.call(woman, 'Middle-Frontend', '9-888-777-66-55') /*
                                                                    Maria info:
                                                                      Name is Maria
                                                                      Age is 55
                                                                      Job is Middle-Frontend
                                                                      Phone is 9-888-777-66-55
                                                                 */

//method apply
person.logInfo.apply(woman, ['Junior-Backend', '1-222-333-44-55']) /*
                                                                    Maria info:
                                                                      Name is Maria
                                                                      Age is 55
                                                                      Job is Junior-Backend
                                                                      Phone is 1-222-333-44-55
                                                                    */

//prototypes and context
const array = [1, 2, 3, 4, 5]

//not the most convenient option,
// since this function will need to be imported each time and some kind of array added to it
function multBy(arr, n) {
    return arr.map(function (i) {
        return i * n
    })
}

console.log(multBy(array, 5)) //[ 5, 10, 15, 20, 25 ]
console.log(multBy(array, 15)) //[ 15, 30, 45, 60, 75 ]

//create a new method via prototype
Array.prototype.multBy = function (n) {
    console.log(this) //[ 1, 2, 3, 4, 5 ]
    return this.map(i => {
        return i * n
    })


}

console.log(array.multBy(2)) //[ 2, 4, 6, 8, 10 ]

