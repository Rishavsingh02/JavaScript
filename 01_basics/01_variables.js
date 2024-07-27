const accountId = 144553
let accountEmail = "rishav.kumar1022@gmail.com"
var accountPassword = "12345"
accountCity = "Munger"
let accountState;

// accountId = 2 // not allowed


accountEmail = "rsingh@gmail.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])