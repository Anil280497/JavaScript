//  ============================================
//  Naming Conventions (Cases)
//  ============================================

var name = 'anil'; // valid identifier
var Name = 'anil'; // valid identifier
var _name = 'anil'; // valid identifier
var $name = 'anil'; // valid identifier
var NAME = 'anil'; // valid identifier
// let 1stPlace = "invalid"; 
// let 2ndItem = "invalid";
// let Function = "invalid"
// let my-name = "invalid";
// let my name = "invalid";      // SyntaxError: Unexpected identifier
// let my@name = "invalid";      // SyntaxError: Unexpected token '@'
// let my#name = "invalid";      // SyntaxError: Unexpected token '#'
// let my!name = "invalid";      // SyntaxError: Unexpected token '!

var very_long_name_variable = 'Anil'; // valid identifier
var Very_long_name_variable = 'Anil'; // valid identifier


// 1. camelCase (standard format for JS variables and functions)
let firstName = 'Anil'; // valid identifier
let lastName = 'Rathod'; // valid identifier
let isLoggedIn = true; // valid identifier
let totalAmount = 1000; // valid identifier

// 2. PascalCase (standard format for JS classes)
let UserProfile = 'PascalCaseil'; // valid identifier
let ShoppingCart = 'Product'; 
function Person() { return "constructor"; }      

// 3. snake_case (underscore separated)
let user_name = "snake_case"; //valid identifier
let total_price = 89.99; //valid identifier       
let is_logged_in = true; //valid identifier 
let User_Profile = 'Snake_Case'; //valid identifier
let USER_PROFILE = 'SNAKE_CASE'; //valid identifier

// 4. SCREAMING_SNAKE_CASE (constants vales cannot be changed)
const MAX_SIZE = 100;
// MAX_SIZE  =90;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";

// 5. Hungarian Notation (prefix with type - older style will not be using)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array




