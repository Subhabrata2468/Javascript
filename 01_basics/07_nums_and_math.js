const score = 400
console.log(score)
const balance = new Number (100)
console.log(balance)

console.log(balance.toString().length)  //first convert he balance into string then find find the length of the score
console.log(balance.toFixed(3)) // gives the number of zeros after the decimal point

const otherNumber=123.589616
console.log(otherNumber.toPrecision(3)) //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// range 1 - 21

const hundred=1000000
console.log(hundred.toLocaleString()) //bydefault it is represented by us standard design
console.log(hundred.toLocaleString('en-IN'))

// ++++++++++++++++++++++++++++++ Maths **************************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.random(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.min(4,5,6,9,2))
console.log(Math.max(5,6,9,8,2,3))


//Math.random

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const max = 10
const min = 20
console.log(Math.floor(Math.random()*(max-min+1))+min) 