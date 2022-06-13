// 10 proxy, wrapper
const withDefaultValue = (target, defaultValue) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ?  obj[prop] : defaultValue
    })
}

const position = withDefaultValue(
    {
    x: 24,
    y: 42
    },
    0
)

console.log(position) //{ x: 24, y: 42 }

// hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p =>!p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

//Reflect
console.log(Reflect.ownKeys(position)) //[ 'x', 'y' ]

// void 0 = undefined
console.log(void 0) //undefined

const data = withHiddenProps(
    {
        name: 'Vit',
        age: 40,
        _uid: '1234567'
    }
)

console.log(data) //{ name: 'Vit', age: 40, _uid: '1234567' }
console.log(data.name) //Vit
console.log(data.age) //40
console.log(data._uid) //undefined
console.log('_uid' in data) //false
for (let key in data) console.log(key)  //name
                                        //age
console.log(Object.keys(data)) //[ 'name', 'age' ]

// Optimization
const IndexArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push': return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }

                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexArray([
    {id: 1, name: 'Vit', job: 'Web developer', age: 40},
    {id: 2, name: 'Mike', job: 'Senior web developer', age: 41},
    {id: 3, name: 'Nikita', job: 'Data science', age: 25},
    {id: 4, name: 'Georgy', job: 'Fullstack', age: 50}
])

users.push( {id: 5, name: 'Sergey', job: 'Junior', age: 39})

console.log(users[4]) //{ id: 5, name: 'Sergey', job: 'Junior', age: 39 }
console.log(users.findById(3)) //{ id: 3, name: 'Nikita', job: 'Data science', age: 25 }
