// we will be given a number  and we have to check that if the square of that number is even or not


// Imerative way of writing code

const a = 4;

const aSquare = a * a;

let iseven;


if (aSquare  % 2 == 0) { //to check even or odd we use % operator
    iseven = true;
}


else{
    iseven = false;
}


console.log(iseven); // true





// Declarative way of writing code

const checkforsquare = (b)=> (b*b % 2 ===0 ? true : false)

console.log(checkforsquare(4)); // true