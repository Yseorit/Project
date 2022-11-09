// objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in javascript are instances of Object
// object = { key: value}; 

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(preson.name);
    console.log(person.age);
}

const seory = { name: 'seory', age: 4};
print(seory);

// with JavaScript magic (dynamically typed language)
// can add properties later
seory.hasJop = true;
console.log(seory.hasJop);

// can delete properties later
delete seory.hasJop;
console.log(seory.hasJop);

// 2. computed properties
// key should be always string
console.log(seory.name);
console.log(seory['name']);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(seory, 'name');
printValue(seory, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('seory', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
};

// 5. in operator: property existence check (key in obj)

// 6. for.. in vs for..of
// for (key in obj)
console.clear();
for (key in seory) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name : 'seory', age : '30'};
const user2 = user;