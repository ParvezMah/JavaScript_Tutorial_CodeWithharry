let str = "Har\"";
console.log(str)

console.log("====================Problem 2=======================");
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
console.log('\n');

console.log("====================Problem 2=======================");


console.log('\n');
console.log("====================Problem 3=======================");
console.log(word.toLowerCase());
console.log(word.toUpperCase());
console.log('\n');


console.log("====================Problem 4=======================");
let str2 = "Please Give me 1000";
const amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log("Typeof : ", typeof amount );
console.log('\n');


console.log("====================Problem 4=======================");
//change the 4th character.
let str3 = "Deepika";
str3[3]="l";            //String is immutable
console.log(str3);
console.log('\n');