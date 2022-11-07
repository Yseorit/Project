// string concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literalas: 1 + 2 = ${1 + 2}`);

// Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); //greater than or equal

// 6. Logical operators; || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first truthy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check () {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('⛳');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !==numberFive);

// 8. Conditional operators: if
// if, else if, else
const name = 'seory';
if (name === 'seory') {
    console.log('Welcome, seory!');
} else if (name === 'coder') {
    console. log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operators: ?
// condition ? value1 : value2
console.log(name === 'seory' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const brower = 'chrome';
switch (brower) {
    case 'chrome':
        console.log('go away!');
        break;
    case 'IE':
        console.log('not away!');
        break;
    case 'Firefox':
        console.log('no!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while (${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

for (let even = 0; even < 11; even++) {
    check(even);
}

function check (even) {
    (even % 2) ? console.log('홀수입니다'): console.log('짝수입니다' + even)
}

for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue
    }
    console.log(`q1. ${i}`)
}

for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}