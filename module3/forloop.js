// loops are the statements that we can use to repeat the execution of a statement or a block of statements.

// var a = 'Hello World';


// for loop
// for (initialization; condition; increment/decrement) 

// for (var i = 0; i < 10; i++) {
//     console.log(a);
// }
// 10 times Hello World will be printed

var num = [2, 3, 4, 5, 6, 7, 8];

var sqauredArr = []; // empty array

for(var i=0; i<num.length; i++)
{   
    sqauredArr.push(num[i] * num[i]);

}

console.log(sqauredArr);