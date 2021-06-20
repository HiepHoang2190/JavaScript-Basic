
// console.log(result);




// every2: true/false

Array.prototype.every2 = function (callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
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
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];

var result = courses.every2(function (course, index) {
    return course.isFinish;
});

console.log(result);