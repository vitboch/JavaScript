// 17 LocalStorage
const myNumber = 42
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number')) //42

localStorage.removeItem('number')
console.log(localStorage.getItem('number')) //null

const mike = {
    name: 'Mike',
    age: 40
}

localStorage.setItem('person', JSON.stringify(mike))
const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Vit'

console.log(person) //{name: 'Vit', age: 40}

// synchronize data from local storage across different tabs
// window.onstorage = () => {}
window.addEventListener('storage', event => {
    console.log(event)
})
