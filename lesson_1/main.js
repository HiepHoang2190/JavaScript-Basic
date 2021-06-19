// For/of loop

// var languages = [
//     'JavaScript',
//     'PHP',
//     'Java'
// ];

// for (var value of languages) {
//     console.log(value);
// }


var myInfo = {
    name: 'Son Dang',
    age: 18
};
// console.log(Object.keys(myInfo));
// console.log(Object.values(myInfo));
for (var value of Object.keys(myInfo)) {
    console.log(value);
}
for (var value of Object.values(myInfo)) {
    console.log(value);
}