

var courses = new Array(10);
courses.push('JavaScript', 'PHP');

courses.length = 10;

console.log(courses);

for (var index in courses) {
    console.log(courses[index]);
}