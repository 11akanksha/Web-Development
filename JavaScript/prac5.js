//Creating a pollyfill for bind function:

Function.prototype.myBind() = function () {
    let fnref = this;
    let thisObjectToBeBoundTo = arguments[0];
    let params = arguments.slice(1);

    return function (...args) {
        fnref.apply(thisObjectToBeBoundTo, [...params, ...args]);
    }
};

const fn = function (a, b, c) {
    console.log("hi");
    console.log(a, b, c);
}
const objToBind = {};

const fnToCall = fn.myBind(objToBind, 1, 2, 3);
fnToCall(4, 5, 6);

//O/P)
hi
4 5 6

---------------------------------
  
let obj = {};
console.log(Object.getPrototypeOf(obj));

let arr = [];
console.log(Object.getPrototypeOf(arr));

//O/p)
[Object: null prototype] {}
Object(0) []

---------------------------
  
Car.prototype.openCar = function () {
    console.log("Car is switched ON!Enjoy!!");
}

let myCar = new Car('Eon', 20000, 'magna plus');
console.log(myCar);
myCar.customColour = 'very cool colour';
myCar.openCar();
console.log(myCar);

//O/p)
Car { brand: 'Eon', mileage: 20000, name: 'magna plus' }
Car is switched ON!Enjoy!!
Car {
  brand: 'Eon',
  mileage: 20000,
  name: 'magna plus',
  customColour: 'very cool colour'
}
