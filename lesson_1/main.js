
//  Object trong JavaScript

var emailKey = 'email';

var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey]: 'sonvn@fullstack.edu.vn',
    phone: '03030',
    getName: function () {
        return this.name;
    },
    getAge: function () {

    }
};

// myInfo.email = 'sonvn@fullstack.edu.vn';
// myInfo['my-email'] = 'sonvn@fullstack.edu.vn';

var myKey = 'address';

console.log(myInfo);

console.log(myInfo.name);
console.log(myInfo['email']);
console.log(myInfo['namess']);
console.log(myInfo[myKey]);

// function --> phương thức / method
//  Other --> thuộc tính / property

console.log(myInfo.getName());
