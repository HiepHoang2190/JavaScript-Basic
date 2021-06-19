/**
 * Array methods:
 * 
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 * 
 * 
 */

var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 500
    }
];

// forEach()
// courses.forEach(function (course, index) {
//     console.log(index, course);
// });

// every() : kiểm tra tất cả các phần tử thỏa mãn điều gì đó
//  ví dụ ở trên kiểm tra khóa học trên là miễn phí hết hay là có phí
// var isFree = courses.every(function (course, index) {
//     console.log(index);
//     return course.coin === 0;
// });

// console.log(isFree);

// some() : kiểm tra chỉ cần 1 phần tử thỏa mãn điều gì đó

// var isFree = courses.some(function (course, index) {
//     console.log(index);
//     return course.coin === 0;
// });

// console.log(isFree);

//find()

// var isFree = courses.find(function (course, index) {
//     return course.name === 'Ruby';
// });

// console.log(isFree);

//filter()

var listCourses = courses.filter(function (course, index) {
    return course.name === 'Ruby';
});

console.log(listCourses);