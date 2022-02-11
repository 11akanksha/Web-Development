class Animal {
    constructor(name) {
        this.name = name;
    }

    static speak(a, b) {
        console.log(`${a.Name} is talking to ${b.Name}`);
    }
}

class XYZ {
    constructor(Name) {
        this.Name = Name;
    }
}

let dog = new XYZ('Snoopy');
let cat = new XYZ('Brownie');
Animal.speak(dog, cat);

//O/p)
Snoopy is talking to Brownie

----------------------------------

class Rectangle {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        //we can add new properties which will have the same fixed
        //value for all objects:
        this.type = "shape";
    }
    doubleHeight() {
        this.height *= 2;
    }
    doubleWeight() {
        this.weight *= 2;
    }
};

const rect = new Rectangle(2, 4);
rect.doubleHeight();
rect.doubleWeight();
console.log(rect);

//O/p)
Rectangle { height: 4, weight: 8, type: 'shape' }

------------------------

class Rectangle {
    constructor(height = 5, weight = 4) {
        this.height = height;
        this.weight = weight;
        //we can add new properties which will have the same fixed
        //value for all objects:
        this.type = "shape";
    }
    doubleHeight() {
        this.height *= 2;
    }
    doubleWeight() {
        this.weight *= 2;
    }
};

const rect1 = new Rectangle();
rect1.doubleHeight();
rect1.doubleWeight();
console.log(rect1);

const rect2 = new Rectangle(2);
rect2.doubleHeight();
rect2.doubleWeight();
console.log(rect2);

const rect3 = new Rectangle(10, 20);
rect3.doubleHeight();
rect3.doubleWeight();
console.log(rect3);

//O/p)
Rectangle { height: 10, weight: 8, type: 'shape' }
Rectangle { height: 4, weight: 8, type: 'shape' }
Rectangle { height: 20, weight: 40, type: 'shape' }
