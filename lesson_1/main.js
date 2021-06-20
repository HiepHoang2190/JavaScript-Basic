




// var courses = [
//     'JavaScript',
//     'PHP',
//     'Ruby'
// ];

// courses.length = 1000;

// courses.forEach(function (course, index, array) {
//     console.log(course, index, array);
// });


// forEach2
Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        // console.log(index, this.hasOwnProperty(index));
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}


var courses2 = new Array(100);

courses2.push('JavaScript', 'Ruby');

console.log(courses2);

courses2.forEach2(function (course, index, array) {
    console.log(course, index, array);
});
