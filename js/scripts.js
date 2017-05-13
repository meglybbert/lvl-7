// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

console.log('Hello, World!');

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
  { name: 'Meg', year: 1997 }
];

const comments = [
  { text: 'Love this!', id: 523423, certainty: 'sure' },
  { text: 'Super good', id: 823423, certainty: 'sure' },
  { text: 'You are the best', id: 2039842, certainty: 'sure' },
  { text: 'Ramen is my fav food ever', id: 123523, certainty: 'sure' },
  { text: 'Nice Nice Nice!', id: 542328, certainty: 'sure' },
  { text: 'What is even happening?', id: 897655, certainty: 'confused' }
];

var puzzlePieces = ['What', 'is', 'even', 'happening', '?']

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?
// const isAdult = people.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19) {
//     return true;
//   }
// });

const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({isAdult});
// Array.prototype.every() // is everyone 19?

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423


const comment = comments.find(comment => comment.id === 823423);

console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
// const index = comments.findIndex(comment => comment.id === 823423);
// console.log(index);

// comments.splice(index, 1);

// const newComments = [
//  ...comments.slice(0, index),
//  ...comments.slice(index + 1)
// ];

//MEG's ADDITION
//Find the comment made by a confused person 
const index = comments.find(comment => comment.certainty === 'confused');
console.log(index);

//Put the puzzle pieces together
var puzzleComplete = puzzlePieces.join(' ');
console.log(puzzleComplete);