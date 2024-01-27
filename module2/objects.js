// in js objects are in key value pair
var person = {
    firstname: "sai",
    lastname: "praneeth",
    age: 50,
    owncar: false
};
// console.log("person")

// // dot notation
console.log(person.owncar)

// // bracket notation

console.log(person['firstname']) // sai <=

var captian =
{
    firstname: "steve",
    lastname: "rogers",
    age: 103,
//    we insert an array in this
   friends: ['bucky', 'bruce', 'tony stark'],
   isavenger : true,
    address : {
         state: 'new york cityyy',
         city:
          {
        name: 'brookings',
        pincode: 453211
         }
        }
    }
 console.log(captian.friends[1]) //bruce


console.log(captian.address.city.name)
//brookings

captian.isavenger = false

console.log(captian);


 captian.movies=['age of ultron','civil war','firstavg'];

console.log(captian);



delete captian.age

console.log(captian)

