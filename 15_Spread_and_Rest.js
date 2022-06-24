// 15 Spread and Rest
const citiesRussia = ['Moscow', 'SaintPetersburg', 'Novosibirsk', 'Yekaterinburg']
const citiesEurope = ['London', 'Berlin', 'Madrid']

const citiesRussiaPopulation = {
    Moscow: 12655050,
    SaintPetersburg: 5384342,
    Novosibirsk: 1620162,
    Yekaterinburg: 1495066
}

const citiesEuropePopulation = {
    London: 8961989,
    Berlin: 3669491,
    Madrid: 3334730
}

// 15.1 Spread
console.log(citiesRussia) //[ 'Moscow', 'SaintPetersburg', 'Novosibirsk', 'Yekaterinburg' ]
console.log(...citiesRussia) //Moscow SaintPetersburg Novosibirsk Yekaterinburg

// syntax ES5
const citiesAll = citiesRussia.concat(citiesEurope)
console.log(citiesAll) /*
                            [
                              'Moscow',
                              'SaintPetersburg',
                              'Novosibirsk',
                              'Yekaterinburg',
                              'London',
                              'Berlin',
                              'Madrid'
                            ]
                        */

// syntax ES6
const allCities = [...citiesRussia, 'Los Angeles',...citiesEurope]
console.log(allCities) /*
                            [
                              'Moscow',
                              'SaintPetersburg',
                              'Novosibirsk',
                              'Yekaterinburg',
                              'Los Angeles',
                              'London',
                              'Berlin',
                              'Madrid'
                            ]
                        */

console.log(citiesRussiaPopulation) /*
                                        {
                                          Moscow: 12655050,
                                          SaintPetersburg: 5384342,
                                          Novosibirsk: 1620162,
                                          Yekaterinburg: 1495066
                                        }
                                        */

// console.log(...citiesRussiaPopulation) //TypeError: Found non-callable @@iterator
console.log({...citiesRussiaPopulation}) /*
                                            {
                                              Moscow: 12655050,
                                              SaintPetersburg: 5384342,
                                              Novosibirsk: 1620162,
                                              Yekaterinburg: 1495066
                                            }
                                            */

console.log({...citiesRussiaPopulation, ...citiesEuropePopulation}) /*
                                                                    {
                                                                      Moscow: 12655050,
                                                                      SaintPetersburg: 5384342,
                                                                      Novosibirsk: 1620162,
                                                                      Yekaterinburg: 1495066,
                                                                      London: 8961989,
                                                                      Berlin: 3669491,
                                                                      Madrid: 3334730
                                                                    }
                                                                    */

// Practice
const numbers = [1, 2, 42, 17]
console.log(Math.max(1, 2, 42, 17)) //42
console.log(Math.max(numbers)) //NaN

// syntax ES5
console.log(Math.max.apply(null, numbers)) //42
// syntax ES6
console.log(Math.max(...numbers)) //42

const divs = document.querySelectorAll('div')
console.log(divs, Array.isArray(divs)) //NodeList(5)[div#box1, div#box2, div#box3, div#box4, div#circle] false
const nodes = [...divs]
console.log(nodes, Array.isArray(nodes)) //(5)[div#box1, div#box2, div#box3, div#box4, div#circle] true

// 15.2 Rest
function sum(a, b, ...rest) {
    console.log(rest) //[ 42, 17 ]
    return a + b
}

// Spread! a = 1, b = 2
console.log(sum(...numbers)) // 3

function sumAll(...rest) {
    return rest.reduce((a, i) => a + i, 0)
}

console.log(sumAll(...numbers)) //62

// task: get value from array
// syntax ES5
const c = numbers[2]
const d = numbers[3]
console.log(c, d) //42 17

// syntax ES5
// destructuring
const [a, b, ...other] = numbers
console.log(a, b, other) //1 2 [ 42, 17 ]

const person = {
    name: 'John',
    age: 55,
    city: 'London',
    country: 'England'
}

//destructuring
const {name, age, ...address} = person
console.log(name, age, address) //John 55 { city: 'London', country: 'England' }
