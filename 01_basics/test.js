const accountId = 24234
let accountMail = "itstheabhii@gmail.com"
var accountPassword = "2434"
accountCity = "Mumbai"
let accountState;           // undefined

// accountId = 20                  // not allowed to change const
accountMail = "some@gmail.com"
accountPassword = 423423
accountCity = "Bengaluru"


/*
prefer not to use var because of issue in block and functional scope
*/

console.log(accountId);
console.table([accountId, accountMail, accountPassword, accountCity, accountState])
