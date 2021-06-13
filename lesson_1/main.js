// Tham số hàm - JavaScript cơ bản

/**
 * 1. Tham số?
 *      - Định nghĩa
 *      - Kiểu dữ liệu
 *      - Tính private
 *      - 1 tham số
 *      - Nhiều tham s
 * 
 * 2. Arguments?
 *      - Đối tượng arguments
 *      - Giới thiệu vòng for
 */

// function writeLog(message, message2) {
//     if (message) {
//         console.log(message);
//     }
//     if (message2) {
//         console.log(message2);
//     }
// }

// writeLog('TEST', 'TEST2');


// function writeLog2() {
//     console.log(arguments);
// }
// writeLog2('TEST', 'TEST2');

function writeLog3() {
    var myString = '';
    for (var param of arguments) {
        myString += ` ${param} -`
    }
    console.log(myString);
}
writeLog3('TEST', 'TEST2', 'log 2', 'log3');

