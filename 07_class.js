// 07 class
// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

class Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am Animal')
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

console.log(animal) //{ name: 'Animal', age: 5, hasTail: true }

animal.voice() //I am Animal
console.log(animal.type) //undefined
console.log(Animal.type) //ANIMAL

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log('I am cat')
    }

    get ageInfo() {
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})

console.log(cat) //Cat { name: 'Cat', age: 7, hasTail: true, color: 'black' }
cat.voice() //I am Animal
            // I am cat
console.log(Cat.type) //CAT
console.log(cat.ageInfo) //49
cat.ageInfo = 8
console.log(cat.ageInfo) //56

//working with classes
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'green'
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const circle1 = new Circle({
    selector: '#circle',
    size: 90,
    color: 'blue'
})
