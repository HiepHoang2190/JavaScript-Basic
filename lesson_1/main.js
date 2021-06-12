// Hiểu hơn về câu lệnh điều kiện và phép so sánh


var a = 1;
var b = 2;

var result = a < b;
console.log('result ', result);

if (a < b) {
    console.log('A < B');
} else {
    console.log('A > B');
}


var result2 = a < b && a < 0;
console.log(result2);


/**
 * 0
 * false
 * ''
 * null
 * Nan
 * undefined
 */

var result3 = 'A' && 'B' && 'C';
console.log(result3);

var result4 = null && 'B' && 'C';
console.log(result4);

var result5 = 'A' && 'B' && NaN && 'D';
console.log(result5);

if (result5) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');
}

var result6 = 'A' || 'B' || 'C' || 'D';
console.log('result6', result6);

var result7 = null || 'B' || 'C' || 'D';
console.log('result7', result7);

var result8 = 'A' || 'B' || undefined || 'D';
console.log('result8', result8);

var result9 = null || false || undefined || 0;
console.log(result9);

if (result9) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');
}