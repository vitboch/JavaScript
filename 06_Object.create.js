// 06 Object.create, getters, setters
const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Vit',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1981,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            //getters, setters
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                console.log('Set age', value)
                // document.body.style.background = 'red'
            }
        }
    }
    )

// enumerable
console.log(person) //{name: 'Vit'}

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key]) //Key name Vit
    }
}

// writable
person.name = 'Mike'
console.log(`key 'writable' with value 'true' allows change to name to ${person.name}`)

// configurable
delete person.name //true
delete person.birthYear //false

console.log(person.name) //undefined
console.log(person.birthYear) //1981

//getters, setters
console.log(person.age) //41

person.age = 100 //Set age 100
console.log(person.age) //41

//the first parameter we pass to the Object.create
person.calculateAge() //Age: 41



