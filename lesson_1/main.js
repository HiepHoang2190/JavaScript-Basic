/**
 * Kiểu dữ liệu trong JavaScript
 * 
 * 1. Dữ liệu nguyên thủy - Primitive Data
 * -Number
 * -String
 * -Boolean
 * -Undefined
 * -Null
 * -Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex Data
 * -Function
 * -Object
 * 
 */

// Number type
var a = 1;
var b = 2;
var c = 1.5;
console.log(typeof a);

//String type

var fullName = " Hiep 'Hoang";
console.log(fullName);

//Boolean
var isSuccess = true;

// Undefined type
var age;
console.log(age);
// Null 
var isNull = null; //nothing
console.log(isNull);
console.log(typeof isNull);

// Symbol
var id = Symbol('id');  //unique
var id2 = Symbol('id');  //unique

console.log(id === id2);
console.log(id2);

// Function

var myFunction = function () {
    alert('Hi. Xin chào các bạn');
}
// myFunction();

// Object types
var myObject = {
    name: 'Hiep Hoang',
    age: 18,
    address: 'Hue',
    myFunction: function () {

    }
};
console.log('myObject ', myObject);

var myArray = [
    'JavaScript',
    'PHP',
    'Ruby'
]
console.log('myArray ', myArray);

