// 16 destructuring
// 16.1 Array
function calculateValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

//syntax ES5
const result = calculateValues(42, 10)
console.log(result) //[ 52, 32, 420, 4.2 ]
const sub = result[1]
const div = result[3]
console.log(sub, div) //32 4.2

//syntax ES6
const [sum, , mult, ...other] = calculateValues(42, 10)
console.log(sum, mult, other) //52 420 [ 4.2 ]

// 16.2 Object
const person = {
    name: 'Mike',
    age: 41,
    address: {
        country: 'Gemarny',
        city: 'Berlin'
    }
}

//syntax ES5
//const name = person.name

//syntax ES6
const {
    name: firstName = 'No name',
    age,
    car = 'Nissan',
    address: {city: homeTown, country}
} = person
console.log(firstName, age, car, homeTown, country) //Mike 41 Nissan Berlin Gemarny

const {name, ...info} = person
console.log(name, info) //Mike { age: 41, address: { country: 'Gemarny', city: 'Berlin' } }

function logPerson({name, age}) {
    console.log(`${name} ${age}`)
}

logPerson(person) //Mike 41
