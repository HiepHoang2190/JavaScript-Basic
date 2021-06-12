
// LÀM VIỆC VỚI CHUỖI

var myString = '  HỌC JS TAI JS JS F8!  ';

// Keyword: JavaScript string methods

// 1. Length
console.log(myString.length);

// 2. Find index
console.log(myString.indexOf('JS'));
console.log(myString.indexOf('JS', 6));
console.log(myString.lastIndexOf('JS'));
console.log(myString.search('JS'));

// 3. Cut string

console.log(myString.slice(4, 6));
console.log(myString.slice(4));
console.log(myString.slice(0));
console.log(myString.slice(-3, -1));

// 4. Replace
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'Javascript')); // dùng biểu thức chính quy để thay hết các từ js

// 5. Convert to upper case

console.log(myString.toUpperCase());

// 6. Convert to lower case

console.log(myString.toLowerCase());

// 7. Trim
console.log(myString.trim());

// 8. Spilit
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(','));
console.log(languages.split(', '));

var languages2 = 'Javascript';
console.log(languages.split(''));

// 9. Get a character by index

const myString2 = 'Son Dang';

console.log(myString2.charAt(0));
console.log(myString2.charAt(1));
console.log(typeof (myString2.charAt(100)));