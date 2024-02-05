// var a = 21

var a = 35// redeclaration of variable a


// console.log(a) // 35


// second issuse with var is that it can be redeclared	

if (a===35){
    var b = 50
    console.log(b) // 50
}

//variables declared with var keyword are not blocked scoped they are function scoped
// console.log(b)
// output
// 50
// 50


function test(){
    var c = 100
    console.log(c) // 100
}
 test()
 console.log(c) // ReferenceError: c is not defined