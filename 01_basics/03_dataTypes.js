"use strict";  // treat all JS code as newer version

// alert (3+3) // we are using nodejs , not brower

console.log(3 
    +
    3) // code readabliltty should be high

let name = "devil" //string
let age = 18  // int 
let bool = true // boolean


//numer/int =>> 2 to pow 53
//bigint
//string =>> ""
// boolean =>> true/false
//null =>> standalone value
//sumbol =>> unique

//object

console.log(typeof "Yono") //string
console.log(typeof undefined) // undifined
console.log(typeof null) //object


//Primitive -stackmemory (gives the copy)

// 7 types -:: String,Number ,Boolean ,null ,undifined ,Symbol , BigInt

//Non-Primitives (Heap memory)(create the reference)
// Arrays , Objects,Functions

const heros= ["IronMan","Batman","Spiderman"]
let data ={
    name: "Asta",
    old: 17,
    world: "Fantacy",
    manga: "Black Clover",
}

const myFunction = function(){   //function stored in variable myFunction
    console.log("DEvil")
}

console.log(myFunction)