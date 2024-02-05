console.log(a)
greet()




var a ='hi'


function greet(){
    console.log('Hello from sai')

}

// console.log(a) // hoisting
// console.log(greet) // hoisting
//output: hi    
// Hello from sai


var add = function(a,b){
    console.log(a+b)
}  //function expression


add(10,20) // arguments
// function checkAge(data) {
//     if (data === { age: 18 }) {
//     console.log("You are an adult!");
//     } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//     } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//     }
//    }
   
//    checkAge({ age: 18 });


//    num1=3;
// function cal() {
// num1=6;
// num2=5;
// num3=num2*num1;
// console.log(num3);
// }
// cal();

// function Add(){
//     console.log(answer)
//     var answer = 2
// };
// Add()   //undefined
function fn(){
    return 4+5;
}

fn(3,7);