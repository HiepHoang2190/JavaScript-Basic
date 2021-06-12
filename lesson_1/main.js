/**
 * CHUỖI TRONG JAVASCRIPT
 * 
 * 1. Tạo chuỗi
 *      - Các cách tạo chuỗi
 *      - Nên dùng cách nào? Lý do ?
 *      - Kiểm tra data taype
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết Code
 * 5.Template string ES6
 * 
 */

// var fullName = new String('Hiep Hoang');
// console.log(typeof fullName);

var fullName = 'Son Dang la \'Sieu nhan\'';
console.log(fullName);

console.log(fullName.length);

// Cách xuống dòng để code gọn

var fullName2 = "Một số case sử dụng backslash "
    + "1. Một số case sử dụng backslash"
    + "2. Một số case sử dụng backslash"
    + "3. Một số case sử dụng backslash"
    ;
console.log(fullName2);

// Template string ES6
var firstName = 'Son';
var lastName = "Dang";
// console.log(' Toi la: ' + firstName + ' ' + lastName);
console.log(`Toi la: ${firstName} ${lastName}`);