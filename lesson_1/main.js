
//  Object constructor


var User = function (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Son', 'Đặng', 'Avatar');
var user = new User('Vũ', 'Nguyễn', 'Avatar');

author.title = 'Chia sẻ dạo tại F8';
user.comment = 'Liệu có khóa asp.net k ad ';

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());
