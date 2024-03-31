//Dates

let myDate= new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let createDate = new Date(2023,0,23)
console.log(createDate.toLocaleString())

let createDate1 = new Date("01-14-2023")
console.log(createDate1.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createDate.getTime())


let newDate = new Date ()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday: "long",
    month : "numeric"
})