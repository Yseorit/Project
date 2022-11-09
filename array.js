'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'orange'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('','');

// pop : remove an item from the end
fruits.pop();

// unshift : add an item to the benigging
fruits.unshift('','');

//shift : remove an item from the benigging
fruits.shift();

// shift, unshift are slower than pop, push!
// splice : remove an item by index position
fruits.splice(1,1);

// concat : combine two arrays
const fruits2 = ['a', 'b'];
const newFruits = fruits.concat(fruits2);

// 5. Searching
// indexOf : find the index

// includes

//lastIndexOf