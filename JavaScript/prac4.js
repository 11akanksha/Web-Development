var str = "Apple";
str[0] = 'P';
console.log(str);

//O/p:
Apple

const obj = { a: 1, b: 2 };
for (let [key, value] of Object.entries(obj)) {
    value = value * 20;
    console.log(key, value);
}

//O/p:
a 20
b 40

function abcd() {
    console.log(this);
}
abcd();

//O/p:(in VS code)
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}

let obj = {
    a: 1,
    getA: function () {
        console.log(this, this.a);
    }
};

let obj1 = {
    a: 18
};

let fn = obj.getA;
let fnWithObjBound = fn.bind(obj1);
console.log(fnWithObjBound());

let obj2 = {
    a: 20
};

let anotherThisObjBound = obj.getA.bind(obj2);
console.log(anotherThisObjBound());
// here we may be getting undefined in o/p because the fn doesn't return
// anything.


//O/p:
{ a: 18 } 18
undefined
{ a: 20 } 20
undefined
