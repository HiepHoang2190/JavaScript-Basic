// includes method

// console.log(Array.prototype.includes);

var title = "Responsive web design";
console.log(title.includes('Responsive', 0));
// console.log(title.includes('sdsdsđs'));


var courses = ['Javascript', 'PHP', 'Dart'];

console.log(courses.includes('Javascript', 0));
console.log(courses.includes('Javascript', 1));
console.log(courses.includes('Javascript', -1));
console.log(courses.includes('Javascript', -3));