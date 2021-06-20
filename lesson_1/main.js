//Callback - Phần 2?

// 1. Là hàm
// 2. Truyền qua đối số
// 3. được gọi lại (trong hàm nhận đối số)
Array.prototype.map2 = function (callback) {
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i);
        console.log('result: ', result);
        output.push(result);
    }
    return output;
}
var courses = [
    'JavaScript',
    'PHP',
    'Ruby'
];

// var htmls = courses.map(function (course) {
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));




var htmls = courses.map2(function (course, index) {
    return `<h2>${course}</h2>`;
});
console.log(htmls.join(''));