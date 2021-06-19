
/**
 * 
 * Object prototype - Basic
 * 1.Prototype là gì ?
 * 2.Sử dụng khi nào
 */


function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className;
}
var author = new User('Son', 'Đặng', 'Avatar 1');
var user = new User('Vũ', 'Nguyễn', 'Avatar 2');



console.log(author);
console.log(user);

console.log(author.className);
console.log(user.className);
console.log(author.getClassName());
console.log(user.getClassName());
