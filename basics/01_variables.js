const accountId = 123456    //recommended to use const
let accountEmail = "abhishekmote1211@gmail.com"  //recommended to use let
var accountPassword = "12345"   //not recommended to use var
accountCity = "Pune"   //global variable
let accountState; //undefined
let accountCountry = null; //null

//accountId = 2 not allowed

accountEmail = "abhi1211@gmail.com"
accountPassword = "67890"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountCountry]);

//variable names are case sensitive
//cannot start with number
//cannot have space or hyphen (-)
//cannot be a reserved keyword like var, let, const, if, else, return, function
//use camelCase
//use meaningful names
//use _ if needed
//use uppercase for constants that never change like PI = 3.14, API_KEY = "1234567890"
//use lowercase for other variables like accountId, accountEmail, accountPassword
//use uppercase for global variables like BASE_URL = "https://api.example.com"
// var is function scoped
// let and const are block scoped
// avoid using var
// use const by default, use let if you need to reassign
// avoid using global variables
// use strict mode "use strict"; at the top of the file to avoid accidental global variables
