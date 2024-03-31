 let score= "33as"

 console.log(typeof score)
 console.log(typeof (score))

 //typeCasting
 let convertNumber= Number(score)
 console.log(typeof convertNumber)
 console.log(convertNumber)

 //"33" => 33
// "33acs" => NaN
//true => 1 && false => 0
//"" => false
//"DEvil" => true

let trial= true

 console.log(typeof trial)
 console.log(typeof (trial))

 //typeCasting
 let convertNumber2= Number(trial)
 console.log(typeof convertNumber2)
 console.log(convertNumber2)

 let loggedIn = 1 
 let booleanLoggedIn = Boolean(loggedIn)
 console.log(booleanLoggedIn)

 let loggedIn1 = 33
 let booleanLoggedIn1 = String(loggedIn1)
 console.log(booleanLoggedIn1)
 console.log(typeof booleanLoggedIn1)


 // **************************** Operation ****************************

 let val = 3
 let negeVal = -val
 console.log (negeVal)

 let str1 = "Demon"
 let str2 = "King" 
 console.log(str1+str2)

 console.log("1" + 2) //12
 console.log(1+"2") //12
 console.log("1"+2+2) //122
 console.log(2+2+"1") //41
 console.log((3+4)*5%3) //2
 console.log(+true)
 console.log(+"")

 let num1,num2,num3
 num1=num2=num3=2+2

 let counter=100
 ++counter //pre
 console.log(counter)
 counter++ //post
 console.log(counter)