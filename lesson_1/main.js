/**
 * Mảng trong Javascript - Array
 * 
 * 1. Tạo mảng
 *      - Cách tạo
 *      - Sử dụng cách nào? Tại sao?
 *      - Kiểm tra data type?
 * 
 * 2. Truy xuất mảng
 *      - Độ dài mảng
 *      - Lấy phần tử theo index
 */

var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function () {

    },
    {},
    123
];

var languages2 = new Array(
    'JavaScript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function () {

    },
    {},
    123
);
console.log(languages);
console.log(languages2);

console.log(typeof (languages2));

console.log(Array.isArray(languages));
console.log(languages[1]);
