// 12 Array Methods
const people = [
    {name: 'Vit', age: 40, budget: 40000},
    {name: 'Mike', age: 41, budget: 250000},
    {name: 'Nikita', age: 25, budget: 120000},
    {name: 'Georgy', age: 50, budget: 35000}
]

// object iteration
// syntax  ES5
for (let i = 0; i < people.length; i++) {
    console.log(people[i]) /*
                            { name: 'Vit', age: 40, budget: 40000 }
                            { name: 'Mike', age: 41, budget: 250000 }
                            { name: 'Nikita', age: 25, budget: 120000 }
                            { name: 'Georgy', age: 50, budget: 35000 }
                            */
}

// object iteration
//syntax  ES6
for (let person of people) {
    console.log(person) /*
                            { name: 'Vit', age: 40, budget: 40000 }
                            { name: 'Mike', age: 41, budget: 250000 }
                            { name: 'Nikita', age: 25, budget: 120000 }
                            { name: 'Georgy', age: 50, budget: 35000 }
                            */
}

// forEach
people.forEach(function (objectPerson,index,arrayPeople) {
    console.log(objectPerson)
    console.log(index)
    console.log(arrayPeople) /*
                                0
                                [
                                  { name: 'Vit', age: 40, budget: 40000 },
                                  { name: 'Mike', age: 41, budget: 250000 },
                                  { name: 'Nikita', age: 25, budget: 120000 },
                                  { name: 'Georgy', age: 50, budget: 35000 }
                                ]
                                { name: 'Mike', age: 41, budget: 250000 }
                                1
                                [
                                  { name: 'Vit', age: 40, budget: 40000 },
                                  { name: 'Mike', age: 41, budget: 250000 },
                                  { name: 'Nikita', age: 25, budget: 120000 },
                                  { name: 'Georgy', age: 50, budget: 35000 }
                                ]
                                { name: 'Nikita', age: 25, budget: 120000 }
                                2
                                [
                                  { name: 'Vit', age: 40, budget: 40000 },
                                  { name: 'Mike', age: 41, budget: 250000 },
                                  { name: 'Nikita', age: 25, budget: 120000 },
                                  { name: 'Georgy', age: 50, budget: 35000 }
                                ]
                                { name: 'Georgy', age: 50, budget: 35000 }
                                3
                                [
                                  { name: 'Vit', age: 40, budget: 40000 },
                                  { name: 'Mike', age: 41, budget: 250000 },
                                  { name: 'Nikita', age: 25, budget: 120000 },
                                  { name: 'Georgy', age: 50, budget: 35000 }
                                ]
                                */
})

// forEach
// syntax  ES5
people.forEach(function (person) {
    console.log(person) /*
                        { name: 'Vit', age: 40, budget: 40000 }
                        { name: 'Mike', age: 41, budget: 250000 }
                        { name: 'Nikita', age: 25, budget: 120000 }
                        { name: 'Georgy', age: 50, budget: 35000 }
                        */
})

// forEach
// syntax  ES6
people.forEach(person => console.log(person)) /*
                                                { name: 'Vit', age: 40, budget: 40000 }
                                                { name: 'Mike', age: 41, budget: 250000 }
                                                { name: 'Nikita', age: 25, budget: 120000 }
                                                { name: 'Georgy', age: 50, budget: 35000 }
                                                */

// map
// syntax  ES6
const namePeople = people.map(person => person.name)
console.log(namePeople) // [ 'Vit', 'Mike', 'Nikita', 'Georgy' ]

// filter
// syntax  ES5
const adults = []
for (let i = 0; i < people.length; i++) {
   if (people[i].age > 40) {
       adults.push(people[i]) /*
                                [
                                  { name: 'Mike', age: 41, budget: 250000 },
                                  { name: 'Georgy', age: 50, budget: 35000 }
                                ]
                              */
   }
}
console.log(adults)

// filter
// syntax  ES6
const young = people.filter(person => person.age < 40)

console.log(young) // [ { name: 'Nikita', age: 25, budget: 120000 } ]

// reduce
let amount = 0
for (let i = 0; i < people.length; i++) {
    amount += people[i].budget
}

console.log(amount) // 445000

// reduce
// syntax  ES6
const amountReduce = people
    .reduce((total, person) => total + person.budget, 0)

console.log(amountReduce) //445000

// find
const mike = people.find(person => person.name === 'Mike')
console.log(mike) //{ name: 'Mike', age: 41, budget: 250000 }

// findIndex
const nikitaIndex = people.findIndex(person => person.name === 'Nikita')
console.log(nikitaIndex) //2

//chain = each method on a new line
const newPeople = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })

console.log(newPeople) /*
                        [
                          { info: 'Vit (40)', budget: 40000 },
                          { info: 'Mike (41)', budget: 250000 },
                          { info: 'Nikita (25)', budget: 120000 },
                          { info: 'Georgy (50)', budget: 35000 }
                        ]
*/
