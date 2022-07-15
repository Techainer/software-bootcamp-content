// const { sum } = require('./util')
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
console.log(dataObj);
// var result = sum(3,4);
// console.log(result);