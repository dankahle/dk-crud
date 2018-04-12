// require('babel-register');
// require("babel-polyfill");
// import {map} from 'lodash';

/*
const patients = [
  [{name: 'John', roomNumber: 1, bedNumber: 1}],
  [{name: 'Lisa', roomNumber: 1, bedNumber: 2}],
  [{name: 'Chris', roomNumber: 2, bedNumber: 1}],
  [{name: 'Omar', roomNumber: 3, bedNumber: 1}]
];
*/

const arr = [
  {name: 'John', roomNumber: 3, bedNumber: 1},
  {name: 'Lisa', roomNumber: 1, bedNumber: 2},
  {name: 'Chris', roomNumber: 2, bedNumber: 1},
  {name: 'Omar', roomNumber: 3, bedNumber: 1}
];

// console.log(map(arr, x => x.name));
console.log(...arr);
