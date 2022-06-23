// 13 additional data structures
// Map, Set, WeakMap, WeakSet

// 13.1 Map
const object = {
    name: 'Vit',
    age: 40,
    job: 'Web developer'
}

const entries = [
    ['name', 'Vit'],
    [ 'age', 40,],
    ['job', 'Web developer']
]

console.log(Object.entries(object)) //[ [ 'name', 'Vit' ], [ 'age', 40 ], [ 'job', 'Web developer' ] ]
console.log(Object.fromEntries(entries)) //{ name: 'Vit', age: 40, job: 'Web developer' }

const map = new Map(entries)
console.log(map) //Map(3) { 'name' => 'Vit', 'age' => 40, 'job' => 'Web developer' }
console.log(map.get('job')) //Web developer

// add two parameters
map
    .set('newField', 42)
    .set(object, 'Value of object')
    .set(NaN, 'type is Nan')
console.log(map) /*
                    Map(6) {
                      'name' => 'Vit',
                      'age' => 40,
                      'job' => 'Web developer',
                      'newField' => 42,
                      { name: 'Vit', age: 40, job: 'Web developer' } => 'Value of object',
                      NaN => 'type is Nan'
                    }
                 */

// delete two parameters
map.delete('job')

// is there  a 'job' value?
console.log(map.has('job')) //false

// find out the size of this map
console.log(map.size) //5

// clear all map
// map.clear()
// console.log(map.size) // 0

for (let [key, value] of map) {
    console.log(key, value) /*
                            name Vit
                            age 40
                            newField 42
                            { name: 'Vit', age: 40, job: 'Web developer' } Value of object
                            NaN type is Nan
                            */
}

for (let val of map.values()) {
    console.log(val) /*
                        Vit
                        40
                        42
                        Value of object
                        type is Nan
                     */
}

for (let key of map.keys()) {
    console.log(key) /*
                        name
                        age
                        newField
                        { name: 'Vit', age: 40, job: 'Web developer' }
                        NaN
                     */
}

map.forEach((value, key, map) => {
    console.log(value, key) /*
                            Vit name
                            40 age
                            42 newField
                            Value of object { name: 'Vit', age: 40, job: 'Web developer' }
                            type is Nan NaN
                            */
})

// syntax  ES5
const arrayES5 = Array.from(map)
console.log(arrayES5) /*
                        [
                          [ 'name', 'Vit' ],
                          [ 'age', 40 ],
                          [ 'newField', 42 ],
                          [ { name: 'Vit', age: 40, job: 'Web developer' }, 'Value of object' ],
                          [ NaN, 'type is Nan' ]
                        ]
                    */

// syntax  ES6
//Spread Operator
const arrayES6 = [...map]
console.log(arrayES6) /*
                        [
                          [ 'name', 'Vit' ],
                          [ 'age', 40 ],
                          [ 'newField', 42 ],
                          [ { name: 'Vit', age: 40, job: 'Web developer' }, 'Value of object' ],
                          [ NaN, 'type is Nan' ]
                        ]
                   */

const mapObject = Object.fromEntries(map.entries())
console.log(mapObject) /*
                        {
                          name: 'Vit',
                          age: 40,
                          newField: 42,
                          '[object Object]': 'Value of object',
                          NaN: 'type is Nan'
                        }
                       */

//task: record for each user when he visited the site
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'John'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[1])) //2022-06-22T05:13:43.813Z

//========
// 13.2 Set
const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 5, 5])
console.log(set) //Set(5) { 1, 2, 3, 4, 5 }

set.add(6).add(7).add(7).add(7).add(8).add(9).add(10)
console.log(set) //Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
console.log(set.has(10)) //true
console.log(set.has(42)) //false
console.log(set.size) //10

set.delete(6)
console.log(set) //Set(9) { 1, 2, 3, 4, 5, 7, 8, 9, 10 }
console.log(set.size) //9

set.clear()
console.log(set.size) //0

set.add(5).add(4).add(3).add(2).add(1).add(0)
console.log(set) //Set(6) { 5, 4, 3, 2, 1, 0 }
console.log(set.values()) //[Set Iterator] { 5, 4, 3, 2, 1, 0 }
console.log(set.keys()) //[Set Iterator] { 5, 4, 3, 2, 1, 0 }

console.log(set.entries()) /*
                            [Set Entries] {
                              [ 5, 5 ],
                              [ 4, 4 ],
                              [ 3, 3 ],
                              [ 2, 2 ],
                              [ 1, 1 ],
                              [ 0, 0 ]
                            }
                           */

for (let key of set) {
    console.log(key) /*
                        5
                        4
                        3
                        2
                        1
                        0
                      */
}

//return unique values from an array
function uniqValues(array) {
    return [...new Set(array)]
}

console.log(uniqValues([1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 2, 1, 1, 1])) //[ 1, 2, 3, 4, 5 ]

//=======
// 13.3 WeakMap
let objWM = {name: 'weak map'}
const weakMap = new WeakMap([
    [objWM, 'object data']
])

//get
console.log(weakMap.get(objWM)) //object data
// had
console.log(weakMap.has(objWM)) //true

objWM = null
//get
console.log(weakMap.get(objWM)) //undefined
// had
console.log(weakMap.has(objWM)) //false

console.log(weakMap) //WeakMap { <items unknown> }

//find out about the user by cache
const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let john = {name: 'John'}
let maria = {name: 'Maria'}

cacheUser(john)
cacheUser(maria)

console.log(cache.has(john)) //true
console.log(cache.has(maria)) //true
console.log(cache.get(john)) //1655960192995
console.log(cache.get(maria)) //1655960200650

maria = null
console.log(cache.has(maria)) //false

//=======
// 13.4 WeakSet
console.log(users) //[ { name: 'Elena' }, { name: 'Alex' }, { name: 'John' } ]

const visitsWS = new WeakSet()

visitsWS.add(users[0]).add(users[1]).add(users[2])

console.log(visitsWS.has(users[0])) //true
console.log(visitsWS.has(users[1])) //true
console.log(visitsWS.has(users[2])) //true

//delete user
users.splice(1,1)

console.log(visitsWS.has(users[0])) //true
console.log(visitsWS.has(users[1])) //true
console.log(visitsWS.has(users[2])) //false





