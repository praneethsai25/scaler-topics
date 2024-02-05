
//remove functon and use arrow function ex: =>
//pat arrow functions
// 1. remove function keyword
// 2. add => after the parameters
// 3. remove the curly braces
// 4. remove the return keyword
// 5. if there is only one parameter, remove 
let test1 = ()=>{
    console.log(1)
}

let test2 = (a)=>{
    console.log(a+2)
}

let test3 = (a ,b)=>{
    console.log(a+b)
}

test1()

test2(4)

test3(2,6)
// arrow function
// another way of writing arrow function in one line

let test4 = a => console.log(a+2)