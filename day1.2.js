// read lines form file

const fs = require('fs');
const { isNumberObject } = require('util/types');
const lines = fs.readFileSync('./data.txt', 'utf8').split('\n');

let all = 0;
const validDigits = ',one,two,three,four,five,six,seven,eight,nine,1,2,3,4,5,6,7,8,9,'.split(',');
const validDigitsJoined = validDigits.join('|');

lines.forEach((line, index) => {
    let nums = Array.from(line.matchAll('/' + validDigitsJoined + '/g'));

    if (nums.length >= 2) {
        let numlist = nums.map((key) => key[0]);

        let lastID = nums.length - 1;
        let numFirst = (isNaN(numlist[0])) ? validDigits.indexOf(numlist[0]) : numlist[0];
        let numLast = (isNaN(numlist[lastID])) ? validDigits.indexOf(numlist[lastID]) : numlist[lastID];

        let num = parseInt(numFirst.toString() + numLast.toString());
        all += num;

        console.log(index + 1, numlist, num, all);
    }
});

console.log('Total:', all);