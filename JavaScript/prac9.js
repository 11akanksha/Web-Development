let json = '{bad JSON}';
let json2 = "{'name' : 'Emma'}";

try {
    let user = JSON.parse(json);
    console.log(user.name);
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}
try {
    let user = JSON.parse(json2);
    console.log(user.name);
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}

// O/p:
SyntaxError
Unexpected token b in JSON at position 1
SyntaxError
Unexpected token ' in JSON at position 1

//----------------------------------------------------------


let mySet = new Set();
mySet.add(1);
mySet.add("nvla");
mySet.add(true);
mySet.add(true);
console.log(mySet.has(1));
console.log();
console.log(mySet.delete(true));
console.log();
console.log(mySet);
console.log();
mySet.add(2);
mySet.add(3);
console.log(mySet);
console.log();
console.log(mySet.size);
console.log();

for (let item of mySet) {
    console.log(item);
}

//O/p:
true

true

Set(2) { 1, 'nvla' }

Set(4) { 1, 'nvla', 2, 3 }

4

1
nvla
2
3
