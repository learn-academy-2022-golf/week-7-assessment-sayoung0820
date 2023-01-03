// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("greeter", () => {
//   it("returns a string that says Hi, Golf 2022!", () => {
//     expect(greeter()).toEqual("Hi, Golf 2022!")
//   })
// })

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("newSentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ];
   const output = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(newSentence(people)).toEqual(output)
  })
})

// ReferenceError: newSentence is not defined

// b) Create the function that makes the test pass.

// Pseudocoding:
// Create a function called newSentence that takes in one parameter, an array 
// .map to iterate over the array 
//.split to split into string
//.join to join them together back into an array


// const newSentence = (array) => {
//   for (let i = 1; i < array.length; i++)
//   let wordsArr = object
//   .split
// }

const newSentence = (array) => {
  array.map(object => )
  .join(" ")
  return `${object.name} is ${object.occupation}`
}

const newSentence = (array) => {
  let names = ["ford prefect","zaphod beeblebrox", "arthur dent"]
  let deck = []
  for (let i = o; i < names.length; i++) {
    
  }
}

// Got stuck on this one 

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]

describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])

  })
})

// b) Create the function that makes the test pass.

// Pseudocoding:
// Create a function called remainders that takes in one parameter, an array 
// higher order function .filter
// typeof to pull only numbers
// return subset array of number values 
// .map to iterate over subset array of numbers
// return remainders

const remainders = (array) => {
  return array.filter(value => typeof value === 'number')
  .map (value => value % 3)}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


// Expected output: 99
// Expected output: 1125

describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

//  ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// Pseudocoding:
// Create a function called sumCubed that takes in one parameter, an array 
// create variable for total sum, set at 0
// use for loop to iterate through the length of the array
// use Math.pow, so that each time it iterates through the for loop, it multiplies each value by the power of 3
// return total sum


const sumCubed = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += Math.pow(array[i], 3)
  }
  return total;
}

// const sumCubed = (array) => {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i] ** 3;
//   }
//   return total;
// }

// Both functions passed