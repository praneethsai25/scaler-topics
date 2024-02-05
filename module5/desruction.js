// destructure an object

let myobj = {
    name: "saipraneeth",
    age: 24,
    city: "bangalore",
    gender : "male",

    address : {
        street : "12th main",
        state : "karnataka"
    }
}

let {name :n,age: a,city,gender :g, address:{state : s}} = myobj // destructure the object

console.log(n)// use the new variable name
console.log(a)
console.log(city)
console.log(g) // use the new variable name
console.log(s) // use the new variable name


