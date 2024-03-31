const name ="Asta"
const age=17

//console.log(name + age + "value") //output Asta17value   //old way

console.log(`My name is ${name} and my age is ${age}`)

const gameName = new String ('Demon-King')

console.log(gameName[0]) // give the value present in index 0
console.log(gameName.length) //gives the length of the string
console.log(gameName.toUpperCase()) //convert all the character in the string in the uppercase
console.log(gameName.charAt(2)) // give the character present in the given index
console.log(gameName.indexOf('K')) //give the index og the given character (it's a case sensitive HANDLE WITH CARE)

const newString = gameName.substring(0,4)
console.log(newString)

const newStringOne = "    Yuno   "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimStart())
console.log(newStringOne.trimEnd())

console.log(gameName.replace('-',''))
console.log(gameName.includes('emon'))
console.log(gameName.includes('asta'))