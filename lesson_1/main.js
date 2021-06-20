/**
 * Math object
 * 
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - Math.ceil()
 * - Math.floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 * 
 */

console.log(Math.PI);

var random = Math.floor(Math.random() * 5);

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',

];

console.log(bonus[random]);

var random2 = Math.floor(Math.random() * 100);

if (random2 < 5) {
    console.log('Cường hóa thành công');

}

console.log(Math.min(-100, 2, 4, 777));
