/**
 * Các loại function
 *
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 *
 */

// Declaration function
function showMessage() {
    console.log('Declaration function');
}

showMessage();
// Expression function
var showMessage2 = function () {
    console.log('Expression function');
}
showMessage2();

setTimeout(function autoLogin() {

});

var myObject = {
    myFunction: function () {

    }
}