/**
 * Một số điều cần biết về function
 * 
 * 1. Khi function đặt trùng tên
 * 2. Khai báo biến trong hàm
 * 3. Định nghĩa hàm trong hàm
 * 
 */

function showMessage() {
    console.log('Message 1');
}
function showMessage() {
    console.log('Message 2');
}
function showMessage() {
    console.log('Message 3');
}

showMessage();

function showMessage2() {
    var fullName = 'Son Dang';
    console.log(fullName);
}
showMessage2();

function showMessage4() {
    function showMessage3() {
        console.log('Message 2');
    }
    showMessage2();
}
showMessage4();