// 01 JavaScript Prototype

const person = new Object({
    name: 'Vit',
    age: 40,
    greet: function () {
        console.log('Greet!')
    }
})

console.log(person) //{ name: 'Vit', age: 40, greet: [Function: greet] }
person.greet() //Greet!
console.log(person.toString()) //[object Object]

//adding your own function
Object.prototype.sayHello = function() {
    console.log('Hello!')
}

person.sayHello() //Hello!

const woman = Object.create(person)

console.log(woman) //{}
console.log(woman.age) //40
woman.name = 'Maria'
woman.age = 55
console.log(woman) //{ name: 'Maria', age: 55 }

const str = new String('I am string')
console.log(str.length) //11



