const accountId = 1445853   // const variables are fixed that connot be changed
let accountEmail = "devil@google.com"
var accountPassward = "183256"
accountCity = "jaipur"
let accountholder      // gives output undifined because variable is declared but the value is not given
accountEmail = "asta@gmail.com"
accountPassward = "586821"
accountCity ="odisha"

console.log(accountId);

/*
prefer not to use 
beacuse of issue in block scope snd fuctional scope
 */

console.table ([accountId,accountEmail,accountPassward,accountCity,accountholder])