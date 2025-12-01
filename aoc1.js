/*
have a tracker variable
L - subtract
R - add
*/

const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('aoc1.txt');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity 
});

let tracker = 50;
// Listen for the 'line' event
rl.on('line', (line) => {
 console.log(line.split(" "))
});
