"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Q1. join : make a string out of an array
{
  var fruits = ['apple', 'banana', 'orange'];
  var result = fruits.join();
} // Q2. split : make an array out of a string

{
  var _fruits = '🍎, 🥝, 🍌, 🍒';

  var _result = _fruits.split(',');
} // Q3. reverse : make this array look like this: [5, 4, 3, 2, 1]

{
  var array = [1, 2, 3, 4, 5];

  var _result2 = array.reverse();
} // Q4. slice : make new array without the first two elements

{
  var _array = [1, 2, 3, 4, 5];

  var _result3 = _array.slice(2, 5);
}

var Student = function Student(name, age, enrolled, score) {
  _classCallCheck(this, Student);

  this.name = name;
  this.age = age;
  this.enrolled = enrolled;
  this.score = score;
};

var students = [new Student('A', 29, true, 45), new Student('B', 28, false, 80), new Student('C', 30, true, 90), new Student('D', 40, false, 66), new Student('E', 18, true, 88)]; // Q5. find : find a student with the score 90

{
  var _result4 = students.find(function (student) {
    return student.score === 90;
  });

  console.log(_result4);
} // Q6. filter : make an array of enrolled students

{
  var _result5 = students.filter(function (student) {
    return student.enrolled;
  });

  console.log(_result5);
} // Q7. map : make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

{
  var _result6 = students.map(function (student) {
    return student.score;
  });

  console.log(_result6);
} // Q8. some : check if there is a student with the score lower than 50

{
  var _result7 = students.some(function (student) {
    return student.score < 50;
  });

  console.log(_result7);
  var result2 = !students.every(function (student) {
    return student.score >= 50;
  });
  console.log(result2);
}
console.clear(); // Q9. reduce : compute students' average score

{
  var _result8 = students.reduce(function (prev, curr) {
    return prev + curr.score;
  });

  console.log(_result8 / students.length);
} // Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'

{
  var _result9 = students.map(function (student) {
    return student.score;
  }).filter(function (score) {
    return score >= 50;
  }); //  .join();


  console.log(_result9);
} // Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'

{
  var _result10 = students.map(function (student) {
    return student.score;
  }).sort(function (a, b) {
    return a - b;
  }); // .join();


  console.log(_result10);
}