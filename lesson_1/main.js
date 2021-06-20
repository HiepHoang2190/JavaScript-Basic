



// some: true/false

// var courses = [
//     {
//         name: 'JavaScript',
//         coin: 680,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false,
//     }
// ];

// var result = courses.some(function (course, index) {
//     return course.isFinish;
// });

// console.log(result);




// some2: true/false

Array.prototype.some2 = function (callback) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                output = true;
                break;
            }
        }
    }
    return output;
}


var courses = [
    {
        name: 'JavaScript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];

var result = courses.some2(function (course, index) {
    return course.isFinish;
});

console.log(result);