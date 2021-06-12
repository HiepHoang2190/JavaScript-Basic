/**
 * Làm việc với Array
 * 
 * Keyword: Javascript array methods
 * 
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Spilicing
 * 8. Concat
 * 9, Slicing
 */

var languages = [
    'JavaScript',
    'PHP',
    'Ruby'
];

var languages2 = [
    'Net Core',
    'Python',
];
// console.log(languages.join(', '));

// console.log(languages.pop()); // xóa element cuối mảng và trả về phần tử đã xóa
// console.log(languages);

// console.log(languages.push('Dart', 'Java'));
// console.log(languages);

// console.log(languages.shift());
// console.log(languages);

// console.log(languages.unshift('Dart', 'Java'));
// console.log(languages);

// languages.splice(1, 1, 'Dart');
// console.log(languages);

// console.log(languages.concat(languages2));

console.log(languages.slice(1, 4));
console.log(languages.slice(0));
console.log(languages.slice(-2, -1));