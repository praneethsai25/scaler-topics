// the for of statement creates a loop itreating over iteratble oblects



var scores = [80, 90, 70, 60, 50, 40]


// syntax
for(var score of scores){
    score = score + 5
    console.log(score)

}
// now to access the indexs or keys

// method - entries()

let colors = ["red", "green", "blue"]


for (var [index , color] of colors.entries()){
    // console.log(index +'->>'+color)
}
// output
// 0->>red
// 1->>green
// 2->>blue

// for of loop can be used in strings
// var str = 'scalertopics'
// for (var c of str){
//     console.log(c)
// }

   let num1=2;
let num2=0o2;
if(num1==num2)
 console.log("true");
else
 console.log("false");   
