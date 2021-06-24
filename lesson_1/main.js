

// HTML DOM

// Có 3 thành phần

/**
 * 1. Element: ID , class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 */




var headingNode = document.getElementById('heading');
console.log({
    elemment: headingNode
});

var headingNodes = document.getElementsByClassName('heading');
console.log(headingNodes);


var headingNodes = document.getElementsByTagName('p');
console.log(headingNodes);

var headingH2 = document.querySelector('.box .heading-2:first-child');

console.log(headingH2);

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms['form-1']);
console.log(document.forms.testForm);