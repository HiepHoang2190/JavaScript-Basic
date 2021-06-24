

// HTML DOM

// Có 3 thành phần

/**
 * 1. Element: ID , class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 */




var boxNode = document.querySelector('.box-1');

// Công việc 1 : Sử dụng tới `boxNode`
console.log(boxNode);

// Công việc 2: Sử dụng tới các li elements là con của `.box-1`


console.log(boxNode.querySelectorAll('li'));
console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.getElementsByTagName('p'));