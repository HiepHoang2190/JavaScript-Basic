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
        coin: 300
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
];

// // Biến lưu trữ
// var totalCoin = 0;

// //Lặp qua các phần tử
// for (var course of courses) {
//     // Thực hiện việc lưu trữ
//     totalCoin += course.coin;
// }

// console.log(totalCoin);

var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    });

    // console.log(accumulator);
    // console.log(currentValue);

    return total;
}

var totalCoin = courses.reduce(coinHandler, 0); //initial value

console.log(totalCoin);


// => viết ngắn gọn hơn như ở dưới

var totalCoin2 = courses.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);
console.log(totalCoin2);