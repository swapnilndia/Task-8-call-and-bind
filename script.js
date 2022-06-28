var obj1 = {
    num1: 20,
    num2: 30
};
var obj2 = {
    num1: 200,
    num2: 300
};

var addToThis = function (a, b, c, d) {
    return this.num1 + this.num2 + a + b + c + d;
}
//Call function
console.log(addToThis.call(obj1, 40, 50, 60, 70));

console.log(addToThis.call(obj2, 40, 50, 60, 70));

var arr1 = [10, 20, 30, 40];
var arr2 = [100, 200, 300, 400];

//Apply function
console.log(addToThis.apply(obj1, arr1));

console.log(addToThis.apply(obj2, arr2));

//Bound function
var bound = addToThis.bind(obj1);
console.log(bound(10, 20, 30, 40));

var bound = addToThis.bind(obj2);
console.log(bound(100, 200, 300, 400));

var student = { age: 20 };
var studentAge = function () {
    return `Age of student is ${this.age}`
}
var bound1 = studentAge.bind(student);
console.log(bound1());


//Currying in Javascript
let multiply = function (x, y) {
    console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this);
multiplyByThree(5, 6);

let multiplyNew = function(x) {
    return function (y) {
        console.log(x * y)
    }
}

let multiplybyTwoNew = multiplyNew(2);
multiplybyTwoNew(3);