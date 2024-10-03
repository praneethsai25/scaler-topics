// function printFirstName(firstname , cb) {
//     console.log(firstname)
//     cb("Doe")

    
// }

// function printLastName(lastname) {
//     console.log(lastname)
// }


// printFirstName("John", printLastName) //callback function here 



// printLastName("Doe")


const isEven = (n) =>{
    return n%2==0
}

let printResult =(evenfn , num ) =>{
 
    const isNumEven = evenfn(num)

    console.log(`The number ${num} is even : ${isNumEven}`)
}

printResult(isEven , 7) //callback function here