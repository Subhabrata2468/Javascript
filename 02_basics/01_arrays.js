 // arrays

 const myArr = [0,1,2,3,50,5]  //object
 console.log(myArr[0])
 console.log(typeof myArr)
 const myArr2 =["iron man","spider man"]

 const arr = new Array(1,2,3,5,6) //object
 console.log(arr[2])
 console.log(typeof arr)
 
 //Array methods

 myArr.push(100)  // push the value at the last of the array
 myArr.push(200)
 console.log(myArr)
 myArr.pop() // remove the value from last one element in the array
 console.log(myArr)

 myArr.unshift(159)  // add the value at first of the array
 console.log(myArr)

 myArr.shift() //remove the value at first of the array
 console.log(myArr)

 console.log(myArr.includes(3)) //returns true if the element is present in the array
 console.log(myArr.indexOf(50)) //returns the index value of the given number or else -1 as o/p

 const newArr=myArr.join()   // change the datatype to string
 console.log(myArr)
 console.log(newArr)
 console.log(typeof newArr)

 // slice v/s splice
 console.log("A",myArr)
 const x = myArr.slice(1,3)
 console.log(x)
 console.log("B",myArr)
 const y = myArr.splice(1,3)
 console.log(y)
 console.log("C",myArr)