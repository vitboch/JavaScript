// 09 proxy
//Object
const person = {
    name: 'Vit',
    age: 40,
    job: 'Web developer'
}

const objectProxy = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop: ${prop}`)
        console.log('Target:', target) //Target: { name: 'Vit', age: 40, job: 'Web developer' }
        //work with Proxy
        if (!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ')
        }
        return target[prop]
    },

    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`${prop} field in target`)
        }
    },

    has(target,prop) {
        return ['name', 'age', 'job'].includes(prop)
    },

    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
        return true //in order not to delete the value, you need to return false
    }
})

console.log(objectProxy.name) //Vit

//method set
objectProxy.name = 'Mike'
objectProxy.age = 41
console.log(objectProxy) //{ name: 'Mike', age: 41, job: 'Web developer' }
// objectProxy.pp = 2 //Error: pp field in target

//method has
console.log('name'in objectProxy) //true
console.log('age2'in objectProxy) //false

//method deleteProperty
delete objectProxy.age //Deleting... age
console.log(objectProxy) //{ name: 'Mike', job: 'Web developer' }
console.log(objectProxy)

//Functions
const log = text => `Log: ${text}`
console.log(log('check')) //Log: check

const functionProxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log(target) //[Function: log]
        console.log(thisArg) //context
        console.log(argArray) //[ { name: 'Mike', job: 'Web developer' } ]

        return target.apply(thisArg, argArray).toUpperCase()
    }
})

functionProxy(person)   //'Log: [object Object]'
functionProxy('TEST') //'Log: TEST!'
functionProxy('Hello!') //'LOG: HELLO!'

//classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray) {
        console.log('Construct...')

        return new Proxy(new target(...argArray), {
            get(t, prop) {
              console.log(`Getting prop: ${prop}`)
              return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Max', 35)
console.log(p)  //Construct...
                //Proxy {name: 'Max', age: 35}
console.log(p.name) //Getting prop: name
                    // Max

//work with Proxy
console.log(objectProxy.job_name) //Web developer Mike
console.log(objectProxy.name_name_name_job) //Mike Mike Mike Web developer


