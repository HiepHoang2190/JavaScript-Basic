// Toán tử ++ --
// Prefix & Postfix

var a = 6;


// Việc 1 : a++ : +1 cho a, a= a+1 => a=7;
//Việc 2 : ++a : Trả về a sau khi được +1
console.log(++a);


var b = 6;
//  Việc 1 : `b copy `, `b copy` = 6
//  Việc 2 : +1 cho b, b = b+1 => b=7
// Việc 3 : trả về `b copy`
var output = b++;
console.log('output: ', output);
console.log('b: ', b);


var number = 6;
var output2 = number++ + --number;

// 6 + 6
console.log('output2: ', output2);


var output3 = ++number * 2 - number-- * 2;

// 7*2 - 7*2 
console.log('output3: ', output3);