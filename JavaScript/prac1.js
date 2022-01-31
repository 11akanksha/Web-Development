let str1 = "Hi";
let str2 = 'Hello';
let str3 = `${str1} ,How are you?I just wanted to greet you with ${str2}`;

console.log(str1, str2, str3);

//O/p) Hi Hello Hi ,How are you?I just wanted to greet you with Hello

let a = 10 + 11 + 'name';
let b = "name" + 10 + 11;

console.log(a, b);

//O/p) 21name name1011

//Hoisting:
console.log(a);
var a = 10;

//O/p) undefined

console.log(a);
let a = 10;

//O/p) console.log(a);
 //           ^

//ReferenceError: Cannot access 'a' before initialization

function sum() {
    console.log(we);
}
sum();
var we = 2;

//O/p) undefined
