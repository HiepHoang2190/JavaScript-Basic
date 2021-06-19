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

var i = 0;

var totalCoin = courses.reduce(function (total, course) {
    i++;

    console.log(i, total, course);
    return total + course.coin;
}, 0); // initial value

console.log(totalCoin);



var courses2 = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 100
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 220
    },
    {
        id: 4,
        name: 'PHP',
        coin: 480
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
];

var numbers = [100, 200, 220, 480, 500];

var totalCoin = numbers.reduce(function (total, number) {
    return total + number;
});

console.log(totalCoin);


// Flat - " Làm phẳng" mảng từ Depth array - "Mảng sâu"

depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];


var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

//  Lấy ra các khóa học đưa vào 1 mảng lưới

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
];

var newCourses = topics.reduce(function (courses, topic) {

    return courses.concat(topic.courses);
}, []);

console.log(newCourses);

var htmls = newCourses.map(function (course) {
    return `
    <div>
    <h2> ${course.title}</h2>
    <p>ID: ${course.id}</p>
    </div>
    `;
});

console.log(htmls.join(''));