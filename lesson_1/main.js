

/**
 * Giới thiệu mọt số hàm built-in
1. Alert
2.Console
3.Configrm
4.Prompt
5.Set setTimeout
6.Set interval
 */

var fullName = 'Hoang Bach Hiep';

console.log(fullName);

// confirm('Xac nhan ban du tuoi!');

// prompt('Xac nhan ban du tuoi!');

// setTimeout(function () {
//     alert('Thong bao');
// }, 1000);

// set time out để chạy đoạn code 1 lần sau 1 khoảng thời gian xác định

setInterval(() => {
    console.log('Day la log' + Math.random());
}, 1000);

// set interval chạy đoạn code sau 1 khoảng thời gian nhưng lặp lại chứ ko chạy 1 lần 
// như set timeout